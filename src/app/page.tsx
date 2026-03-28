"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CourseCard from "@/components/CourseCard";
import Stats from "@/components/Stats";
import SocialLinks from "@/components/SocialLinks";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import CTA from "@/components/CTA";
import { courses } from "@/data/courses";

export default function Home() {
  const [selectedCourse, setSelectedCourse] = useState(courses[0]);

  return (
    <main className="relative min-h-screen bg-[#020617] text-white selection:bg-blue-500/30">
      <Navbar />
      
      {/* Background Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-600/10 blur-[120px] pointer-events-none -z-10" />

      <Hero />

      {/* Courses Section */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500 mb-4">
            တက်ရောက်နိုင်သော သင်တန်းများ
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            လူငယ်များအတွက် လက်တွေ့အသုံးချနိုင်မယ့် နည်းပညာဘာသာရပ်များကို တစ်နေရာတည်းမှာ လေ့လာနိုင်ပါတယ်။
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Left panel: course list */}
          <div className="md:col-span-4 flex flex-col gap-3 h-fit">
            {courses.map((course, i) => (
              <div 
                key={i}
                className={`transition-all duration-300 transform ${selectedCourse?.title === course.title ? 'scale-[1.02]' : 'hover:scale-[1.01]'}`}
              >
                <CourseCard
                  course={course}
                  isSelected={selectedCourse?.title === course.title}
                  onClick={() => setSelectedCourse(course)}
                />
              </div>
            ))}
          </div>

          {/* Right panel: selected course topics */}
          <div className="md:col-span-8 bg-slate-900/40 backdrop-blur-xl border border-white/5 p-8 rounded-3xl min-h-[500px] max-h-[700px] overflow-y-auto shadow-2xl relative">
            {selectedCourse ? (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                    <span className="text-2xl">📚</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white">
                    {selectedCourse.title}
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {selectedCourse.topics.map((topic, idx) => (
                    <li 
                      key={idx}
                      className="list-none flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors"
                    >
                      <span className="text-blue-400 mt-1">✔</span>
                      <span className="text-slate-300 leading-relaxed">{topic}</span>
                    </li>
                  ))}
                </div>
              </div>
            ) : (
              <div className="h-full flex items-center justify-center text-slate-500">
                <p className="text-lg italic">သင်တန်းတစ်ခုကို ရွေးချယ်ပြီး အသေးစိတ်လေ့လာပါ</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Stats + CTA Section with modern design */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/5 -skew-y-3" />
        <div className="max-w-6xl mx-auto px-6 relative flex flex-col md:flex-row items-center justify-between gap-16">
          <Stats />
          <div className="text-center md:text-left bg-white/5 p-10 rounded-[40px] border border-white/10 backdrop-blur-sm">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start?
            </h3>
            <p className="text-slate-400 mb-8 text-lg">
              သင်တန်းများအကြောင်း အသေးစိတ်သိလိုပါက <br/>ကျွန်တော်တို့ရဲ့ Telegram မှာ အခုပဲ ဆက်သွယ်လိုက်ပါ။
            </p>
            <CTA />
          </div>
        </div>
      </section>

      <SocialLinks />
      <Footer />
      <FloatingCTA />
    </main>
  );
}