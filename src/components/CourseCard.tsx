export default function CourseCard({ course }: any) {
  return (
    <div className="bg-[#0f172a] p-6 rounded-2xl soft-shadow hover-up">

      <h3 className="text-xl font-semibold mb-3">{course.title}</h3>

      <p className="text-slate-400 mb-5">
        {course.description}
      </p>

      <button className="btn-primary text-sm">
        Learn More
      </button>

    </div>
  );
}