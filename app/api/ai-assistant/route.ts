

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { message } = await req.json();
  const apiKey = process.env.OPENAI_API_KEY;

  // Debug log for Vercel build logs
  console.log("OPENAI_API_KEY present:", !!apiKey);

  if (!apiKey) {
    return NextResponse.json({ content: "API key is missing." }, { status: 500 });
  }

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: message }],
        max_tokens: 150,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("API error:", errorText);
      return NextResponse.json({ content: `API error: ${errorText}` }, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json({ content: data.choices?.[0]?.message?.content || "No response from AI." });
  } catch (error) {
    console.error("Fetch error:", error);
    return NextResponse.json({ content: `Fetch error: ${error}` }, { status: 500 });
  }
}
