"use client";
interface Course {
  title: string;
  desc: string;
  icon: string;
  color?: string;
}

export default function CourseCard({ course }: { course: Course }) {
  return (
    <div className={`p-8 bg-slate-900 rounded-3xl border border-slate-800 hover:border-blue-500 transition-all`}>
      <div className="text-4xl mb-4">{course.icon}</div>
      <h3 className="text-2xl font-bold mb-3">{course.title}</h3>
      <p className="text-slate-400 mb-6">{course.desc}</p>
      <button className="text-blue-400 font-bold">အသေးစိတ်ကြည့်မည် →</button>
    </div>
  );
}