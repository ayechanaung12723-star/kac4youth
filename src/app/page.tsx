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

      <section className="mx-auto max-w-7xl px-6 py-20">
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
              onClick={() => setSelectedCourse(course)} // 🔥 KEY LINE
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

      <Stats />
      <CTA />
      <SocialLinks />
      <Footer />
      <FloatingCTA />
    </main>
  );
}