"use client";
import { useState } from "react";
import NameModal from "../ui/NameModal";
import TypingDisplay from "./TypingDisplay";
import TypingInput from "./TypingInput";
import StatsBar from "../stats/StatsBar";
import Leaderboard from "../leaderboard/Leaderboard";
import { typingLessons } from "../../data/typingContent";
import { getDailyLeaderboard } from "../../data/leaderboardData";

export default function TypingEngine() {
  const [username, setUsername] = useState("");
  const [started, setStarted] = useState(false);
  const [mode, setMode] = useState("english");
  const [lessonIndex, setLessonIndex] = useState(0);
  const [topScores, setTopScores] = useState(getDailyLeaderboard());

  const startTyping = (name) => {
    setUsername(name);
    setStarted(true);
  };

  const selectLesson = (index) => {
    setLessonIndex(index);
  };

  const nextLesson = () => {
    setLessonIndex((prev) => (prev + 1) % typingLessons[mode].length);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0b0f1a] text-white px-4">
      {!started && (
        <NameModal username={username} setUsername={setUsername} onStart={startTyping} />
      )}

      {started && (
        <>
          {/* Mode selector */}
          <div className="flex gap-4 mb-4">
            <button
              onClick={() => setMode("english")}
              className={`px-6 py-2 rounded-full ${mode==="english"?"bg-white text-black":"text-gray-500"}`}
            >
              EN
            </button>
            <button
              onClick={() => setMode("myanmar")}
              className={`px-6 py-2 rounded-full ${mode==="myanmar"?"bg-white text-black":"text-gray-500"}`}
            >
              MM
            </button>
          </div>

          {/* Lesson selector */}
          <div className="flex flex-wrap gap-2 mb-6">
            {typingLessons[mode].map((_, i) => (
              <button
                key={i}
                onClick={() => selectLesson(i)}
                className={`px-3 py-1 rounded ${i === lessonIndex ? "bg-white text-black" : "bg-gray-700"}`}
              >
                Lesson {i+1}
              </button>
            ))}
          </div>

          {/* Typing display + input */}
          <TypingDisplay mode={mode} lessonIndex={lessonIndex} />
          <TypingInput
            mode={mode}
            lessonIndex={lessonIndex}
            nextLesson={nextLesson}
            topScores={topScores}
            setTopScores={setTopScores}
          />

          {/* Stats */}
          <StatsBar />

          {/* Leaderboard */}
          <Leaderboard topScores={topScores} />
        </>
      )}
    </div>
  );
}