import Image from "next/image";

export default function CourseCard({ course }: any) {
  return (
    <div className="bg-[#0f172a] p-6 rounded-2xl soft-shadow hover-up">

      {/* ICON */}
      <div className="mb-4">
        <Image
          src={course.icon}
          alt={course.title}
          width={60}
          height={60}
          className="w-14 h-14"
        />
      </div>

      {/* TITLE */}
      <h3 className="text-xl font-semibold mb-2">
        {course.title}
      </h3>

      {/* DESCRIPTION */}
      <p className="text-slate-400 mb-4">
        {course.description}
      </p>

      {/* TOPICS */}
      <ul className="text-sm text-slate-300 mb-6 space-y-1">
        {course.topics.map((t: string, i: number) => (
          <li key={i}>✔ {t}</li>
        ))}
      </ul>

      {/* BUTTON */}
      <button className="btn-primary text-sm">
        Join Course
      </button>

    </div>
  );
}