"use client";
import Lottie from "lottie-react";
import heroAnim from "../public/hero-ai.json"; 

export default function Hero() {
  return (
    <section className="relative py-28 text-center bg-gradient-to-b from-slate-900 to-[#020617] overflow-hidden">
      <div className="relative z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 animate-text">
          KAC For Youth
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-slate-400 mb-10">
          AI, Crypto, Freelancing skills တွေနဲ့ Online Income ရနိုင်အောင် သင်ကြားပေးနေတဲ့ Platform
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a href="https://t.me/lWJXmj8pC7o1YWY1" target="_blank"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-500 rounded-full font-bold shadow-lg shadow-blue-500/30 transform transition hover:scale-105">
            🚀 Telegram Join Now
          </a>
          <a href="https://www.youtube.com/@KACForYouth" target="_blank"
            className="px-8 py-3 bg-slate-800 border border-slate-700 rounded-full font-bold hover:scale-105 transform transition">
            ▶️ Watch Free Lessons
          </a>
        </div>
      </div>

      <div className="absolute right-0 bottom-0 w-64 md:w-96 opacity-50">
        <Lottie animationData={heroAnim} loop={true} />
      </div>
    </section>
  );
}