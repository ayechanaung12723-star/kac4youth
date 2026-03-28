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
import CourseModal from "@/components/CourseModal";
import { courses } from "@/data/courses";

export default function Home() {
  const [selectedCourse, setSelectedCourse] = useState<any>(null);

  return (
    <main className="relative min-h-screen bg-[#020617] text-white">
      <Navbar />
      <Hero />

      {/* Courses Section */}
      <section id="courses" className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold">
            တက်ရောက်နိုင်သော သင်တန်းများ
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {courses.map((course, i) => (
            <CourseCard
              key={i}
              course={course}
              onClick={() => setSelectedCourse(course)}
            />
          ))}
        </div>
      </section>

      {/* Modal */}
      <CourseModal
        course={selectedCourse}
        isOpen={!!selectedCourse}
        onClose={() => setSelectedCourse(null)}
      />

      {/* Stats + CTA */}
      <section className="bg-[#0f172a] py-20">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
          <Stats />
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Start?
            </h3>
            <p className="text-slate-400 mb-6">
              Join Telegram and begin your journey
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