"use client";
import Image from "next/image";
import dynamic from 'next/dynamic';

// Performance အတွက် Lottie ကို optimize လုပ်ထားပါတယ်
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
const anim = require("../../public/hero-ai.json");

export default function Hero() {
  return (
    <section className="pt-24 pb-16 px-6 text-center max-w-6xl mx-auto relative overflow-hidden">
      
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-gradient-radial from-blue-600/10 via-transparent to-transparent blur-[120px] pointer-events-none -z-10" />

      <div className="flex flex-col items-center gap-10 mb-16 relative">
        {/* Logo Container */}
        <div className="relative p-6 rounded-[40px] bg-white/3 border border-white/5 backdrop-blur-sm group transition-all duration-500 hover:border-blue-500/20 hover:shadow-[0_0_60px_rgba(59,130,246,0.15)]">
          <Image
            src="/images/logo.webp"
            alt="KAC For Youth"
            width={700}
            height={700}
            className="w-40 md:w-56 drop-shadow-[0_0_20px_rgba(255,255,255,0.08)] transition-transform duration-500 group-hover:scale-[1.03]"
            priority
          />
        </div>

        {/* Floating Animation */}
        <div className="w-28 md:w-36 opacity-90 absolute -right-4 md:-right-8 top-10 md:top-20 animate-in fade-in duration-1000">
          <Lottie animationData={anim} loop />
        </div>
      </div>

      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-slate-400">
        Learn Digital Skills
        <br />
        <span className="text-slate-200">That Change Your Future</span>
      </h1>

      <p className="mt-6 md:mt-8 text-base md:text-xl max-w-2xl mx-auto text-slate-300 font-medium leading-relaxed mb-12">
        Computer, Telegram, AI, Crypto, Freelancing skills ကို လက်တွေ့အသုံးချနိုင်အောင်
        သင်ပေးမယ့် platform
      </p>

      {/* --- ဆရာပြထားတဲ့ နေရာလွတ်မှာ Stats တွေကို ထည့်သွင်းခြင်း --- */}
      <div className="flex justify-center gap-8 md:gap-20 py-8 border-y border-white/5 bg-white/2 backdrop-blur-sm rounded-3xl max-w-4xl mx-auto">
        <div className="text-center group">
          <p className="text-3xl md:text-5xl font-black text-white group-hover:text-blue-400 transition-colors">100+</p>
          <p className="text-xs md:text-sm uppercase tracking-widest text-slate-500 font-bold mt-2">Students</p>
        </div>
        <div className="w-[1px] bg-white/10 my-2"></div>
        <div className="text-center group">
          <p className="text-3xl md:text-5xl font-black text-white group-hover:text-blue-400 transition-colors">5+</p>
          <p className="text-xs md:text-sm uppercase tracking-widest text-slate-500 font-bold mt-2">Courses</p>
        </div>
        <div className="w-[1px] bg-white/10 my-2"></div>
        <div className="text-center group">
          <p className="text-3xl md:text-5xl font-black text-white group-hover:text-blue-400 transition-colors">24/7</p>
          <p className="text-xs md:text-sm uppercase tracking-widest text-slate-500 font-bold mt-2">Access</p>
        </div>
      </div>
    </section>
  );
}