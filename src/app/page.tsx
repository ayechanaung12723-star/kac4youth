"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CourseCard from "@/components/CourseCard";
import CourseModal from "@/components/CourseModal";
import SocialLinks from "@/components/SocialLinks";
import Footer from "@/components/Footer";
import { courses } from "@/data/courses";

export default function Home() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCourseClick = (course: any) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  return (
    <main className="relative min-h-screen bg-[#020617] text-white">
      <Navbar />
      <Hero />

      {/* Courses Section */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500">
            တက်ရောက်နိုင်သော သင်တန်းများ
          </h2>
          <p className="text-slate-400 mt-4">သင်တန်းအသေးစိတ်ကို သိရှိရန် သင်တန်းတစ်ခုခုကို နှိပ်ပါ</p>
        </div>

        {/* Grid Layout for Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, i) => (
            <CourseCard
              key={i}
              course={course}
              onClick={() => handleCourseClick(course)}
              isSelected={false} // Popup သုံးမှာဖြစ်လို့ Card ကို Select ဖြစ်နေစရာမလိုတော့ပါ
            />
          ))}
        </div>
      </section>

      {/* Popup Modal Component */}
      {isModalOpen && (
        <CourseModal 
          course={selectedCourse} 
          onClose={() => setIsModalOpen(false)} 
        />
      )}

      <SocialLinks />
      <Footer />
    </main>
  );
}