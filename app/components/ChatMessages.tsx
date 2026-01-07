"use client";

import { Message } from "../types";

interface ChatMessagesProps {
  messages: Message[];
  currentCharacterName: string;
}

export default function ChatMessages({
  messages,
  currentCharacterName,
}: ChatMessagesProps) {
  return (
    <div className="flex-1 overflow-y-auto space-y-4 p-4">
      {messages.length === 0 ? (
        <div className="text-center text-gray-500 mt-8">
          <p className="text-lg">飲み相手を選んで会話を始めましょう！</p>
          <p className="text-sm mt-2">マイクボタンを押して話しかけてください</p>
        </div>
      ) : (
        messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`
                max-w-[80%] rounded-2xl px-4 py-3
                ${
                  message.role === "user"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-800 text-gray-100"
                }
              `}
            >
              {message.role === "assistant" && (
                <div className="text-xs text-gray-400 mb-1">
                  {currentCharacterName}
                </div>
              )}
              <div className="whitespace-pre-wrap">{message.content}</div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

