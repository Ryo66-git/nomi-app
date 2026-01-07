"use client";

import { useRef, useEffect } from "react";

interface VoiceRecorderProps {
  onTranscript: (text: string) => void;
  isListening: boolean;
  onListeningChange: (listening: boolean) => void;
}

export default function VoiceRecorder({
  onTranscript,
  isListening,
  onListeningChange,
}: VoiceRecorderProps) {
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const isManualStopRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const SpeechRecognition =
      window.SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      console.error("Speech recognition not supported");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "ja-JP";
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      // 最終的な結果を取得
      let finalTranscript = "";
      let interimTranscript = "";

      // resultIndexが存在しない場合は0から開始
      const startIndex = (event as any).resultIndex ?? 0;

      for (let i = startIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          finalTranscript += transcript;
        } else {
          interimTranscript += transcript;
        }
      }

      // 最終的な結果がある場合のみ処理
      if (finalTranscript.trim()) {
        onTranscript(finalTranscript.trim());
      }
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
      
      // ユーザーが手動で停止した場合はエラーとして扱わない
      if (event.error === "no-speech" || event.error === "aborted") {
        if (!isManualStopRef.current) {
          // 自動的に再開を試みる（no-speechの場合）
          if (event.error === "no-speech" && isListening) {
            try {
              recognition.start();
            } catch (e) {
              // 既に開始されている場合は無視
            }
          }
        }
        return;
      }

      // その他のエラーの場合のみ停止
      if (event.error !== "no-speech") {
        onListeningChange(false);
      }
    };

    recognition.onend = () => {
      // 手動で停止した場合は再開しない
      if (isManualStopRef.current) {
        isManualStopRef.current = false;
        return;
      }

      // リスニング中であれば自動的に再開
      if (isListening) {
        try {
          recognition.start();
        } catch (error) {
          // 既に開始されている場合は無視
          console.log("Recognition already started");
        }
      }
    };

    recognitionRef.current = recognition;

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, [onTranscript, onListeningChange, isListening]);

  useEffect(() => {
    if (!recognitionRef.current) return;

    if (isListening) {
      isManualStopRef.current = false;
      try {
        recognitionRef.current.start();
      } catch (error: any) {
        // 既に開始されている場合は無視
        if (error.name !== "InvalidStateError") {
          console.error("Failed to start recognition:", error);
          onListeningChange(false);
        }
      }
    } else {
      isManualStopRef.current = true;
      try {
        recognitionRef.current.stop();
      } catch (error) {
        console.error("Failed to stop recognition:", error);
      }
    }
  }, [isListening, onListeningChange]);

  return null;
}

