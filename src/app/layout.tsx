import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "KAC For Youth",
  description: "AI, Crypto, Telegram, Computer and Freelancing skills for youth.",
  metadataBase: new URL("https://kac4youth.vercel.app"),
  openGraph: {
    title: "KAC For Youth",
    description: "Learn practical digital skills with KAC For Youth.",
    url: "https://kac4youth.vercel.app",
    siteName: "KAC For Youth",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-[#020617] text-white antialiased selection:bg-cyan-400/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}