"use client";
import Image from "next/image";
import Lottie from "lottie-react";

export default function Hero() {
  return (
    <section className="relative pt-60 pb-24 px-6 text-center max-w-5xl mx-auto">

      {/* HUGE LOGO */}
      <div className="mb-12">
        <Image
          src="/images/logo.webp"
          alt="KAC Logo"
          width={350}
          height={350}
          className="w-44 md:w-72 mx-auto drop-shadow-[0_0_35px_rgba(59,130,246,0.6)]"
        />
      </div>

      {/* TITLE */}
      <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
        KAC For Youth
      </h1>

      {/* SUBTEXT */}
      <p className="text-gray-400 max-w-2xl mx-auto mb-12">
        AI, Crypto နဲ့ Online Income Skills ကို လက်တွေ့အသုံးချနိုင်အောင် သင်ပေးမယ့် Platform
      </p>

      {/* BUTTONS */}
      <div className="flex flex-col md:flex-row gap-4 justify-center mb-14">
        <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl font-semibold shadow-lg">
          Start Learning
        </button>
        <button className="border border-white/20 hover:border-white/40 px-6 py-3 rounded-xl">
          Try AI Assistant
        </button>
      </div>

      {/* TINY LOTTIE (ONLY DECORATION) */}
      <div className="w-12 md:w-16 mx-auto opacity-40">
        <Lottie
          animationData={require("../../public/hero-ai.json")}
          loop={true}
        />
      </div>

    </section>
  );
}