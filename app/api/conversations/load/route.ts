import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import { ConversationHistory } from "@/app/types";

const CONVERSATIONS_DIR = path.join(process.cwd(), "data", "conversations");

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const characterId = searchParams.get("characterId");

    if (!characterId) {
      return NextResponse.json(
        { error: "characterId is required" },
        { status: 400 }
      );
    }

    const filePath = path.join(CONVERSATIONS_DIR, `${characterId}.json`);

    try {
      const fileContent = await fs.readFile(filePath, "utf-8");
      const conversationHistory: ConversationHistory = JSON.parse(fileContent);
      return NextResponse.json(conversationHistory);
    } catch (error: any) {
      if (error.code === "ENOENT") {
        // ファイルが存在しない場合は空の履歴を返す
        return NextResponse.json({
          characterId,
          messages: [],
        });
      }
      throw error;
    }
  } catch (error) {
    console.error("Error loading conversation:", error);
    return NextResponse.json(
      { error: "Failed to load conversation" },
      { status: 500 }
    );
  }
}

