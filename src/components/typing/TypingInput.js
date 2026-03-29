"use client";
import { useState, useEffect, useRef } from "react";

export default function TypingInput({ targetText, mode, onComplete, setStats, onInputChange }) {
  const [input, setInput] = useState("");
  const [startTime, setStartTime] = useState(null);
  const inputRef = useRef();

  // Audio References
  const typeSound = useRef(null);
  const errorSound = useRef(null);

  useEffect(() => {
    // Client-side မှာပဲ Audio ကို တည်ဆောက်မယ်
    typeSound.current = new Audio("/sounds/type.mp3");
    errorSound.current = new Audio("/sounds/error.mp3");
    
    setInput("");
    setStartTime(null);
    inputRef.current?.focus();
  }, [targetText]);

  const handleChange = (e) => {
    const value = e.target.value;
    const lastChar = value[value.length - 1];
    const targetChar = targetText[value.length - 1];

    if (!startTime) setStartTime(Date.now());

    // Sound Logic
    if (value.length > input.length) { // စာရိုက်လိုက်လျှင် (Backspacing မဟုတ်လျှင်)
      if (lastChar === targetChar) {
        if (typeSound.current) {
          typeSound.current.currentTime = 0;
          typeSound.current.play();
        }
      } else {
        if (errorSound.current) {
          errorSound.current.currentTime = 0;
          errorSound.current.play();
        }
      }
    }

    setInput(value);
    onInputChange(value); // Display ကို စာပို့ပေးမယ်

    // Stats Calculation
    let correctChars = 0;
    for (let i = 0; i < value.length; i++) {
      if (value[i] === targetText[i]) correctChars++;
    }
    const accuracy = value.length > 0 ? Math.round((correctChars / value.length) * 100) : 100;
    const timeElapsed = (Date.now() - (startTime || Date.now())) / 60000;
    const wpm = timeElapsed > 0 ? Math.round((value.length / 5) / timeElapsed) : 0;

    setStats({ wpm, accuracy });

    if (value === targetText) {
      setTimeout(() => {
        onComplete();
        onInputChange(""); // reset display highlight
      }, 300);
    }
  };

  return (
    <input
      ref={inputRef}
      type="text"
      spellCheck="false"
      className="opacity-0 absolute" // Input ကို ဖျောက်ထားပြီး Background မှာပဲ အလုပ်လုပ်မယ်
      value={input}
      onChange={handleChange}
      autoFocus
    />
  );
}