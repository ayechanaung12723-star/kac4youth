export default function CourseCard({ course }: any) {
  return (
    <div className={`p-8 rounded-3xl border border-slate-800 bg-slate-900 hover:border-blue-500 transform transition hover:-translate-y-2 hover:shadow-lg`}>
      <div className="text-4xl mb-4">{course.icon}</div>
      <h3 className="text-2xl font-bold mb-3">{course.title}</h3>
      <p className="text-slate-400 mb-6">{course.desc}</p>
      <a href="https://t.me/lWJXmj8pC7o1YWY1" className="text-blue-400 font-bold hover:underline">Enroll Now →</a>
    </div>
  );
}