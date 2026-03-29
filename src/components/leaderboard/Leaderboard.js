"use client";
import React from "react";

export default function Leaderboard({ scores }) {
  return (
    <div className="mt-16 w-full max-w-xl">
      <h2 className="text-center mb-4 text-lg text-gray-400">🏆 Top 10 Scores</h2>
      {scores.map((s, i) => (
        <div key={i} className={`flex justify-between p-3 rounded-lg mb-2 bg-slate-800 ${i===0?"border border-yellow-400":i===1?"border border-gray-300":i===2?"border border-orange-400":""}`}>
          <span>#{i+1}</span>
          <span>{s.name}</span>
          <span>{s.wpm} WPM</span>
          <span>{s.accuracy}%</span>
          <span className="text-yellow-400">{s.score}</span>
        </div>
      ))}
    </div>
  );
}