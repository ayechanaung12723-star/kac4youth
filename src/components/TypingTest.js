"use client";
import { useState, useEffect, useRef } from "react";
import { typingLessons } from "../data/typingContent";

export default function TypingTest() {
  const [mode, setMode] = useState("english");
  const [lessonIndex, setLessonIndex] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const intervalRef = useRef(null);

  const lessonData =
    mode === "english" ? typingLessons.english : typingLessons.myanmar;
  const targetText = lessonData[lessonIndex];

  // Start timer
  useEffect(() => {
    if (userInput.length === 1 && !startTime) {
      setStartTime(Date.now());
    }
  }, [userInput, startTime]);

  // Live WPM update
  useEffect(() => {
    if (!startTime) return;

    intervalRef.current = setInterval(() => {
      const timeElapsed = (Date.now() - startTime) / 60000;
      const words = userInput.length / 5;
      setWpm(Math.round(words / timeElapsed) || 0);
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, [startTime, userInput]);

  // Accuracy calculation
  useEffect(() => {
    let correct = 0;
    for (let i = 0; i < userInput.length; i++) {
      if (userInput[i] === targetText[i]) correct++;
    }
    const acc = (correct / targetText.length) * 100;
    setAccuracy(Math.max(0, Math.round(acc)));
  }, [userInput, targetText]);

  // Reset
  const resetTest = (newMode) => {
    const selectedMode = newMode || mode;
    setMode(selectedMode);
    setUserInput("");
    setStartTime(null);
    setWpm(0);
    setAccuracy(100);

    const newData =
      selectedMode === "english"
        ? typingLessons.english
        : typingLessons.myanmar;

    setLessonIndex(Math.floor(Math.random() * newData.length));
  };

  // Progress
  const progress = (userInput.length / targetText.length) * 100;

  // Score
  const score = Math.round(wpm * (accuracy / 100));

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Mode Switch */}
      <div className="flex gap-4 mb-8 justify-center font-pyidaungsu">
        <button
          onClick={() => resetTest("english")}
          className={`px-8 py-2 rounded-full font-bold transition-all ${
            mode === "english"
              ? "bg-blue-600 text-white shadow-lg"
              : "bg-slate-800 text-slate-400"
          }`}
        >
          English
        </button>
        <button
          onClick={() => resetTest("myanmar")}
          className={`px-8 py-2 rounded-full font-bold transition-all ${
            mode === "myanmar"
              ? "bg-emerald-600 text-white shadow-lg"
              : "bg-slate-800 text-slate-400"
          }`}
        >
          မြန်မာစာ
        </button>
      </div>

      {/* Main Box */}
      <div className="bg-[#0f172a] p-10 rounded-3xl border border-white/10 shadow-2xl">

        {/* Target Text */}
        <div className="mb-6 p-6 bg-slate-900/50 rounded-2xl text-2xl text-center flex flex-wrap justify-center gap-x-1 min-h-[140px]">
          {targetText.split("").map((char, index) => {
            let style = "text-slate-600";

            if (index < userInput.length) {
              style =
                userInput[index] === char
                  ? "text-white"
                  : "text-red-500 bg-red-500/10 rounded";
            } else if (index === userInput.length) {
              style = "bg-yellow-400 text-black rounded px-1";
            }

            return (
              <span key={index} className={`${style} transition-all`}>
                {char}
              </span>
            );
          })}
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-800 h-2 rounded-full mb-6">
          <div
            className="bg-blue-500 h-2 rounded-full transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Input */}
        <textarea
          className="w-full bg-transparent border-b-2 border-white/10 p-4 focus:outline-none focus:border-blue-500 text-2xl text-white text-center h-24 resize-none"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder={
            mode === "english"
              ? "type the text above..."
              : "အပေါ်ကစာသားအတိုင်း ရိုက်ပါ..."
          }
          spellCheck="false"
          autoFocus
          onPaste={(e) => e.preventDefault()}
        />

        {/* Stats */}
        <div className="mt-8 flex justify-between items-center text-sm font-mono">
          <div className="text-slate-400">
            WPM: <span className="text-blue-400">{wpm}</span> | Accuracy:{" "}
            <span className="text-emerald-400">{accuracy}%</span> | Score:{" "}
            <span className="text-yellow-400">{score}</span>
          </div>

          {userInput === targetText && (
            <button
              onClick={() => resetTest()}
              className="bg-white text-black px-6 py-2 rounded-lg font-bold hover:bg-blue-400 hover:text-white transition-all"
            >
              NEXT
            </button>
          )}
        </div>

        {/* Keyboard Guide */}
        <div className="mt-10 opacity-40 hover:opacity-100 transition">
          <img
            src={
              mode === "english"
                ? "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Qwerty.svg/1200px-Qwerty.svg.png"
                : "https://www.mmsit.com/wp-content/uploads/2020/05/keyboard-layout.png"
            }
            className="w-full max-w-2xl mx-auto rounded-lg grayscale hover:grayscale-0 transition"
          />
        </div>
      </div>
    </div>
  );
}