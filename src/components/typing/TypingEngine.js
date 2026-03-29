"use client";

import { useState, useEffect } from "react";
import { typingLessons } from "../../data/typingData"; 
import NameModal from "../ui/NameModal";
import StatsBar from "../stats/StatsBar";
import TypingDisplay from "./TypingDisplay";
import TypingInput from "./TypingInput";
import Leaderboard from "../leaderboard/Leaderboard";

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
    if (lessonIndex < typingLessons[mode].length - 1) {
      setLessonIndex(prev => prev + 1);
    } else {
      setLessonIndex(0); // အကုန်ပြီးရင် အစကပြန်စ
    }
  };

  const handleSetName = (name) => {
    setUsername(name);
    localStorage.setItem("username", name);
    setShowNameModal(false);
  };

  return (
    <div className="w-full max-w-4xl px-4 flex flex-col items-center pb-20">
      {showNameModal && <NameModal onSubmit={handleSetName} />}

      {!showNameModal && (
        <>
          {/* Language Toggle */}
          <div className="flex gap-4 mb-6 justify-center">
            {["english", "myanmar"].map((l) => (
              <button
                key={l}
                className={`px-8 py-2 rounded-full font-bold transition-all ${
                  mode === l ? "bg-white text-black scale-105 shadow-lg" : "bg-white/5 text-gray-400 hover:bg-white/10"
                }`}
                onClick={() => { setMode(l); setLessonIndex(0); }}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Lesson Selection Grid */}
          <div className="w-full max-w-2xl mb-8">
            <p className="text-gray-500 text-xs mb-3 uppercase tracking-widest text-center">Select Lesson</p>
            <div className="flex flex-wrap justify-center gap-2 max-h-32 overflow-y-auto p-4 bg-white/5 rounded-2xl border border-white/10 scrollbar-hide">
              {typingLessons[mode].map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setLessonIndex(idx)}
                  className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold transition-all text-sm ${
                    lessonIndex === idx 
                      ? "bg-blue-500 text-white scale-110 shadow-lg shadow-blue-500/20" 
                      : "bg-white/5 text-gray-400 hover:bg-white/10 border border-white/5"
                  }`}
                >
                  {idx + 1}
                </button>
              ))}
            </div>
          </div>

          <StatsBar stats={stats} />
          
          <TypingDisplay mode={mode} lessonIndex={lessonIndex} />

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