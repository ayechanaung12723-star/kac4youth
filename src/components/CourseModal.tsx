"use client";
import Image from "next/image";

export default function CourseModal({ course, isSelected }: any) {
  if (!course) return null;

  return (
    <div
      className={`relative group flex flex-col items-center gap-8 p-10 rounded-[32px] transition-all duration-500 border h-full ${
        isSelected
          ? "bg-[#0f172a]/80 text-white backdrop-blur-xl border-white/10 shadow-2xl"
          : "bg-transparent opacity-50"
      }`}
    >
      {/* Course Header Info */}
      <div className="flex flex-col items-center text-center gap-4">
        <div className="p-6 rounded-[30px] bg-gradient-to-b from-blue-500/20 to-transparent border border-blue-500/20 shadow-inner">
          <Image 
            src={course.icon} 
            alt={course.title} 
            width={100} 
            height={100} 
            className="w-20 h-20 md:w-24 md:h-24 object-contain animate-float"
          />
        </div>
        <h3 className="text-3xl md:text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
          {course.title}
        </h3>
        <p className="text-slate-400 max-w-md leading-relaxed text-lg">
          {course.description}
        </p>
      </div>

      {/* Grid Layout for Topics */}
      <div className="w-full mt-4">
        <h4 className="text-sm font-bold uppercase tracking-widest text-blue-400 mb-6 flex items-center gap-2">
          <span className="w-8 h-[2px] bg-blue-400/30"></span>
          What you will learn
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {course.topics.map((topic: string, index: number) => (
            <div 
              key={index} 
              className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-300 group/item"
            >
              <div className="w-10 h-10 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center justify-center shrink-0 group-hover/item:scale-110 transition-transform">
                {index % 4 === 0 && <span>📚</span>}
                {index % 4 === 1 && <span>💻</span>}
                {index % 4 === 2 && <span>🚀</span>}
                {index % 4 === 3 && <span>💰</span>}
              </div>
              <p className="text-slate-300 font-medium leading-snug pt-1">
                {topic}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}