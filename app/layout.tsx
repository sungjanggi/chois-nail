import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CHOI'S Nail & Care",
  description: "あなたの選択が、指先の美しさになる。",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
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
