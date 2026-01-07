import { ConversationHistory } from "../types";

// サーバーサイドのAPIを使用して会話履歴を保存
export async function saveConversationHistory(
  characterId: string,
  messages: ConversationHistory["messages"]
) {
  if (typeof window === "undefined") return;

  try {
    const response = await fetch("/api/conversations/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ characterId, messages }),
    });

    if (!response.ok) {
      console.error("Failed to save conversation history");
    }
  } catch (error) {
    console.error("Error saving conversation history:", error);
  }
}

// サーバーサイドのAPIを使用して会話履歴を読み込む
export async function getConversationHistory(
  characterId: string
): Promise<ConversationHistory["messages"]> {
  if (typeof window === "undefined") return [];

  try {
    const response = await fetch(
      `/api/conversations/load?characterId=${encodeURIComponent(characterId)}`
    );

    if (!response.ok) {
      console.error("Failed to load conversation history");
      return [];
    }

    const data: ConversationHistory = await response.json();
    return data.messages || [];
  } catch (error) {
    console.error("Error loading conversation history:", error);
    return [];
  }
}

// サーバーサイドのAPIを使用して会話履歴を削除
export async function clearConversationHistory(characterId: string) {
  if (typeof window === "undefined") return;

  try {
    const response = await fetch(
      `/api/conversations/clear?characterId=${encodeURIComponent(characterId)}`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      console.error("Failed to clear conversation history");
    }
  } catch (error) {
    console.error("Error clearing conversation history:", error);
  }
}

