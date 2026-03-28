"use client";
import Image from "next/image";

export default function CourseCard({ course, onClick, isSelected }: any) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-5 p-5 rounded-2xl cursor-pointer transition-all duration-300 border ${
        isSelected 
          ? "bg-white text-black border-white shadow-lg scale-[1.02]" 
          : "bg-[#1e293b]/50 text-white border-white/5 hover:border-white/20 hover:bg-[#1e293b]"
      }`}
    >
      {/* Icon Container */}
      <div className={`p-3 rounded-xl shrink-0 ${isSelected ? 'bg-black/5' : 'bg-white/5'}`}>
        <Image 
          src={course.icon} 
          alt="" 
          width={60} 
          height={60} 
          className="w-12 h-12 md:w-14 md:h-14 object-contain"
        />
      </div>

      <div className="flex-1">
        {/* --- သင်တန်းခေါင်းစဉ် စာလုံးအရွယ်အစားကို ဒီနေရာမှာ ပြင်ထားပါတယ် --- */}
        <h3 className="font-extrabold text-xl md:text-2xl leading-tight italic">
          {course.title}
        </h3>
        
        <p className={`text-xs mt-1 font-medium ${isSelected ? 'text-black/60' : 'text-slate-400'}`}>
          {course.description}
        </p>
      </div>
    </div>
  );
}