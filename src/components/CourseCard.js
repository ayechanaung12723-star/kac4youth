export default function CourseCard({ course }) {
  return (
    <div className="p-8 bg-slate-900 rounded-3xl border border-slate-800 hover:border-blue-500 transition-all hover:scale-105 duration-300">

      {/* Icon */}
      <div className="text-4xl mb-4">{course.icon}</div>

      {/* Title */}
      <h3 className="text-2xl font-bold mb-3">
        {course.title}
      </h3>

      {/* Description */}
      <p className="text-slate-400 mb-6">
        {course.desc}
      </p>

      {/* Button */}
      <a
        href={`/course/${course.slug}`}
        className="inline-block text-blue-400 font-bold hover:underline"
      >
        အသေးစိတ်ကြည့်မည် →
      </a>

    </div>
  );
}