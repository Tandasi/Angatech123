import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const { message } = await req.json()
  const apiKey = process.env.OPENAI_API_KEY

  if (!apiKey) {
    return NextResponse.json({ content: "API key is missing." }, { status: 500 })
  }

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
  })

  const data = await response.json()
  return NextResponse.json({ content: data.choices?.[0]?.message?.content || "No response from AI." })
}