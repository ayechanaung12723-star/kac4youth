"use client";
import React from "react";

export default function StatsBar() {
  // Placeholder stats
  const wpm = Math.floor(Math.random() * 80 + 20);
  const accuracy = Math.floor(Math.random() * 20 + 80);

  return (
    <div className="w-full max-w-2xl flex justify-between bg-gray-900 p-3 rounded mb-4">
      <span>WPM: {wpm}</span>
      <span>Accuracy: {accuracy}%</span>
    </div>
  );
}