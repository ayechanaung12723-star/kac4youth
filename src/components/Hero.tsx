"use client";

import Image from "next/image";
import Link from "next/link";
import Lottie from "lottie-react";

const heroAnimation = require("../../public/hero-ai.json");

export default function Hero() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 pt-36 md:px-10 md:pt-44">
      <div className="absolute left-[-8rem] top-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute right-[-6rem] top-40 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 px-6 py-10 shadow-[0_30px_120px_rgba(0,0,0,0.35)] backdrop-blur-2xl md:px-10 md:py-14">
        <div className="mx-auto max-w-6xl">
          <div className="mb-5 inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold tracking-[0.3em] text-cyan-200">
            KAC FOR YOUTH
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="text-center lg:text-left">
              <h1 className="max-w-3xl text-4xl font-black tracking-tight md:text-6xl xl:text-7xl">
                Learn Digital Skills that
                <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  {" "}
                  Create Real Opportunities
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg lg:mx-0">
                AI, Crypto, Telegram, Computer နဲ့ Freelancing skills တွေကို
                youth-friendly style နဲ့ လေ့လာပြီး လက်တွေ့အသုံးချနိုင်အောင်
                တည်ဆောက်ထားတဲ့ platform တစ်ခုပါ။
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
                <Link
                  href="#courses"
                  className="inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02] hover:bg-cyan-100 sm:w-auto sm:px-8"
                >
                  Explore Courses
                </Link>
                <Link
                  href="https://t.me/lWJXmj8pC7o1YWY1"
                  target="_blank"
                  className="inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.02] hover:border-white/25 hover:bg-white/10 sm:w-auto sm:px-8"
                >
                  Join Telegram
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-300">
                  Mobile-friendly
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-300">
                  Practical learning
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-300">
                  AI-first workflow
                </span>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="flex w-full max-w-xl items-center justify-center gap-4 rounded-[2rem] border border-white/10 bg-slate-950/50 p-4 shadow-2xl shadow-cyan-950/20 backdrop-blur-xl md:p-6">
                <div className="relative flex flex-1 items-center justify-center rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-white/8 to-white/4 p-5 md:p-7">
                  <Image
                    src="/images/logo.webp"
                    alt="KAC Logo"
                    width={420}
                    height={420}
                    priority
                    className="h-auto w-52 drop-shadow-[0_0_40px_rgba(34,211,238,0.35)] md:w-72"
                  />
                </div>

                <div className="flex w-28 items-center justify-center md:w-32">
                  <div className="w-24 opacity-80 md:w-28">
                    <Lottie animationData={heroAnimation} loop />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
              <p className="text-2xl font-bold text-cyan-300">5+</p>
              <p className="mt-2 text-sm text-slate-300">Courses available</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
              <p className="text-2xl font-bold text-cyan-300">100+</p>
              <p className="mt-2 text-sm text-slate-300">Students target</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
              <p className="text-2xl font-bold text-cyan-300">24/7</p>
              <p className="mt-2 text-sm text-slate-300">Accessible content</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}