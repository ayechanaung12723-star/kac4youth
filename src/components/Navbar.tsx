"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-[#020617]/90 backdrop-blur-md border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 md:py-4 flex justify-between items-center">
        <Link href="/">
          <h1 className="font-bold text-lg cursor-pointer">KAC For Youth</h1>
        </Link>
        
        <div className="hidden md:flex gap-8 text-sm text-slate-300">
          <Link href="/#courses" className="hover:text-white transition-colors">
            Courses
          </Link>
          
          {/* Typing Practice Link အသစ် */}
          <Link href="/typing-practice" className="hover:text-white transition-colors font-medium text-blue-400">
            Typing Practice
          </Link>
          
          <Link href="#" className="hover:text-white transition-colors">
            AI Assistant
          </Link>
        </div>

        <button className="btn-primary text-sm px-5 py-2 hover:opacity-90 transition-opacity">
          Start
        </button>
      </div>
    </nav>
  );
}