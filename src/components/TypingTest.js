"use client";
import { useState, useEffect, useRef } from "react";
import GraphemeSplitter from "grapheme-splitter";
import { typingLessons } from "../data/typingContent";

const splitter = new GraphemeSplitter();

export default function TypingTest() {
  const [mode, setMode] = useState("english");
  const [lessonIndex, setLessonIndex] = useState(0);
  const [input, setInput] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);

  const inputRef = useRef(null);

  const lessons =
    mode === "english" ? typingLessons.english : typingLessons.myanmar;

  const text = lessons[lessonIndex];

  const targetChars = splitter.splitGraphemes(text);
  const inputChars = splitter.splitGraphemes(input);

  // Start timer
  useEffect(() => {
    if (input.length === 1 && !startTime) {
      setStartTime(Date.now());
    }
  }, [input]);

  // Live WPM
  useEffect(() => {
    if (!startTime) return;

    const interval = setInterval(() => {
      const time = (Date.now() - startTime) / 60000;
      const words = inputChars.length / 5;
      setWpm(Math.round(words / time) || 0);
    }, 1000);

    return () => clearInterval(interval);
  }, [startTime, inputChars.length]);

  // Accuracy
  useEffect(() => {
    let correct = 0;
    inputChars.forEach((c, i) => {
      if (c === targetChars[i]) correct++;
    });

    setAccuracy(
      Math.round((correct / targetChars.length) * 100) || 0
    );
  }, [inputChars, targetChars]);

  const reset = (newMode) => {
    const m = newMode || mode;
    setMode(m);
    setInput("");
    setStartTime(null);
    setWpm(0);
    setAccuracy(100);

    const newLessons =
      m === "english"
        ? typingLessons.english
        : typingLessons.myanmar;

    setLessonIndex(Math.floor(Math.random() * newLessons.length));

    inputRef.current.focus();
  };

  const progress = (inputChars.length / targetChars.length) * 100;

  const score = Math.round(wpm * (accuracy / 100));

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0b0f1a] text-white px-4">

      {/* Mode Switch */}
      <div className="flex gap-4 mb-10">
        <button
          onClick={() => reset("english")}
          className={`px-6 py-2 rounded-full ${
            mode === "english"
              ? "bg-white text-black"
              : "text-gray-500"
          }`}
        >
          EN
        </button>
        <button
          onClick={() => reset("myanmar")}
          className={`px-6 py-2 rounded-full ${
            mode === "myanmar"
              ? "bg-white text-black"
              : "text-gray-500"
          }`}
        >
          MM
        </button>
      </div>

      {/* Text Area */}
      <div className="text-3xl leading-relaxed max-w-3xl text-center font-mono relative">

        {targetChars.map((char, i) => {
          let className = "text-gray-600";

          if (i < inputChars.length) {
            className =
              inputChars[i] === char
                ? "text-white"
                : "text-red-500";
          }

          if (i === inputChars.length) {
            className = "border-b-2 border-yellow-400 animate-pulse";
          }

          return (
            <span key={i} className={className}>
              {char}
            </span>
          );
        })}
      </div>

      {/* Hidden Input */}
      <textarea
        ref={inputRef}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="opacity-0 absolute"
        autoFocus
        onPaste={(e) => e.preventDefault()}
      />

      {/* Progress */}
      <div className="w-full max-w-xl mt-8 h-[2px] bg-gray-800">
        <div
          className="h-[2px] bg-white transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Stats */}
      <div className="flex gap-10 mt-10 text-gray-400 text-sm">
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

      {/* Finish */}
      {input === text && (
        <button
          onClick={() => reset()}
          className="mt-10 px-6 py-2 bg-white text-black rounded-full"
        >
          NEXT
        </button>
      )}
    </div>
  );
}