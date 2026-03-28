"use client";

export default function CourseModal({ course, isOpen, onClose }: any) {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0,0,0,0.8)",
        zIndex: 9999,
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "#0f172a",
          padding: 20,
          margin: "100px auto",
          width: "400px",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2>{course?.title}</h2>

        <ul>
          {course?.topics?.map((t: string, i: number) => (
            <li key={i}>{t}</li>
          ))}
        </ul>

        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}