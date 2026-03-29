"use client";
import React from "react";
import { typingLessons } from "../../data/typingData";

export default function TypingDisplay({ mode, lessonIndex, userInput }) {
  const targetText = typingLessons[mode][lessonIndex];

  return (
    <div className="w-full max-w-2xl p-10 mb-6 bg-slate-900/50 border border-white/10 rounded-[32px] shadow-2xl overflow-hidden min-h-[150px]">
      <div className={`text-2xl md:text-3xl leading-relaxed flex flex-wrap gap-x-[1px] ${mode === 'myanmar' ? 'font-myanmar' : 'font-mono'}`}>
        {targetText.split("").map((char, index) => {
          let color = "text-slate-500"; 
          let bgColor = "";

          if (index < userInput.length) {
            color = userInput[index] === char ? "text-white" : "text-red-500";
            bgColor = userInput[index] !== char ? "bg-red-500/20" : "";
          } else if (index === userInput.length) {
            color = "text-blue-400 underline underline-offset-8 decoration-2"; 
          }

          return (
            <span key={index} className={`${color} ${bgColor} transition-colors duration-100`}>
              {char}
            </span>
          );
        })}
      </div>
    </div>
  );
}