"use client";
import React from "react";
import { typingLessons } from "../../data/typingContent";

export default function TypingDisplay({ mode, lessonIndex }) {
  const lessonText = typingLessons[mode][lessonIndex];

  return (
    <div className="w-full max-w-2xl p-4 mb-4 bg-gray-800 rounded text-white min-h-[120px]">
      <p className="whitespace-pre-wrap break-words">{lessonText}</p>
    </div>
  );
}