"use client";
import React from "react";

export default function Leaderboard({ topScores }) {
  return (
    <div className="w-full max-w-2xl bg-gray-800 rounded p-4 text-white">
      <h3 className="text-lg mb-2">Top 10 Leaderboard</h3>
      <ol className="list-decimal ml-4 space-y-1">
        {topScores.map((user, idx) => (
          <li key={idx} className="flex justify-between">
            <span>{user.username}</span>
            <span>{user.score} pts | WPM: {user.wpm} | Acc: {user.accuracy}%</span>
          </li>
        ))}
      </ol>
    </div>
  );
}