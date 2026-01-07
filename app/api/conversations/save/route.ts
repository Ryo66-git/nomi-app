import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import { ConversationHistory } from "@/app/types";

const CONVERSATIONS_DIR = path.join(process.cwd(), "data", "conversations");

// ディレクトリが存在しない場合は作成
async function ensureDirectoryExists() {
  try {
    await fs.access(CONVERSATIONS_DIR);
  } catch {
    await fs.mkdir(CONVERSATIONS_DIR, { recursive: true });
  }
}

export async function POST(request: NextRequest) {
  try {
    await ensureDirectoryExists();

    const { characterId, messages } = await request.json();

    if (!characterId || !messages) {
      return NextResponse.json(
        { error: "characterId and messages are required" },
        { status: 400 }
      );
    }

    const conversationHistory: ConversationHistory = {
      characterId,
      messages,
    };

    const filePath = path.join(CONVERSATIONS_DIR, `${characterId}.json`);
    await fs.writeFile(
      filePath,
      JSON.stringify(conversationHistory, null, 2),
      "utf-8"
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error saving conversation:", error);
    return NextResponse.json(
      { error: "Failed to save conversation" },
      { status: 500 }
    );
  }
}

