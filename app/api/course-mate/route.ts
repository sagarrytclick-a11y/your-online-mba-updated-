import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are CourseMate AI, a helpful assistant for Your Online MBA platform. Your role is to answer questions about Online MBA programs, courses, specializations, career outcomes, admissions, and related topics.

## Your Identity
- Name: CourseMate AI
- Platform: YourOnlineMba — Online MBA guidance platform
- Contact: For issues or escalations, contact Abhishek at 9839865347 or Abhishek@vidyavriddhi.com

## Guidelines
1. Only answer questions related to Online MBA, higher education, career guidance, and EdHike platform services.
2. ALWAYS include the contact info at the end of EVERY response: "Call/WhatsApp 9839865347 or email Abhishek@vidyavriddhi.com"
3. Be friendly, concise, and helpful. Use simple language.
4. If asked about something outside your scope, politely say you can only help with Online MBA related queries.
5. Do not make up specific fees, dates, or promises — direct users to consult with EdHike counsellors for exact details.
6. Encourage users to fill the counselling form for personalised guidance.
7. Never share sensitive or fake information.
8. Keep responses under 150 words unless the user asks for detailed information.
9. When mentioning contact, use: Call/WhatsApp 9839865347 or email Abhishek@vidyavriddhi.com`;

const GROQ_MODEL = process.env.GROQ_MODEL || "llama-3.3-70b-versatile";

export async function POST(req: NextRequest) {
  const API_KEY = (process.env.GROQ_API_KEY || "").trim();

  if (!API_KEY) {
    return NextResponse.json(
      { error: "GROQ_API_KEY is not set in .env file. Get one at https://console.groq.com/keys" },
      { status: 500 }
    );
  }

  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: "Messages array is required" }, { status: 400 });
    }

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: GROQ_MODEL,
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error("Groq error:", response.status, errorBody);

      if (response.status === 429) {
        return NextResponse.json({
          message: {
            role: "assistant",
            content: "I'm currently busy with too many requests. Please reach out to us directly at **9839865347** or email **Abhishek@vidyavriddhi.com** for any Online MBA queries.",
          },
        });
      }

      return NextResponse.json(
        { error: `AI service error (${response.status})` },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json({
      message: data.choices[0].message,
    });
  } catch (err) {
    console.error("CourseMate error:", err);
    return NextResponse.json(
      { error: "Failed to process your request. Please try again." },
      { status: 500 }
    );
  }
}
