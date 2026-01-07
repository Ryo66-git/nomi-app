import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "飲みニケーションAI",
  description: "AIと音声で会話しながら飲みニケーション",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}

