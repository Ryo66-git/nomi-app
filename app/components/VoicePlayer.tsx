"use client";

import { useEffect, useRef } from "react";

interface VoicePlayerProps {
  text: string;
  onEnd?: () => void;
}

export default function VoicePlayer({ text, onEnd }: VoicePlayerProps) {
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const lastTextRef = useRef<string>("");

  useEffect(() => {
    if (!text || typeof window === "undefined" || text === lastTextRef.current) {
      return;
    }

    // 既存の音声を停止
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "ja-JP";
    utterance.rate = 1.0;
    utterance.pitch = 1.0;
    utterance.volume = 1.0;

    if (onEnd) {
      utterance.onend = () => {
        lastTextRef.current = "";
        onEnd();
      };
    }

    utteranceRef.current = utterance;
    lastTextRef.current = text;

    // 少し遅延を入れてから再生（UIの更新を待つ）
    setTimeout(() => {
      window.speechSynthesis.speak(utterance);
    }, 100);

    return () => {
      window.speechSynthesis.cancel();
    };
  }, [text, onEnd]);

  return null;
}

