"use client";
import Image from "next/image";

export default function CourseCard({ course, onClick, isSelected }: any) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-4 p-5 rounded-2xl cursor-pointer transition-all duration-300 border ${
        isSelected 
          ? "bg-white text-black border-white shadow-lg scale-[1.02]" 
          : "bg-[#1e293b]/50 text-white border-white/5 hover:border-white/20 hover:bg-[#1e293b]"
      }`}
    >
      <div className={`p-2 rounded-xl ${isSelected ? 'bg-black/5' : 'bg-white/5'}`}>
        <Image src={course.icon} alt="" width={45} height={45} className="w-10 h-10 object-contain" />
      </div>
      <div className="flex-1">
        <h3 className="font-bold text-lg leading-tight">{course.title}</h3>
        <p className={`text-xs mt-1 ${isSelected ? 'text-black/60' : 'text-slate-400'}`}>
          {course.description}
        </p>
      </div>
    </div>
  );
}