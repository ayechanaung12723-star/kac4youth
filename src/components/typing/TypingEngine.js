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
  const [userInput, setUserInput] = useState(""); // Highlight ပြရန်အတွက် User ရိုက်သမျှစာကို သိမ်းဆည်းရန်


  useEffect(() => {
    const storedName = localStorage.getItem("username");
    if (storedName) {
      setUsername(storedName);
      setShowNameModal(false);
    }
  }, []);


  const handleNextLesson = () => {
    setUserInput(""); // Display highlighting
    if (lessonIndex < typingLessons[mode].length - 1) {
      setLessonIndex(prev => prev + 1);
    } else {
      setLessonIndex(0); //
    }
  };

  const handleSetName = (name) => {
    setUsername(name);
    localStorage.setItem("username", name);
    setShowNameModal(false);
  };


  const handleModeChange = (newMode) => {
    setMode(newMode);
    setLessonIndex(0);
    setUserInput("");
    setStats({ wpm: 0, accuracy: 100 });
  };

  return (
    <div className="w-full max-w-4xl px-4 flex flex-col items-center pb-20 select-none">
      {showNameModal && <NameModal onSubmit={handleSetName} />}

      {!showNameModal && (
        <>
          {/* Language Toggle Buttons */}
          <div className="flex gap-4 mb-6 justify-center">
            {["english", "myanmar"].map((l) => (
              <button
                key={l}
                className={`px-8 py-2 rounded-full font-bold transition-all ${
                  mode === l 
                    ? "bg-white text-black scale-105 shadow-lg shadow-white/10" 
                    : "bg-white/5 text-gray-400 hover:bg-white/10"
                }`}
                onClick={() => handleModeChange(l)}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Lesson Selection Grid - scrollable */}
          <div className="w-full max-w-2xl mb-8">
            <p className="text-gray-500 text-[10px] mb-3 uppercase tracking-[0.2em] text-center font-bold">
              Select Lesson
            </p>
            <div className="grid grid-cols-5 md:grid-cols-10 gap-2 p-4 bg-slate-900/40 rounded-2xl border border-white/5">
              {typingLessons[mode].map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => { setLessonIndex(idx); setUserInput(""); }}
                  className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold transition-all text-xs border ${
                    lessonIndex === idx 
                      ? "bg-blue-500 border-blue-400 text-white scale-110 shadow-lg shadow-blue-500/20" 
                      : "bg-white/5 text-gray-500 border-white/5 hover:border-white/20 hover:text-gray-300"
                  }`}
                >
                  {idx + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Real-time Stats Display */}
          <StatsBar stats={stats} />
          
          {/* Typing Display - စာလုံးအရောင်ပြောင်းပေးမည့် Component */}
          <TypingDisplay 
            mode={mode} 
            lessonIndex={lessonIndex} 
            userInput={userInput} 
          />

          {/* Hidden Typing Input - အသံဖိုင်များနှင့် Logic များပါဝင်သော Component */}
          <TypingInput 
            targetText={typingLessons[mode][lessonIndex]}
            mode={mode}
            onComplete={handleNextLesson}
            setStats={setStats}
            onInputChange={setUserInput} 
          />

          {/* Hint for Users */}
          <div className="mt-8 text-slate-600 text-sm animate-pulse font-medium">
             Type the text above to practice. Errors will be highlighted in red.
          </div>

          <Leaderboard />
        </>
      )}
    </div>
  );
}