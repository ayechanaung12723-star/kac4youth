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
          <div className="flex flex-col gap-6">

            <h2 className="text-3xl md:text-5xl font-bold">
              တက်ရောက်နိုင်သော သင်တန်းများ
            </h2>

            {/* Course Tabs */}
            <div className="flex flex-wrap gap-3">
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
            <div className="bg-[#0f172a] p-4 md:p-6 rounded-2xl">

              {/* Header */}
              <div className="flex items-center gap-3 mb-3">
                <img src={selectedCourse.icon} className="w-10 h-10" />
                <h3 className="text-xl md:text-2xl font-bold">{selectedCourse.title}</h3>
              </div>

              {/* Description */}
              <p className="text-slate-400 mb-3 text-sm md:text-base">
                {selectedCourse.description}
              </p>

              {/* Topics (2-column, max visible items = 6) */}
              <div className="grid grid-cols-2 gap-2">
                {selectedCourse.topics.slice(0, 6).map((t: string, i: number) => (
                  <div
                    key={i}
                    className="text-xs md:text-sm text-slate-300 border-b border-slate-700 pb-1 hover:text-white transition"
                  >
                    • {t}
                  </div>
                ))}
              </div>

              {/* Optional “See More” button */}
              {selectedCourse.topics.length > 6 && (
                <button
                  onClick={() => alert("See full topics in modal")}
                  className="mt-2 text-blue-400 text-xs hover:underline"
                >
                  See More
                </button>
              )}

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:sticky lg:top-24 h-fit flex flex-col gap-6">
            <div className="bg-[#0f172a] p-6 rounded-2xl">

              {/* Stats */}
              <Stats />

              {/* CTA */}
              <div className="mt-6 text-center">
                <h3 className="text-xl font-bold mb-2">Ready to Start?</h3>
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