"use client";

import { useState, useEffect } from "react";

export default function Leaderboard() {
  const [topScores, setTopScores] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = JSON.parse(localStorage.getItem("kac_top_scores") || "[]");
      const uniqueUsers = Array.from(new Map(saved.map((s) => [s.username, s])).values());
      setTopScores(uniqueUsers.slice(0, 10));
    }
  }, []);

  return (
    <div className="mt-10 w-full max-w-xl mx-auto">
      <h2 className="text-center text-lg text-gray-400 mb-4">🏆 Top 10</h2>
      {topScores.map((s, i) => (
        <div key={i} className="flex justify-between bg-slate-800 p-2 rounded mb-2">
          <span>#{i + 1}</span>
          <span>{s.username}</span>
          <span>{s.wpm} WPM</span>
          <span>{s.accuracy}%</span>
          <span className="text-yellow-400">{s.score}</span>
        </div>
      ))}
    </div>
  );
}