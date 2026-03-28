"use client";

import { useState } from "react";
import { FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";

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
  const [expandedTopics, setExpandedTopics] = useState<number[]>([]);

  if (!isOpen || !course) return null;

  const toggleTopic = (index: number) => {
    setExpandedTopics(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#0f172a] max-w-lg w-full p-6 rounded-2xl relative overflow-y-auto max-h-[90vh] animate-slide-up">
        
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-slate-300 hover:text-white"
          onClick={onClose}
        >
          <FaTimes size={20} />
        </button>

        {/* Title & Description */}
        <h2 className="text-2xl font-bold mb-2">{course.title}</h2>
        <p className="text-slate-400 mb-4">{course.description}</p>

        {/* Topics List */}
        <ul className="space-y-2">
          {course.topics.map((topic, idx) => (
            <li key={idx}>
              <button
                className="w-full flex justify-between items-center text-left text-slate-300 p-2 rounded hover:bg-slate-800"
                onClick={() => toggleTopic(idx)}
              >
                <span>{topic.split("(")[0]}</span>
                {expandedTopics.includes(idx) ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {expandedTopics.includes(idx) && (
                <p className="text-slate-400 text-sm mt-1 ml-4">{topic}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}