"use client";
import React from "react";
import { typingLessons } from "../../data/typingData";

export default function TypingDisplay({ mode, lessonIndex, userInput }) {
  const targetText = typingLessons[mode][lessonIndex];

  return (
    <div className="w-full max-w-2xl p-10 mb-6 bg-slate-900/50 border border-white/10 rounded-[32px] shadow-2xl min-h-[160px]">
      <div 
        className={`text-2xl md:text-3xl leading-[2.2] ${
          mode === 'myanmar' ? 'font-myanmar text-justify' : 'font-mono'
        }`}
        style={{ wordBreak: "keep-all" }} // မြန်မာစာလုံးများ အလယ်က မပြတ်သွားစေရန်
      >
        {targetText.split("").map((char, index) => {
          let color = "text-slate-500";
          let border = "";

          if (index < userInput.length) {
            color = userInput[index] === char ? "text-white" : "text-red-500";
          } else if (index === userInput.length) {
            color = "text-blue-400";
            border = "border-b-2 border-blue-400 animate-pulse";
          }

          return (
            <span 
              key={index} 
              className={`${color} ${border} transition-colors duration-75 inline`}
            >
              {char}
            </span>
          );
        })}
      </div>
    </div>
  );
}