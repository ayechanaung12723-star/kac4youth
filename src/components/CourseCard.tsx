import Link from "next/link";
import type { Course } from "@/data/courses";

export default function CourseCard({ course }: { course: Course }) {
  return (
    <article className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/8">
      <div
        className="absolute inset-x-0 top-0 h-1.5"
        style={{ backgroundImage: course.gradient }}
      />

      <div
        className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl text-2xl shadow-lg"
        style={{ backgroundImage: course.gradient }}
      >
        <span>{course.icon}</span>
      </div>

      <h3 className="text-xl font-bold tracking-tight md:text-2xl">
        {course.title}
      </h3>

      <p className="mt-3 min-h-[72px] text-sm leading-7 text-slate-300 md:text-base">
        {course.description}
      </p>

      <div className="mt-6 flex items-center justify-between gap-3">
        <span className="text-xs font-medium uppercase tracking-[0.25em] text-slate-400">
          KAC Youth
        </span>

        <Link
          href={course.href}
          target="_blank"
          className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:scale-[1.03] hover:bg-cyan-100"
        >
          {course.buttonLabel}
        </Link>
      </div>
    </article>
  );
}