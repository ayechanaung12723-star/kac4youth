"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import SocialLinks from "@/components/SocialLinks";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { courses } from "@/data/courses";

export default function Home() {
  const [selectedCourse, setSelectedCourse] = useState(courses[0]);

  return (
    <main className="relative min-h-screen bg-[#020617] text-white">
      <Navbar />
      <Hero />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT SIDE */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              တက်ရောက်နိုင်သော သင်တန်းများ
            </h2>

            {/* Course Tabs */}
            <div className="flex flex-wrap gap-3 mb-6">
              {courses.map((course, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedCourse(course)}
                  className={`px-4 py-2 rounded-xl transition ${
                    selectedCourse.title === course.title
                      ? "bg-blue-600"
                      : "bg-[#0f172a] hover:bg-[#1e293b]"
                  }`}
                >
                  {course.title}
                </button>
              ))}
            </div>

            {/* Selected Course Box */}
            <div className="bg-[#0f172a] p-6 rounded-2xl">

              {/* Header: small icon + title */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={selectedCourse.icon}
                  className="w-12 h-12"
                />
                <h3 className="text-2xl font-bold">
                  {selectedCourse.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-slate-400 mb-4">
                {selectedCourse.description}
              </p>

              {/* Topics (scrollable) */}
              <div className="max-h-60 overflow-y-auto pr-2">
                <ul className="space-y-2 text-sm text-slate-300">
                  {selectedCourse.topics.map((t: string, i: number) => (
                    <li
                      key={i}
                      className="border-b border-slate-700 pb-2 hover:text-white transition"
                    >
                      • {t}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:sticky lg:top-24 h-fit">
            <div className="bg-[#0f172a] p-6 rounded-2xl">

              {/* Stats */}
              <Stats />

              {/* CTA */}
              <div className="mt-6 text-center">
                <h3 className="text-xl font-bold mb-4">
                  Ready to Start?
                </h3>

                <p className="text-slate-400 mb-4">
                  Join Telegram and begin your journey
                </p>

                <a
                  href="https://t.me/YOUR_LINK"
                  target="_blank"
                  className="btn-primary w-full block"
                >
                  Join Telegram
                </a>
              </div>

            </div>
          </div>

        </div>
      </section>

      <SocialLinks />
      <Footer />
      <FloatingCTA />
    </main>
  );
}