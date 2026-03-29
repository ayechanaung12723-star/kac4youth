"use client";
import TypingEngine from "../../components/typing/TypingEngine";
import HomeButton from "../../components/ui/HomeButton";

export default function TypingPracticePage() {
  return (
    <div className="min-h-screen bg-[#020617] text-white flex flex-col items-center pt-20 relative">
      <HomeButton />
      <h1 className="text-4xl font-black mb-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
        KAC Typing Master
      </h1>
      <TypingEngine />
    </div>
  );
}