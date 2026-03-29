"use client";
import React from "react";
import { typingLessons } from "../../data/typingData"; 

export default function TypingDisplay({ mode, lessonIndex }) {
  const lessonText = typingLessons[mode][lessonIndex];

  return (
    <div className="w-full max-w-2xl p-8 mb-6 bg-slate-900/50 border border-white/10 rounded-2xl shadow-xl">
      <p className={`text-2xl md:text-3xl leading-relaxed text-center ${mode === 'myanmar' ? 'font-myanmar' : ''}`}>
        {lessonText}
      </p>
    </div>
  );
}