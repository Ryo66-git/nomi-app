import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const CONVERSATIONS_DIR = path.join(process.cwd(), "data", "conversations");

export async function DELETE(request: NextRequest) {
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
      await fs.unlink(filePath);
      return NextResponse.json({ success: true });
    } catch (error: any) {
      if (error.code === "ENOENT") {
        // ファイルが存在しない場合は成功として扱う
        return NextResponse.json({ success: true });
      }
      throw error;
    }
  } catch (error) {
    console.error("Error clearing conversation:", error);
    return NextResponse.json(
      { error: "Failed to clear conversation" },
      { status: 500 }
    );
  }
}

