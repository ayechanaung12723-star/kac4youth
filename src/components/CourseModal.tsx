"use client";
import Image from "next/image";

export default function CourseCard({ course, onClick, isSelected }: any) {
  return (
    <div
      onClick={onClick}
      className={`relative group flex flex-col items-center gap-6 p-8 rounded-3xl cursor-pointer transition-all duration-300 ease-in-out border text-center h-full ${
        isSelected
          ? "bg-white text-black shadow-[0_0_30px_rgba(255,255,255,0.2)] border-white scale-[1.02]"
          : "bg-[#0f172a]/80 text-white backdrop-blur-sm border-white/5 hover:border-white/10 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] hover:-translate-y-1"
      }`}
    >
      {/* Selection Glow Effect (for non-selected cards) */}
      {!isSelected && (
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl pointer-events-none" />
      )}

      {/* Course Icon Container with glass effect on selection */}
      <div className={`p-5 rounded-[28px] border ${isSelected ? 'bg-black/5 border-black/10' : 'bg-white/5 border-white/5 group-hover:bg-blue-500/10 group-hover:border-blue-500/20'}`}>
        <Image 
          src={course.icon} 
          alt={`${course.title} course icon`} 
          width={80} 
          height={80} 
          className="w-16 h-16 md:w-20 md:h-20 transition-transform duration-300 group-hover:scale-[1.05]"
        />
      </div>

      <div className="flex flex-col gap-3">
        <h3 className={`font-extrabold text-xl md:text-2xl leading-tight ${isSelected ? 'text-black' : 'text-white'}`}>
          {course.title}
        </h3>
        <p className={`text-sm md:text-base ${isSelected ? 'text-black/70' : 'text-slate-400'}`}>
          {course.description}
        </p>
      </div>

      {/* Modern Topic List - using Column Layout & Icon Variety */}
      <div className="mt-6 w-full text-left space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {course.topics.slice(0, 4).map((topic: string, index: number) => (
            <div 
              key={index} 
              className={`flex items-start gap-3 p-4 rounded-xl border ${isSelected ? 'bg-black/3 border-black/5' : 'bg-white/5 border-white/5 group-hover:bg-white/8 group-hover:border-white/8'}`}
            >
              <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 ${isSelected ? 'bg-white text-blue-600 border-blue-600/20' : 'bg-blue-500/10 text-blue-400 border-blue-500/20 group-hover:border-blue-500/30'}`}>
                {/* Icon Variety based on topic index - you can customize this logic further */}
                {index === 0 && <span className="text-xl">📚</span>}
                {index === 1 && <span className="text-xl">💻</span>}
                {index === 2 && <span className="text-xl">🚀</span>}
                {index === 3 && <span className="text-xl">💰</span>}
              </div>
              <p className={`text-sm md:text-base ${isSelected ? 'text-black/80' : 'text-slate-300'}`}>
                {topic}
              </div>
            </div>
          ))}
        </div>
        {course.topics.length > 4 && (
          <p className={`text-xs md:text-sm italic text-center ${isSelected ? 'text-black/60' : 'text-slate-500'}`}>
            + {course.topics.length - 4} more topics...
          </p>
        )}
      </div>

      {/* Selected Indicator for Mobile */}
      {isSelected && (
        <div className="absolute top-4 right-4 text-green-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </div>
      )}
    </div>
  );
}