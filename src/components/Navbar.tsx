"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-[#020617]/90 backdrop-blur-md border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 md:py-4 flex justify-between items-center">
        <h1 className="font-bold text-lg">KAC For Youth</h1>
        <div className="hidden md:flex gap-8 text-sm text-slate-300">
          <Link href="#courses">Courses</Link>
          <Link href="#">AI Assistant</Link>
        </div>
        <button className="btn-primary text-sm px-5 py-2">
          Start
        </button>
      </div>
    </nav>
  );
}