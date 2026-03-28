"use client";

import { FaTimes } from "react-icons/fa";

interface CourseModalProps {
  course: {
    title: string;
    icon: string;
    description: string;
    topics: string[];
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function CourseModal({ course, isOpen, onClose }: CourseModalProps) {
  if (!isOpen || !course) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="bg-[#0f172a] max-w-lg w-full p-6 rounded-2xl relative overflow-y-auto max-h-[90vh]">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-slate-300 hover:text-white"
          onClick={onClose}
        >
          <FaTimes size={20} />
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold mb-2">{course.title}</h2>

        {/* Description */}
        <p className="text-slate-400 mb-4">{course.description}</p>

        {/* Topics */}
        <ul className="list-disc pl-5 space-y-2 text-slate-300">
          {course.topics.map((topic, idx) => (
            <li key={idx}>{topic}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}