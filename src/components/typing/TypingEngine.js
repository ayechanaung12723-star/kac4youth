"use client";

import { useState, useEffect } from "react";
import EnglishTyping from "./EnglishTyping";
import MyanmarTyping from "./MyanmarTyping";
import NameModal from "../ui/NameModal";
import Leaderboard from "../leaderboard/Leaderboard";

export default function TypingEngine() {
  const [mode, setMode] = useState("english");
  const [username, setUsername] = useState("");
  const [showNameModal, setShowNameModal] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedName = localStorage.getItem("username");
      if (storedName) {
        setUsername(storedName);
        setShowNameModal(false);
      }
    }
  }, []);

  const handleSetName = (name) => {
    setUsername(name);
    localStorage.setItem("username", name);
    setShowNameModal(false);
  };

  return (
    <div className="w-full max-w-4xl px-4">
      {showNameModal && <NameModal onSubmit={handleSetName} />}

      {!showNameModal && (
        <>
          <div className="flex gap-4 mb-6 justify-center">
            <button
              className={`px-6 py-2 rounded-full ${mode === "english" ? "bg-white text-black" : "text-gray-400"}`}
              onClick={() => setMode("english")}
            >
              EN
            </button>
            <button
              className={`px-6 py-2 rounded-full ${mode === "myanmar" ? "bg-white text-black" : "text-gray-400"}`}
              onClick={() => setMode("myanmar")}
            >
              MM
            </button>
          </div>

          {mode === "english" ? <EnglishTyping username={username} /> : <MyanmarTyping username={username} />}

          <Leaderboard />
        </>
      )}
    </div>
  );
}