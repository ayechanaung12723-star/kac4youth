"use client";
import { useState, useEffect } from "react";
import { randomNames } from "../../data/typingData";

export default function Leaderboard() {
  const [topScores, setTopScores] = useState([]);

  useEffect(() => {
    const today = new Date().toLocaleDateString();
    const key = `kac_leaderboard_${today}`;
    let saved = JSON.parse(localStorage.getItem(key));

    if (!saved) {
      // အကယ်၍ data မရှိသေးလျှင် နာမည်အတုများဖြင့် တည်ဆောက်မည်
      const usedNames = new Set();
      saved = Array.from({ length: 8 }, () => {
        let name;
        do {
          name = randomNames[Math.floor(Math.random() * randomNames.length)];
        } while (usedNames.has(name));
        usedNames.add(name);
        
        return {
          name,
          wpm: Math.floor(Math.random() * 40) + 30,
          accuracy: Math.floor(Math.random() * 15) + 85,
          score: Math.floor(Math.random() * 500) + 1000
        };
      }).sort((a, b) => b.score - a.score);
      
      localStorage.setItem(key, JSON.stringify(saved));
    }
    setTopScores(saved);
  }, []);

  return (
    <div className="mt-12 w-full max-w-2xl bg-white/5 border border-white/10 rounded-[32px] p-8">
      <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
        <span>🏆</span> Leaderboard (Today)
      </h2>
      
      <div className="flex flex-col gap-3">
        {topScores.map((s, i) => (
          <div key={i} className="flex justify-between items-center bg-white/5 p-4 rounded-2xl border border-white/5">
            <div className="flex items-center gap-4">
              <span className={`w-8 h-8 flex items-center justify-center rounded-full font-bold text-sm ${i < 3 ? 'bg-yellow-500/20 text-yellow-500' : 'bg-white/5 text-slate-500'}`}>
                {i + 1}
              </span>
              <span className="font-bold text-slate-200">{s.name}</span>
            </div>
            <div className="flex gap-6 text-sm font-medium">
              <span className="text-blue-400">{s.wpm} WPM</span>
              <span className="text-green-400">{s.accuracy}%</span>
              <span className="text-white">{s.score} pts</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}