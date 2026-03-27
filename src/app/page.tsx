import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialLinks from "@/components/SocialLinks";
import Footer from "@/components/Footer";
import { courses } from "@/data/courses";
import CourseCard from "@/components/CourseCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020617] text-white">

      <Navbar />

      <Hero />

      {/* Courses */}
      <section id="courses" className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16">
          တက်ရောက်နိုင်သော သင်တန်းများ
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, i) => (
            <CourseCard key={i} course={course} />
          ))}
        </div>
      </section>

      <SocialLinks />

      <Footer />

    </main>
  );
}