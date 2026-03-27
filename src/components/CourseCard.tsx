"use client";

export default function CourseCard({ course }: { course: any }) {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-2xl hover:bg-white/20">
      <h3 className="text-xl md:text-2xl font-bold mb-4">{course.title}</h3>
      <p className="text-gray-300 mb-4">{course.description}</p>
      <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg font-semibold transform hover:-translate-y-1 transition-all duration-300">
        Learn More
      </button>
    </div>
  );
}