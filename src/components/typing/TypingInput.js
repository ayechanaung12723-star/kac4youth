"use client";
import { useState, useEffect, useRef } from "react";

export default function TypingInput({ targetText, mode, onComplete, setStats }) {
  const [input, setInput] = useState("");
  const [startTime, setStartTime] = useState(null);
  const inputRef = useRef();

  useEffect(() => {
    setInput("");
    setStartTime(null);
    inputRef.current?.focus();
  }, [targetText]);

  const handleChange = (e) => {
    const value = e.target.value;
    if (!startTime) setStartTime(Date.now());

    setInput(value);

    // Accuracy Calculation
    let correctChars = 0;
    for (let i = 0; i < value.length; i++) {
      if (value[i] === targetText[i]) correctChars++;
    }
    const accuracy = value.length > 0 ? Math.round((correctChars / value.length) * 100) : 100;

    // WPM Calculation
    const timeElapsed = (Date.now() - startTime) / 60000; // in minutes
    const wpm = timeElapsed > 0 ? Math.round((value.length / 5) / timeElapsed) : 0;

    setStats({ wpm, accuracy });

    if (value === targetText) {
      setTimeout(onComplete, 500);
    }
  };

  return (
    <input
      ref={inputRef}
      type="text"
      className={`w-full max-w-2xl p-5 rounded-2xl bg-white/5 border border-white/20 text-white text-xl focus:border-blue-500 outline-none transition-all text-center ${mode === 'myanmar' ? 'font-myanmar' : ''}`}
      placeholder={mode === "english" ? "Start typing..." : "စာရိုက်လေ့ကျင့်ခန်း စတင်ပါ..."}
      value={input}
      onChange={handleChange}
    />
  );
}