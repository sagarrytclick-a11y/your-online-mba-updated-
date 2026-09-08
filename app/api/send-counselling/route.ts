import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { connectDB } from "@/app/lib/db";
import { Enquiry } from "@/app/models/Enquiry";
import { counsellingSchema } from "@/app/lib/validation";

const resend = new Resend(process.env.RESEND_API_KEY!);
const fromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";
const toEmail = process.env.RESEND_TO_EMAIL!;

// Simple in-memory rate limiting
const rateLimit = new Map<string, number>();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const MAX_SUBMISSIONS = 5;

export async function POST(req: NextRequest) {
  try {
    // Basic Rate Limiting based on IP
    const ip = req.headers.get("x-forwarded-for") || "anonymous";
    const now = Date.now();
    const userSubmissions = rateLimit.get(ip) || 0;

    if (userSubmissions >= MAX_SUBMISSIONS) {
      return NextResponse.json(
        { error: "Too many submissions. Please try again later." },
        { status: 429 }
      );
    }

    const body = await req.json();
    
    // Honeypot check for bots
    if (body.website) {
      return NextResponse.json({ success: true, message: "Request received" });
    }

    const result = counsellingSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json({ error: "Invalid form data", details: result.error.format() }, { status: 400 });
    }

    const { name, phone, email, specialization, city } = result.data;

    await connectDB();
    const enquiry = await Enquiry.create({ name, phone, email, specialization, city });

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      subject: `New Counselling Request from ${name}`,
      html: `
        <h2 style="color:#C81E3D;">New Free Counselling Request</h2>
        <table style="border-collapse:collapse;width:100%;max-width:500px;font-family:sans-serif;">
          <tr><td style="padding:8px 12px;font-weight:700;border-bottom:1px solid #eee;">Name</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${name}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:700;border-bottom:1px solid #eee;">Phone</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${phone}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:700;border-bottom:1px solid #eee;">Email</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${email}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:700;border-bottom:1px solid #eee;">Preferred Specialization</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${specialization}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:700;border-bottom:1px solid #eee;">City</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${city}</td></tr>
        </table>
        <p style="color:#888;font-size:12px;margin-top:24px;">Submitted via Your Online MBA</p>
      `,
    });

    if (error) {
      console.error("Resend Error (Entry saved in DB but email failed):", error);
    }

    // Update rate limit
    rateLimit.set(ip, userSubmissions + 1);
    // Cleanup old rate limits occasionally (naive)
    setTimeout(() => rateLimit.delete(ip), RATE_LIMIT_WINDOW);

    return NextResponse.json({ success: true, id: enquiry._id });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Internal server error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
