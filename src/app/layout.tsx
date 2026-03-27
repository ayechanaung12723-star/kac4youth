import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KAC For Youth",
  description: "AI, Crypto and Technology Learning Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}