"use client";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaTelegram, FaYoutube } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="bg-black/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-2 flex justify-center gap-12 text-3xl md:text-4xl">
          <a href="#" className="hover:text-blue-500 transition"> <FaFacebook /> </a>
          <a href="#" className="hover:text-blue-400 transition"> <FaTelegram /> </a>
          <a href="#" className="hover:text-red-500 transition"> <FaYoutube /> </a>
        </div>
      </div>
      <div className="backdrop-blur bg-[#020617]/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image
              src="/images/logo.webp"
              alt="KAC Logo"
              width={400}
              height={400}
              className="w-36 md:w-44 h-auto"
            />
            <span className="font-extrabold text-3xl md:text-5xl">KAC For Youth</span>
          </div>
          <div className="hidden md:flex gap-8 text-base md:text-lg">
            <Link href="#courses" className="hover:text-blue-400 hover:underline transition-all duration-200">Courses</Link>
            <Link href="#" className="hover:text-blue-400 hover:underline transition-all duration-200">AI Assistant</Link>
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-xl font-semibold shadow-lg text-lg transition-transform transform hover:-translate-y-1">
            Start
          </button>
        </div>
      </div>
    </nav>
  );
}