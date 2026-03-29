"use client";
import { useState, useEffect, useRef } from "react";
import GraphemeSplitter from "grapheme-splitter";

import TypingDisplay from "./TypingDisplay";
import TypingInput from "./TypingInput";
import StatsBar from "./StatsBar";
import Leaderboard from "../leaderboard/Leaderboard";
import NameModal from "../ui/NameModal";
import HomeButton from "../ui/HomeButton";

import { typingLessons } from "../../data/typingContent";
import { getDailyLeaderboard } from "../../data/leaderboardData";

const splitter = new GraphemeSplitter();

export default function TypingEngine() {
  const [mode, setMode] = useState("english");
  const [lessonIndex, setLessonIndex] = useState(0);
  const [input, setInput] = useState("");
  const [username, setUsername] = useState("");
  const [showModal, setShowModal] = useState(true);

  const [startTime, setStartTime] = useState(null);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);

  const [scores, setScores] = useState([]);

  const inputRef = useRef(null);
  const typeSound = useRef(null);
  const errorSound = useRef(null);

  const lessons = mode === "english" ? typingLessons.english : typingLessons.myanmar;
  const text = lessons[lessonIndex];
  const targetChars = splitter.splitGraphemes(text);
  const inputChars = splitter.splitGraphemes(input);

  // Load sounds + leaderboard
  useEffect(() => {
    typeSound.current = new Audio("/sounds/type.mp3");
    errorSound.current = new Audio("/sounds/error.mp3");

    const saved = localStorage.getItem("kac_username");
    if (saved) {
      setUsername(saved);
      setShowModal(false);
      setTimeout(() => inputRef.current?.focus(), 50);
    }

    setScores(getDailyLeaderboard());
  }, []);

  // Start timer
  useEffect(() => {
    if (input.length === 1 && !startTime) setStartTime(Date.now());
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
    setAccuracy(Math.round((correct / targetChars.length) * 100) || 0);
  }, [inputChars, targetChars]);

  // Handle typing sound
  const handleInput = (value) => {
    const newChars = splitter.splitGraphemes(value);
    const prevLength = inputChars.length;

    if (newChars.length > prevLength) {
      const lastIndex = newChars.length - 1;
      const lastChar = newChars[lastIndex];
      const expectedChar = targetChars[lastIndex];

      if (!startTime && newChars.length === 1) setStartTime(Date.now());

      if (lastChar === expectedChar) typeSound.current.play();
      else errorSound.current.play();
    }
    setInput(value);
  };

  const score = Math.round(wpm * (accuracy / 100));

  const startTyping = (name) => {
    localStorage.setItem("kac_username", name);
    setUsername(name);
    setShowModal(false);
    setTimeout(() => inputRef.current?.focus(), 50);
  };

  const resetLesson = (newMode) => {
    setMode(newMode || mode);
    setLessonIndex(Math.floor(Math.random() * lessons.length));
    setInput("");
    setStartTime(null);
    setWpm(0);
    setAccuracy(100);
    setTimeout(() => inputRef.current?.focus(), 50);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0b0f1a] text-white px-4 relative" onClick={() => inputRef.current?.focus()}>
      <HomeButton />

      {showModal && <NameModal username={username} setUsername={setUsername} onStart={startTyping} />}

      {/* Mode toggle */}
      <div className="flex gap-4 mb-6 mt-16">
        <button onClick={() => resetLesson("english")} className={`px-6 py-2 rounded-full ${mode==="english"?"bg-white text-black":"text-gray-400"}`}>EN</button>
        <button onClick={() => resetLesson("myanmar")} className={`px-6 py-2 rounded-full ${mode==="myanmar"?"bg-white text-black":"text-gray-400"}`}>MM</button>
      </div>

      <TypingDisplay text={text} input={input} />

      <TypingInput input={input} setInput={handleInput} ref={inputRef} />

      <StatsBar wpm={wpm} accuracy={accuracy} score={score} />

      <Leaderboard scores={scores} />
    </div>
  );
}