"use client";
import { FaTelegram } from "react-icons/fa";

export default function FloatingCTA() {
  return (
    <a
      href="https://t.me/lWJXmj8pC7o1YWY1"
      target="_blank"
      className="fixed bottom-6 right-6 z-50 bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg shadow-blue-500/30 transition"
    >
      <FaTelegram className="text-2xl" />
    </a>
  );
}