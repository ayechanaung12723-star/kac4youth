"use client";
import React from "react";
import { typingLessons } from "../../data/typingData";

export default function TypingDisplay({ mode, lessonIndex, userInput }) {
  const targetText = typingLessons[mode][lessonIndex];

  return (
    <div className="w-full max-w-2xl p-10 mb-6 bg-slate-900/50 border border-white/10 rounded-[32px] shadow-2xl min-h-[150px]">
      <div className={`text-2xl md:text-3xl leading-relaxed flex flex-wrap ${
        mode === 'myanmar' ? 'font-myanmar tracking-normal' : 'font-mono tracking-tight'
      }`}>
        {targetText.split("").map((char, index) => {
          let color = "text-slate-500";
          if (index < userInput.length) {
            color = userInput[index] === char ? "text-white" : "text-red-500";
          } else if (index === userInput.length) {
            color = "text-blue-400 border-b-2 border-blue-400";
          }

          return (
            <span key={index} className={`${color} transition-colors duration-100`}>
              {char}
            </span>
          );
        })}
      </div>
    </div>
  );
}