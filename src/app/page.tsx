"use client"; 

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CourseCard from "@/components/CourseCard";
import CourseModal from "@/components/CourseModal";
import Stats from "@/components/Stats";
import SocialLinks from "@/components/SocialLinks";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import CTA from "@/components/CTA";
import { courses } from "@/data/courses";

export default function Home() {
  const [selectedCourse, setSelectedCourse] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (course: any) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCourse(null);
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#020617] text-white">
      <Navbar />

      <Hero />

      <section
        id="courses"
        className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28"
      >
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300/80">
            Courses
          </p>
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
            တက်ရောက်နိုင်သော သင်တန်းများ
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300 md:text-lg">
            လေ့လာရန်လွယ်ကူပြီး လက်တွေ့အသုံးချနိုင်တဲ့ skill-based courses
            တွေကို တစ်နေရာတည်းမှာ စနစ်တကျ စုစည်းထားပါတယ်။
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {courses.map((course, i) => (
            <CourseCard key={course.title + i} course={course} onClick={openModal} />
          ))}
        </div>
      </section>

      {/* Modal */}
      <CourseModal course={selectedCourse} isOpen={isModalOpen} onClose={closeModal} />

      <Stats />
      <CTA />
      <SocialLinks />
      <Footer />
      <FloatingCTA />
    </main>
  );
}