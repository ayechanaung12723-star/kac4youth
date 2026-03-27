"use client";
import Image from "next/image";
import Lottie from "lottie-react";

export default function Hero() {
  return (
    <section className="relative pt-52 pb-24 px-6 text-center max-w-5xl mx-auto">

      {/* BIG LOGO (MAIN FOCUS) */}
      <div className="mb-8">
        <Image
          src="/images/logo.webp"
          alt="KAC Logo"
          width={200}
          height={200}
          className="w-32 md:w-48 mx-auto drop-shadow-[0_0_25px_rgba(59,130,246,0.5)]"
        />
      </div>

      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
        KAC For Youth
      </h1>

      {/* Subtext */}
      <p className="text-gray-400 max-w-2xl mx-auto mb-10">
        AI, Crypto နဲ့ Online Income Skills ကို လက်တွေ့အသုံးချနိုင်အောင် သင်ပေးမယ့် Platform
      </p>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row gap-4 justify-center mb-10">
        <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl font-semibold transition shadow-lg">
          Start Learning
        </button>
        <button className="border border-white/20 hover:border-white/40 px-6 py-3 rounded-xl transition">
          Try AI Assistant
        </button>
      </div>

      {/* SMALL LOTTIE (JUST DECORATION) */}
      <div className="w-16 md:w-20 mx-auto opacity-60">
        <Lottie
          animationData={require("../../public/hero-ai.json")}
          loop={true}
        />
      </div>

    </section>
  );
}