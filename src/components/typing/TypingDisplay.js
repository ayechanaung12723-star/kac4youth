"use client";
import React from "react";
import GraphemeSplitter from "grapheme-splitter";

const splitter = new GraphemeSplitter();

export default function TypingDisplay({ text, input }) {
  const targetChars = splitter.splitGraphemes(text);
  const inputChars = splitter.splitGraphemes(input);

  return (
    <div className="text-3xl leading-relaxed max-w-3xl text-center font-mono">
      {targetChars.map((char, i) => {
        let className = "text-gray-600";
        if (i < inputChars.length) className = inputChars[i] === char ? "text-white" : "text-red-500";
        if (i === inputChars.length) className = "border-b-2 border-yellow-400 animate-pulse";
        return <span key={i} className={className}>{char}</span>;
      })}
    </div>
  );
}