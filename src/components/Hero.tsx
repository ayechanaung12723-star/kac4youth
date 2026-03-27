"use client";
import Image from "next/image";
import Lottie from "lottie-react";

export default function Hero() {
  return (
    <section className="relative pt-64 pb-28 px-6 text-center max-w-5xl mx-auto">

      {/* HUGE LOGO with subtle hover scale */}
      <div className="mb-12 transform hover:scale-105 transition-all duration-500">
        <Image
          src="/images/logo.webp"
          alt="KAC Logo"
          width={500}
          height={500}
          className="w-52 md:w-96 mx-auto drop-shadow-[0_0_55px_rgba(59,130,246,0.8)]"
        />
      </div>

      {/* TITLE with fadeIn */}
      <h1 className="text-5xl md:text-7xl font-extrabold mb-6 animate-fadeIn">
        KAC For Youth
      </h1>

      {/* SUBTEXT */}
      <p className="text-gray-400 max-w-2xl mx-auto mb-14 text-lg md:text-xl animate-fadeIn delay-200">
        AI, Crypto နဲ့ Online Income Skills ကို လက်တွေ့အသုံးချနိုင်အောင် သင်ပေးမယ့် Platform
      </p>

      {/* BUTTONS with subtle lift animation */}
      <div className="flex flex-col md:flex-row gap-4 justify-center mb-16">
        <button className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-xl font-semibold shadow-lg text-lg transform hover:-translate-y-1 transition-all duration-300">
          Start Learning
        </button>
        <button className="border border-white/20 hover:border-white/40 px-8 py-3 rounded-xl text-lg transform hover:-translate-y-1 transition-all duration-300">
          Try AI Assistant
        </button>
      </div>

      {/* TINY LOTTIE floating */}
      <div className="w-10 md:w-14 mx-auto opacity-25 animate-float">
        <Lottie
          animationData={require("../../public/hero-ai.json")}
          loop={true}
        />
      </div>

    </section>
  );
}