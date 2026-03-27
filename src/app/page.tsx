import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import CTA from "../components/CTA";
import SocialLinks from "../components/SocialLinks";
import Footer from "../components/Footer";
import { courses } from "../data/courses";
import CourseCard from "../components/CourseCard";

export default function Home() {
  return (
    <main className="bg-[#020617] text-white">

      <Navbar />

      <Hero />

      <Stats />

      {/* Courses */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">
          Courses
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((c, i) => (
            <CourseCard key={i} course={c} />
          ))}
        </div>
      </section>

      <CTA />

      <SocialLinks />

      <Footer />

    </main>
  );
}