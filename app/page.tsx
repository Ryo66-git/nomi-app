"use client";

import { useState, useEffect } from "react";
import { characters } from "./characters";
import { Message } from "./types";
import CharacterSelector from "./components/CharacterSelector";
import ChatMessages from "./components/ChatMessages";
import VoiceRecorder from "./components/VoiceRecorder";
import VoicePlayer from "./components/VoicePlayer";
import Avatar from "./components/Avatar";
import {
  saveConversationHistory,
  getConversationHistory,
  clearConversationHistory,
} from "./utils/storage";

export default function Home() {
  const [selectedCharacterId, setSelectedCharacterId] = useState<string | null>(
    null
  );
  const [messages, setMessages] = useState<Message[]>([]);
  const [isListening, setIsListening] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [currentTranscript, setCurrentTranscript] = useState("");

  // キャラクター選択時に会話履歴を読み込む
  useEffect(() => {
    if (selectedCharacterId) {
      getConversationHistory(selectedCharacterId).then((history) => {
        setMessages(history);
      });
    } else {
      setMessages([]);
    }
  }, [selectedCharacterId]);

  const handleTranscript = async (text: string) => {
    if (!selectedCharacterId || !text.trim()) return;

    setCurrentTranscript(text);
    const userMessage: Message = {
      role: "user",
      content: text,
      timestamp: Date.now(),
    };

    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setIsProcessing(true);

    try {
      const conversationHistory = updatedMessages.map((msg) => ({
        role: msg.role,
        content: msg.content,
      }));

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: text,
          characterId: selectedCharacterId,
          conversationHistory,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to get response");
      }

      const data = await response.json();
      const assistantMessage: Message = {
        role: "assistant",
        content: data.response,
        timestamp: Date.now(),
      };

      setMessages((prev) => {
        const newMessages = [...prev, assistantMessage];
        // 非同期で保存（エラーハンドリングは関数内で行う）
        saveConversationHistory(selectedCharacterId, newMessages).catch(
          (error) => console.error("Failed to save history:", error)
        );
        return newMessages;
      });
    } catch (error) {
      console.error("Error:", error);
      const errorMessage: Message = {
        role: "assistant",
        content: "すみません、エラーが発生しました。もう一度お試しください。",
        timestamp: Date.now(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleCharacterSelect = (characterId: string) => {
    if (selectedCharacterId === characterId) {
      setSelectedCharacterId(null);
      setMessages([]);
    } else {
      setSelectedCharacterId(characterId);
    }
  };

  const handleClearHistory = async () => {
    if (selectedCharacterId) {
      await clearConversationHistory(selectedCharacterId);
      setMessages([]);
    }
  };

  const selectedCharacter = selectedCharacterId
    ? characters.find((c) => c.id === selectedCharacterId)
    : null;

  const lastAssistantMessage = messages
    .filter((m) => m.role === "assistant")
    .slice(-1)[0];

  // 新しいアシスタントメッセージが追加されたら音声再生を開始
  useEffect(() => {
    if (lastAssistantMessage && !isProcessing) {
      setIsSpeaking(true);
    }
  }, [lastAssistantMessage?.timestamp, isProcessing]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            🍻 飲みニケーションAI
          </h1>
          <p className="text-gray-400">
            AIと音声で会話しながら飲みニケーションを楽しもう
          </p>
        </div>

        <CharacterSelector
          characters={characters}
          selectedCharacterId={selectedCharacterId}
          onSelect={handleCharacterSelect}
        />

        {selectedCharacter && (
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl border border-gray-700 shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-4 border-b border-gray-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar characterId={selectedCharacter.id} isSpeaking={isSpeaking} size="md" />
                  <div>
                    <h2 className="text-xl font-bold">
                      {selectedCharacter.name}
                    </h2>
                    <p className="text-sm text-gray-400">
                      {selectedCharacter.description}
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleClearHistory}
                  className="px-4 py-2 text-sm bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
                >
                  履歴をクリア
                </button>
              </div>
            </div>

            <ChatMessages
              messages={messages}
              currentCharacterName={selectedCharacter.name}
            />

            <div className="p-6 border-t border-gray-700">
              <div className="flex items-center justify-center gap-4">
                <button
                  onClick={() => setIsListening(!isListening)}
                  disabled={isProcessing || isSpeaking}
                  className={`
                    w-20 h-20 rounded-full flex items-center justify-center
                    text-3xl transition-all duration-200 transform
                    ${
                      isListening
                        ? "bg-red-500 hover:bg-red-600 scale-110 animate-pulse"
                        : "bg-blue-600 hover:bg-blue-700 hover:scale-105"
                    }
                    ${isProcessing || isSpeaking ? "opacity-50 cursor-not-allowed" : ""}
                  `}
                >
                  {isListening ? "⏹️" : "🎤"}
                </button>
                <div className="text-sm text-gray-400">
                  {isListening && "聞いています..."}
                  {isProcessing && "考えています..."}
                  {isSpeaking && "話しています..."}
                  {!isListening && !isProcessing && !isSpeaking && "マイクを押して話してください"}
                </div>
              </div>
            </div>
          </div>
        )}

        <VoiceRecorder
          onTranscript={handleTranscript}
          isListening={isListening}
          onListeningChange={setIsListening}
        />

        {lastAssistantMessage && isSpeaking && !isProcessing && (
          <VoicePlayer
            key={lastAssistantMessage.timestamp}
            text={lastAssistantMessage.content}
            onEnd={() => setIsSpeaking(false)}
          />
        )}
      </div>
    </main>
  );
}

