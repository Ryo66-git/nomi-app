import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { characters } from "../../characters";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const { message, characterId, conversationHistory } = await request.json();

    const character = characters.find((c) => c.id === characterId);
    if (!character) {
      return NextResponse.json(
        { error: "Character not found" },
        { status: 404 }
      );
    }

    // 会話履歴を構築
    const systemMessage = characterId === "ojisan"
      ? `${character.personality}\n\nあなたは${character.name}として、おじさん構文（「〜だな」「〜だぞ」「〜じゃないか」「〜なんだよ」「〜だぜ」「そうそう、わかるわかる」など）を必ず使って会話してください。親しみやすく、時々経験談を交えながら話してください。過去の会話の内容も覚えていて、それに基づいて会話を続けてください。`
      : `${character.personality}\n\nあなたは${character.name}として、自然で親しみやすい会話をしてください。過去の会話の内容も覚えていて、それに基づいて会話を続けてください。`;

    const messages: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = [
      {
        role: "system",
        content: systemMessage,
      },
      ...conversationHistory.map((msg: { role: string; content: string }) => ({
        role: msg.role as "user" | "assistant",
        content: msg.content,
      })),
      {
        role: "user",
        content: message,
      },
    ];

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: messages,
      temperature: 0.8,
      max_tokens: 500,
    });

    const response = completion.choices[0]?.message?.content || "すみません、聞き取れませんでした。";

    return NextResponse.json({ response });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

