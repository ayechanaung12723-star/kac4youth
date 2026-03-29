"use client";
import React, { useState, useEffect, useRef } from "react";

export default function TypingInput({ mode, lessonIndex, nextLesson, topScores, setTopScores }) {
  const [input, setInput] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    setInput(""); // Reset on lesson change
    inputRef.current?.focus();
  }, [lessonIndex, mode]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      // Example scoring logic
      const score = Math.floor(Math.random() * 1000 + 500);
      const wpm = Math.floor(Math.random() * 100 + 20);
      const accuracy = Math.floor(Math.random() * 20 + 80);

      setTopScores((prev) => [
        { username: "You", score, wpm, accuracy },
        ...prev.filter((u) => u.username !== "You").slice(0, 9)
      ]);

      nextLesson();
    }
  };

  return (
    <input
      ref={inputRef}
      type="text"
      className="w-full max-w-2xl p-2 mb-4 rounded bg-gray-700 text-white"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      onKeyDown={handleKeyPress}
      placeholder="Start typing here..."
      autoFocus
    />
  );
}