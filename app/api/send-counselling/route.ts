import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { connectDB } from "@/app/lib/db";
import { Enquiry } from "@/app/models/Enquiry";

const resend = new Resend(process.env.RESEND_API_KEY!);
const fromEmail = process.env.RESEND_FROM_EMAIL!;
const toEmail = process.env.RESEND_TO_EMAIL!;

export async function POST(req: NextRequest) {
  try {
    const { name, phone, email, specialization, city } = await req.json();

    if (!name || !phone || !email || !specialization || !city) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

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
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: enquiry._id });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Internal server error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
