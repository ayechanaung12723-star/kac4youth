import Image from "next/image";

export default function CourseCard({ course, onClick }: any) {
  return (
    <div
      onClick={onClick}
      className="bg-[#0f172a] p-6 rounded-2xl cursor-pointer"
    >
      <Image src={course.icon} alt="" width={60} height={60} />

      <h3>{course.title}</h3>
      <p>{course.description}</p>

      <button className="btn-primary">View</button>
    </div>
  );
}