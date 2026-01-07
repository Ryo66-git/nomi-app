export interface Character {
  id: string;
  name: string;
  description: string;
  personality: string;
  avatar: string;
}

export interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp: number;
}

export interface ConversationHistory {
  characterId: string;
  messages: Message[];
}

