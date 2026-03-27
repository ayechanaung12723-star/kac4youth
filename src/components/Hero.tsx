"use client";
import Image from "next/image";
import Lottie from "lottie-react";

export default function Hero() {
  return (
    <section className="relative pt-64 pb-28 px-6 text-center max-w-5xl mx-auto">

      {/* HUGE LOGO */}
      <div className="mb-12">
        <Image
          src="/images/logo.webp"
          alt="KAC Logo"
          width={450}
          height={450}
          className="w-48 md:w-80 mx-auto drop-shadow-[0_0_45px_rgba(59,130,246,0.7)]"
        />
      </div>

      {/* TITLE */}
      <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
        KAC For Youth
      </h1>

      {/* SUBTEXT */}
      <p className="text-gray-400 max-w-2xl mx-auto mb-14 text-lg md:text-xl">
        AI, Crypto နဲ့ Online Income Skills ကို လက်တွေ့အသုံးချနိုင်အောင် သင်ပေးမယ့် Platform
      </p>

      {/* BUTTONS */}
      <div className="flex flex-col md:flex-row gap-4 justify-center mb-16">
        <button className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-xl font-semibold shadow-lg text-lg">
          Start Learning
        </button>
        <button className="border border-white/20 hover:border-white/40 px-8 py-3 rounded-xl text-lg">
          Try AI Assistant
        </button>
      </div>

      {/* TINY LOTTIE (DECORATION ONLY) */}
      <div className="w-10 md:w-14 mx-auto opacity-30">
        <Lottie
          animationData={require("../../public/hero-ai.json")}
          loop={true}
        />
      </div>

    </section>
  );
}