import Image from "next/image";

export default function CourseCard({ course, onClick, isSelected }: any) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all duration-200 ${
        isSelected ? "bg-white text-black" : "bg-[#1e293b]"
      }`}
    >
      <Image src={course.icon} alt="" width={50} height={50} />
      <div>
        <h3 className="font-semibold">{course.title}</h3>
        <p className="text-sm text-slate-400">{course.description}</p>
      </div>
    </div>
  );
}