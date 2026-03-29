"use client";

export default function StatsBar({ stats }) {
  return (
    <div className="w-full max-w-2xl flex justify-around bg-slate-800/40 p-4 rounded-2xl mb-6 border border-white/5 backdrop-blur-sm">
      <div className="text-center">
        <p className="text-gray-400 text-xs uppercase tracking-widest">Speed</p>
        <p className="text-2xl font-black text-blue-400">{stats.wpm} <span className="text-sm font-normal text-gray-500">WPM</span></p>
      </div>
      <div className="text-center">
        <p className="text-gray-400 text-xs uppercase tracking-widest">Accuracy</p>
        <p className="text-2xl font-black text-green-400">{stats.accuracy}<span className="text-sm font-normal text-gray-500">%</span></p>
      </div>
    </div>
  );
}