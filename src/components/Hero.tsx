"use client";
import Image from "next/image";
import Lottie from "lottie-react";

export default function Hero() {
  return (
    <section className="relative pt-56 pb-24 px-6 text-center max-w-5xl mx-auto">

      {/* HUGE LOGO (MAIN FOCUS) */}
      <div className="mb-10">
        <Image
          src="/images/logo.webp"
          alt="KAC Logo"
          width={300}
          height={300}
          className="w-40 md:w-64 mx-auto drop-shadow-[0_0_30px_rgba(59,130,246,0.6)]"
        />
      </div>

      {/* TITLE */}
      <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
        KAC For Youth
      </h1>

      {/* SUBTEXT */}
      <p className="text-gray-400 max-w-2xl mx-auto mb-10">
        AI, Crypto နဲ့ Online Income Skills ကို လက်တွေ့အသုံးချနိုင်အောင် သင်ပေးမယ့် Platform
      </p>

      {/* BUTTONS */}
      <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
        <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl font-semibold">
          Start Learning
        </button>
        <button className="border border-white/20 hover:border-white/40 px-6 py-3 rounded-xl">
          Try AI Assistant
        </button>
      </div>

      {/* VERY SMALL LOTTIE (ONLY DECORATION) */}
      <div className="w-12 md:w-16 mx-auto opacity-50">
        <Lottie
          animationData={require("../../public/hero-ai.json")}
          loop={true}
        />
      </div>

    </section>
  );
}