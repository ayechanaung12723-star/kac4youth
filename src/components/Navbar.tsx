"use client";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-[#020617]/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-4">
        
        {/* Logo + Name */}
        <div className="flex items-center gap-3">
          <Image
            src="/images/logo.webp"
            alt="KAC Logo"
            width={48}
            height={48}
            className="w-10 md:w-12 h-auto"
          />
          <span className="font-bold text-lg md:text-xl">
            KAC For Youth
          </span>
        </div>

        {/* Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          <Link href="#courses" className="hover:text-blue-400 transition">
            Courses
          </Link>
          <Link href="#" className="hover:text-blue-400 transition">
            AI Assistant
          </Link>
          <Link href="#" className="hover:text-blue-400 transition">
            Contact
          </Link>
        </div>

        {/* CTA */}
        <button className="bg-blue-500 hover:bg-blue-600 transition px-4 py-2 rounded-lg text-sm font-semibold">
          Start Now
        </button>
      </div>
    </nav>
  );
}