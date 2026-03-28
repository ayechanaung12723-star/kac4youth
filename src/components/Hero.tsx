"use client";
import Image from "next/image";
import dynamic from 'next/dynamic'; // Lottie optimization

// Optimize Lottie for performance
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
const anim = require("../../public/hero-ai.json");

export default function Hero() {
  return (
    <section className="pt-24 pb-16 px-6 text-center max-w-6xl mx-auto relative overflow-hidden">
      
      {/* Background Decorative Gradient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-gradient-radial from-blue-600/10 via-transparent to-transparent blur-[120px] pointer-events-none -z-10" />

      <div className="flex flex-col items-center gap-10 mb-16 relative">
        {/* Logo Container with enhanced glow effect */}
        <div className="relative p-6 rounded-[40px] bg-white/3 border border-white/5 backdrop-blur-sm group transition-all duration-500 hover:border-blue-500/20 hover:shadow-[0_0_60px_rgba(59,130,246,0.15)]">
          
          {/* Subtle glow behind logo */}
          <div className="absolute inset-0 rounded-[40px] bg-gradient-to-b from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
          
          <Image
            src="/images/logo.webp"
            alt="KAC For Youth - AI & Digital Skills"
            width={700}
            height={700}
            className="w-40 md:w-56 drop-shadow-[0_0_20px_rgba(255,255,255,0.08)] transition-transform duration-500 group-hover:scale-[1.03]"
            priority // Load logo first
          />
        </div>

        {/* Floating Lottie icon with subtle fade in */}
        <div className="w-16 md:w-20 opacity-90 absolute -right-4 md:-right-8 top-10 md:top-20 animate-in fade-in duration-1000">
          <Lottie animationData={anim} loop />
        </div>
      </div>

      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-slate-400">
        Learn Digital Skills
        <br />
        <span className="text-slate-200">That Change Your Future</span>
      </h1>

      <p className="mt-6 md:mt-8 text-base md:text-xl max-w-2xl mx-auto text-slate-300 font-medium leading-relaxed">
        AI, Crypto, Telegram, Freelancing skills ကို လက်တွေ့အသုံးချနိုင်အောင်
        သင်ပေးမယ့် platform
      </p>

      <div className="mt-10 md:mt-12 flex gap-4 justify-center flex-wrap">
        {/* Buttons with hover lift and shadow effects */}
        <button className="btn-primary transform hover:-translate-y-0.5 shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]">
          Start Learning
        </button>
        <button className="btn-secondary transform hover:-translate-y-0.5 hover:bg-white/5 hover:shadow-[0_0_15px_rgba(59,130,246,0.1)]">
          Join Telegram
        </button>
      </div>
    </section>
  );
}