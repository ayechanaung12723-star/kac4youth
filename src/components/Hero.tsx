"use client";
import Image from "next/image";
import Lottie from "lottie-react";
const anim = require("../../public/hero-ai.json");

export default function Hero() {
  return (
    <section className="pt-20 pb-12 px-4 text-center max-w-5xl mx-auto">

      <div className="flex justify-center items-center gap-6 mb-10">
        <Image
          src="/images/logo.webp"
          alt="KAC"
          width={700}
          height={700}
          className="w-36 md:w-48 drop-shadow-[0_0_40px_rgba(255,255,255,0.15)]"
        />
        <div className="w-12 md:w-14 opacity-80">
          <Lottie animationData={anim} loop />
        </div>
      </div>

      <h1 className="text-3xl md:text-5xl font-bold leading-tight">
        Learn Digital Skills
        <br />
        <span className="text-slate-300">That Change Your Future</span>
      </h1>

      <p className="mt-3 md:mt-5 text-sm md:text-lg max-w-lg mx-auto">
        AI, Crypto, Telegram, Freelancing skills ကို လက်တွေ့အသုံးချနိုင်အောင်
        သင်ပေးမယ့် platform
      </p>

      <div className="mt-6 md:mt-8 flex gap-3 justify-center flex-wrap">
        <button className="btn-primary">Start Learning</button>
        <button className="btn-secondary">Join Telegram</button>
      </div>
    </section>
  );
}