"use client";

import { useState, useEffect } from "react";
import { typingLessons } from "../../data/typingData"; 
import NameModal from "../ui/NameModal";
import Leaderboard from "../leaderboard/Leaderboard";
import StatsBar from "../stats/StatsBar";
import TypingDisplay from "./TypingDisplay";
import TypingInput from "./TypingInput";

export default function TypingEngine() {
  const [mode, setMode] = useState("english");
  const [lessonIndex, setLessonIndex] = useState(0);
  const [username, setUsername] = useState("");
  const [showNameModal, setShowNameModal] = useState(true);
  const [stats, setStats] = useState({ wpm: 0, accuracy: 100 });

  useEffect(() => {
    const storedName = localStorage.getItem("username");
    if (storedName) {
      setUsername(storedName);
      setShowNameModal(false);
    }
  }, []);

  const handleNextLesson = () => {
    const nextIdx = (lessonIndex + 1) % typingLessons[mode].length;
    setLessonIndex(nextIdx);
  };

  const handleSetName = (name) => {
    setUsername(name);
    localStorage.setItem("username", name);
    setShowNameModal(false);
  };

  return (
    <div className="w-full max-w-4xl px-4 flex flex-col items-center">
      {showNameModal && <NameModal onSubmit={handleSetName} />}

      {!showNameModal && (
        <>
          <div className="flex gap-4 mb-8 justify-center">
            {["english", "myanmar"].map((l) => (
              <button
                key={l}
                className={`px-8 py-2 rounded-full font-bold transition-all ${
                  mode === l ? "bg-white text-black scale-110" : "bg-white/10 text-gray-400 hover:bg-white/20"
                }`}
                onClick={() => { setMode(l); setLessonIndex(0); }}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>

          <StatsBar stats={stats} />
          
          <TypingDisplay 
            text={typingData[mode][lessonIndex]} 
            mode={mode}
          />

          <TypingInput 
            targetText={typingLessons[mode][lessonIndex]}
            mode={mode}
            onComplete={handleNextLesson}
            setStats={setStats}
          />

          <Leaderboard />
        </>
      )}
    </div>
  );
}