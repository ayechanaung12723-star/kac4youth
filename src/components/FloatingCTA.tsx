"use client";

import Link from "next/link";
import { FaTelegramPlane } from "react-icons/fa";

export default function FloatingCTA() {
  return (
    <Link
      href="https://t.me/lWJXmj8pC7o1YWY1"
      target="_blank"
      aria-label="Join Telegram"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400 px-4 py-3 text-sm font-semibold text-slate-950 shadow-[0_18px_60px_rgba(34,211,238,0.35)] transition hover:scale-[1.03] hover:bg-cyan-300"
    >
      <FaTelegramPlane className="text-base" />
      <span className="hidden sm:inline">Join Telegram</span>
    </Link>
  );
}