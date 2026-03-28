"use client";

type CourseModalProps = {
  course: {
    title: string;
    description: string;
    topics: string[];
  } | null;
  isOpen: boolean;
  onClose: () => void;
};

export default function CourseModal({ course, isOpen, onClose }: CourseModalProps) {
  if (!isOpen || !course) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      
      {/* Background */}
      <div
        className="absolute inset-0 bg-black/70"
        onClick={onClose}
      />

      {/* Modal Box */}
      <div className="relative bg-[#0f172a] max-w-lg w-full p-6 rounded-2xl shadow-lg z-10">
        
        <h2 className="text-2xl font-bold mb-3">{course.title}</h2>

        <p className="text-slate-400 mb-4">{course.description}</p>

        <ul className="space-y-2 text-slate-300 max-h-64 overflow-y-auto">
          {course.topics.map((t, i) => (
            <li key={i}>✔ {t}</li>
          ))}
        </ul>

        <div className="mt-6 text-right">
          <button onClick={onClose} className="btn-primary">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}