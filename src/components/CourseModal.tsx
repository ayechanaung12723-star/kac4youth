"use client";
import Image from "next/image";

export default function CourseModal({ course, onClose }: any) {
  if (!course) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
      {/* Background Overlay */}
      <div 
        className="absolute inset-0 bg-black/85 backdrop-blur-md" 
        onClick={onClose} 
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0f172a] border border-white/10 rounded-[32px] p-8 md:p-12 shadow-2xl animate-in zoom-in duration-300">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-white"
        >
          ✕
        </button>

        <div className="flex flex-col items-center text-center gap-6">
          <div className="p-6 rounded-[30px] bg-blue-500/10 border border-blue-500/20">
            <Image 
              src={course.icon} 
              alt={course.title} 
              width={120} 
              height={120} 
              className="w-20 h-20 md:w-24 md:h-24 object-contain"
            />
          </div>
          <h3 className="text-3xl md:text-5xl font-black text-white">
            {course.title}
          </h3>
          <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
            {course.description}
          </p>

          {/* --- ဆရာ့ Telegram ဆီ ဆက်သွယ်ရန် Button --- */}
          <div className="mt-2 w-full max-w-sm">
            <a 
              href="https://t.me/KACeverything" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.3)] group"
            >
              <span className="text-xl">💬</span>
              သင်တန်းတက်ရန် ဆက်သွယ်ရန် (@KACeverything)
            </a>
            <p className="text-xs text-slate-500 mt-3 italic">
              *သင်တန်းနှင့်ပတ်သက်၍ အသေးစိတ်စုံစမ်းမေးမြန်းနိုင်ပါသည်။
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-white/5 pt-10">
          <h4 className="text-sm font-bold uppercase tracking-widest text-blue-400 mb-6 text-center">
            What you will learn
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {course.topics.map((topic: string, index: number) => (
              <div key={index} className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/5 group hover:border-blue-500/30 transition-colors">
                <span className="text-xl group-hover:scale-110 transition-transform">📚</span>
                <p className="text-slate-300 font-medium">{topic}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <button 
            onClick={onClose}
            className="text-slate-500 hover:text-white font-medium transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}