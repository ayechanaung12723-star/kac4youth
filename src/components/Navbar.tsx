"use client";
import Lottie from "lottie-react";

export default function Hero() {
  return (
    <section className="relative pt-40 pb-24 px-6 text-center max-w-5xl mx-auto">

      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
        Build Your Future with{" "}
        <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          AI & Crypto
        </span>
      </h1>

      {/* Subtext */}
      <p className="text-gray-400 max-w-2xl mx-auto mb-10">
        လူငယ်တွေ အတွက် AI, Crypto နဲ့ Online Income Skills ကို လက်တွေ့အသုံးချနိုင်အောင် သင်ပေးမယ့် Platform
      </p>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row gap-4 justify-center mb-10">
        <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl font-semibold transition">
          Start Learning
        </button>
        <button className="border border-white/20 hover:border-white/40 px-6 py-3 rounded-xl transition">
          Try AI Assistant
        </button>
      </div>

      {/* Lottie (FIXED SMALL SIZE) */}
      <div className="w-24 md:w-32 mx-auto opacity-70">
        <Lottie
          animationData={require("../../public/hero-ai.json")}
          loop={true}
        />
      </div>

    </section>
  );
}