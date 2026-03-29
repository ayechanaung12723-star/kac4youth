"use client";
import { useRouter } from "next/navigation";

export default function HomeButton() {
  const router = useRouter();
  
  return (
    <button
      onClick={() => router.push("/")}
      className="absolute top-6 left-6 flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white transition-all group"
    >
      <span className="group-hover:-translate-x-1 transition-transform">←</span>
      <span className="font-medium text-sm">Home</span>
    </button>
  );
}