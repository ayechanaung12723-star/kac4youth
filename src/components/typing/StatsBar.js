"use client";
import React from "react";

export default function StatsBar({ wpm, accuracy, score }) {
  return (
    <div className="flex gap-10 mt-8 text-gray-400 text-sm">
      <div>WPM <br /><span className="text-white text-xl">{wpm}</span></div>
      <div>ACC <br /><span className="text-white text-xl">{accuracy}%</span></div>
      <div>SCORE <br /><span className="text-white text-xl">{score}</span></div>
    </div>
  );
}