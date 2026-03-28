"use client";
import Image from "next/image";

export default function CourseCard({ course, onClick }: any) {
  return (
    <div
      onClick={onClick}
      className="bg-[#0f172a] p-4 md:p-5 rounded-xl cursor-pointer hover-up flex items-start gap-4 md:gap-6"
    >
      <Image
        src={course.icon}
        alt={course.title}
        width={50}
        height={50}
        className="flex-shrink-0"
      />
      <div className="flex-1">
        <h3 className="text-lg md:text-xl font-semibold">{course.title}</h3>
        <p className="text-slate-400 text-sm md:text-base mt-1">{course.description}</p>
        <button className="btn-primary mt-3 text-sm md:text-base">View</button>
      </div>
    </div>
  );
}