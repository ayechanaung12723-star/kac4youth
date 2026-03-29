"use client";
import { useState, useEffect, useRef } from "react";
import GraphemeSplitter from "grapheme-splitter";
import { typingLessons } from "../data/typingContent";

const splitter = new GraphemeSplitter();

export default function TypingTest() {
  const [input, setInput] = useState("");
  const [mode, setMode] = useState("english");
  const [lessonIndex, setLessonIndex] = useState(0);

  const [startTime, setStartTime] = useState(null);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);

  const inputRef = useRef(null);

  const lessons =
    mode === "english"
      ? typingLessons.english
      : typingLessons.myanmar;

  const text = lessons[lessonIndex];

  const targetChars = splitter.splitGraphemes(text);
  const inputChars = splitter.splitGraphemes(input);

  // 👉 IME SAFE FOCUS
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // 👉 START TIMER
  useEffect(() => {
    if (input.length === 1 && !startTime) {
      setStartTime(Date.now());
    }
  }, [input]);

  // 👉 WPM
  useEffect(() => {
    if (!startTime) return;

    const interval = setInterval(() => {
      const time = (Date.now() - startTime) / 60000;
      const words = inputChars.length / 5;
      setWpm(Math.round(words / time) || 0);
    }, 1000);

    return () => clearInterval(interval);
  }, [startTime, inputChars.length]);

  // 👉 ACCURACY
  useEffect(() => {
    let correct = 0;
    inputChars.forEach((c, i) => {
      if (c === targetChars[i]) correct++;
    });

    setAccuracy(Math.round((correct / targetChars.length) * 100) || 0);
  }, [inputChars, targetChars]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const reset = () => {
    setInput("");
    setStartTime(null);
    setWpm(0);
    setAccuracy(100);
    setLessonIndex(Math.floor(Math.random() * lessons.length));
    inputRef.current.focus();
  };

  const score = Math.round(wpm * (accuracy / 100));

  return (
    <div
      onClick={() => inputRef.current?.focus()}
      className="min-h-screen flex flex-col items-center justify-center bg-[#0b0f1a] text-white px-4"
    >

      {/* TEXT DISPLAY */}
      <div className="text-3xl font-mono text-center max-w-3xl leading-relaxed">
        {targetChars.map((char, i) => {
          let className = "text-gray-600";

          if (i < inputChars.length) {
            className =
              inputChars[i] === char
                ? "text-white"
                : "text-red-500";
          }

          // 👉 FAKE CURSOR
          if (i === inputChars.length) {
            className += " border-b-2 border-yellow-400 animate-pulse";
          }

          return (
            <span key={i} className={className}>
              {char}
            </span>
          );
        })}
      </div>

      {/* 🔥 HIDDEN INPUT (IME SAFE) */}
      <input
        ref={inputRef}
        value={input}
        onChange={handleChange}
        className="absolute -left-[9999px]"
        autoComplete="off"
      />

      {/* STATS */}
      <div className="flex gap-10 mt-10 text-sm text-gray-400">
        <div>
          WPM <br />
          <span className="text-white text-xl">{wpm}</span>
        </div>
        <div>
          ACC <br />
          <span className="text-white text-xl">{accuracy}%</span>
        </div>
        <div>
          SCORE <br />
          <span className="text-white text-xl">{score}</span>
        </div>
      </div>

      {/* RESET */}
      {input === text && (
        <button
          onClick={reset}
          className="mt-10 px-6 py-2 bg-white text-black rounded-full"
        >
          NEXT
        </button>
      )}

    </div>
  );
}