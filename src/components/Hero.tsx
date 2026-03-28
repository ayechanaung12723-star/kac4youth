"use client";
import Image from "next/image";
import Lottie from "lottie-react";
const anim = require("../../public/hero-ai.json");

export default function Hero() {
  return (
    <section className="pt-24 pb-16 px-6 text-center max-w-5xl mx-auto">

      {/* Logo + Animation */}
      <div className="flex justify-center items-center gap-8 mb-12">
        <Image
          src="/images/logo.webp"
          alt="KAC"
          width={700}
          height={700}
          className="w-36 md:w-56 drop-shadow-[0_0_40px_rgba(255,255,255,0.15)]"
        />
        <div className="w-14 md:w-16 opacity-80">
          <Lottie animationData={anim} loop />
        </div>
      </div>

      {/* Title */}
      <h1 className="text-3xl md:text-5xl font-bold leading-tight">
        Learn Digital Skills
        <br />
        <span className="text-slate-300">That Change Your Future</span>
      </h1>

      {/* Subtitle */}
      <p className="mt-4 md:mt-6 text-sm md:text-lg max-w-lg mx-auto">
        AI, Crypto, Telegram, Freelancing skills ကို လက်တွေ့အသုံးချနိုင်အောင်
        သင်ပေးမယ့် platform
      </p>

      {/* Buttons */}
      <div className="mt-6 md:mt-10 flex gap-3 justify-center flex-wrap">
        <button className="btn-primary">Start Learning</button>
        <button className="btn-secondary">Join Telegram</button>
      </div>

    </section>
  );
}