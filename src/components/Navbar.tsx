"use client";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaTelegram, FaYoutube } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-[#020617]/80 border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-3">

        {/* Top Row (Social) */}
        <div className="flex justify-end gap-4 text-lg mb-2 text-gray-300">
          <a href="#" className="hover:text-blue-400 transition">
            <FaFacebook />
          </a>
          <a href="#" className="hover:text-blue-400 transition">
            <FaTelegram />
          </a>
          <a href="#" className="hover:text-red-500 transition">
            <FaYoutube />
          </a>
        </div>

        {/* Main Row */}
        <div className="flex items-center justify-between">

          {/* Logo + Name */}
          <div className="flex items-center gap-4">
            <Image
              src="/images/logo.webp"
              alt="KAC Logo"
              width={80}
              height={80}
              className="w-14 md:w-20 h-auto"
            />
            <span className="font-extrabold text-xl md:text-2xl tracking-wide">
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
          </div>

          {/* CTA */}
          <button className="bg-blue-500 hover:bg-blue-600 transition px-5 py-2 rounded-xl text-sm font-semibold shadow-lg shadow-blue-500/20">
            Start Now
          </button>

        </div>
      </div>
    </nav>
  );
}