"use client";

import Image from "next/image";

interface CourseCardProps {
  course: {
    title: string;
    icon: string;
    description: string;
    topics: string[];
  };
  onClick: (course: any) => void;
}

export default function CourseCard({ course, onClick }: CourseCardProps) {
  return (
    <div
      className="bg-[#0f172a] p-6 rounded-2xl soft-shadow hover-up cursor-pointer"
      onClick={() => onClick(course)}
    >
      {/* ICON */}
      <div className="mb-4">
        <Image
          src={course.icon}
          alt={course.title}
          width={60}
          height={60}
          className="w-14 h-14"
        />
      </div>

      {/* TITLE */}
      <h3 className="text-xl font-semibold mb-2">{course.title}</h3>

      {/* DESCRIPTION */}
      <p className="text-slate-400 mb-4">{course.description}</p>

      {/* TOPICS PREVIEW (first 3 only) */}
      <ul className="text-sm text-slate-300 mb-6 space-y-1">
        {course.topics.slice(0, 3).map((t, i) => (
          <li key={i}>✔ {t}</li>
        ))}
        {course.topics.length > 3 && <li>...more</li>}
      </ul>

      {/* BUTTON */}
      <button className="btn-primary text-sm">Join Course</button>
    </div>
  );
}