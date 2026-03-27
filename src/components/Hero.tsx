"use client";

import Image from "next/image";
import Lottie from "lottie-react";
const anim = require("../../public/hero-ai.json");

export default function Hero() {
  return (
    <section className="pt-40 pb-24 px-6 text-center max-w-6xl mx-auto">

      {/* Logo + Animation */}
      <div className="flex justify-center items-center gap-6 mb-10">
        <Image
          src="/images/logo.webp"
          alt="KAC"
          width={200}
          height={200}
          className="w-32 md:w-44"
        />

        <div className="w-14 opacity-80">
          <Lottie animationData={anim} loop />
        </div>
      </div>

      {/* Title */}
      <h1 className="text-4xl md:text-6xl font-bold leading-tight">
        Learn Digital Skills
        <br />
        <span className="text-slate-300">That Change Your Future</span>
      </h1>

      {/* Subtitle */}
      <p className="mt-6 text-lg max-w-xl mx-auto">
        AI, Crypto, Telegram, Freelancing skills ကို လက်တွေ့အသုံးချနိုင်အောင်
        သင်ပေးမယ့် platform
      </p>

      {/* Buttons */}
      <div className="mt-10 flex gap-4 justify-center">
        <button className="btn-primary">Start Learning</button>
        <button className="btn-secondary">Join Telegram</button>
      </div>

    </section>
  );
}