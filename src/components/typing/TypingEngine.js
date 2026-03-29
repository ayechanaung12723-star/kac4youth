"use client";
import { useState, useEffect, useRef } from "react";
import { typingLessons } from "../../data/typingContent";
import { getDailyLeaderboard } from "../../data/leaderboardData";

import TypingDisplay from "./TypingDisplay";
import TypingInput from "./TypingInput";
import StatsBar from "./StatsBar";
import Leaderboard from "../leaderboard/Leaderboard";
import NameModal from "../ui/NameModal";
import HomeButton from "../ui/HomeButton";

export default function TypingEngine() {
  const [input, setInput] = useState("");
  const [mode, setMode] = useState("english");
  const [lessonIndex, setLessonIndex] = useState(0);

  const [startTime, setStartTime] = useState(null);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);

  const [scores, setScores] = useState([]);
  const [username, setUsername] = useState("");
  const [showModal, setShowModal] = useState(true);

  const inputRef = useRef(null);

  const lessons =
    mode === "english" ? typingLessons.english : typingLessons.myanmar;

  const text = lessons[lessonIndex];

  // 👉 INIT
  useEffect(() => {
    const saved = localStorage.getItem("kac_username");
    if (saved) {
      setUsername(saved);
      setShowModal(false);
    }
    setScores(getDailyLeaderboard());
  }, []);

  // 👉 TIMER
  useEffect(() => {
    if (input.length === 1 && !startTime) {
      setStartTime(Date.now());
    }
  }, [input]);

  useEffect(() => {
    if (!startTime) return;

    const interval = setInterval(() => {
      const time = (Date.now() - startTime) / 60000;
      setWpm(Math.round((input.length / 5) / time) || 0);
    }, 1000);

    return () => clearInterval(interval);
  }, [startTime, input]);

  useEffect(() => {
    // accuracy calculation
    setAccuracy(100); // basic, can improve later
  }, [input]);

  const score = Math.round(wpm * (accuracy / 100));

  const start = () => {
    if (!username) return;
    localStorage.setItem("kac_username", username);
    setShowModal(false);
    setTimeout(()=>inputRef.current?.focus(),100);
  };

  const resetLesson = (newMode) => {
    setMode(newMode || mode);
    setLessonIndex(Math.floor(Math.random() * lessons.length));
    setInput("");
    setStartTime(null);
    setWpm(0);
    setAccuracy(100);
    setTimeout(()=>inputRef.current?.focus(),100);
  };

  return (
    <div
      onClick={()=>inputRef.current?.focus()}
      className="min-h-screen flex flex-col items-center justify-center bg-[#0b0f1a] text-white px-4 relative"
    >
      <HomeButton />

      {showModal && (
        <NameModal
          username={username}
          setUsername={setUsername}
          onStart={start}
        />
      )}

      {/* Mode toggle */}
      <div className="flex gap-4 mb-6 mt-16">
        <button
          onClick={() => resetLesson("english")}
          className={`px-6 py-2 rounded-full ${mode==="english"?"bg-white text-black":"text-gray-400"}`}
        >
          EN
        </button>
        <button
          onClick={() => resetLesson("myanmar")}
          className={`px-6 py-2 rounded-full ${mode==="myanmar"?"bg-white text-black":"text-gray-400"}`}
        >
          MM
        </button>
      </div>

      <TypingDisplay text={text} input={input} />
      <TypingInput input={input} setInput={setInput} inputRef={inputRef} />
      <StatsBar wpm={wpm} accuracy={accuracy} score={score} />
      <Leaderboard scores={scores} />
    </div>
  );
}