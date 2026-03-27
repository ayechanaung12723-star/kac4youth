"use client";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaTelegram, FaYoutube } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50">

      {/* SOCIAL BAR */}
      <div className="bg-black/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-2 flex justify-center gap-10 text-2xl md:text-3xl">
          <a href="#" className="hover:text-blue-500 transition">
            <FaFacebook />
          </a>
          <a href="#" className="hover:text-blue-400 transition">
            <FaTelegram />
          </a>
          <a href="#" className="hover:text-red-500 transition">
            <FaYoutube />
          </a>
        </div>
      </div>

      {/* MAIN NAV */}
      <div className="backdrop-blur bg-[#020617]/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between">

          {/* LOGO BIG */}
          <div className="flex items-center gap-4">
            <Image
              src="/images/logo.webp"
              alt="KAC Logo"
              width={160}
              height={160}
              className="w-24 md:w-32 h-auto"
            />
            <span className="font-extrabold text-2xl md:text-3xl">
              KAC For Youth
            </span>
          </div>

          {/* MENU */}
          <div className="hidden md:flex gap-8 text-base">
            <Link href="#courses" className="hover:text-blue-400 transition">
              Courses
            </Link>
            <Link href="#" className="hover:text-blue-400 transition">
              AI Assistant
            </Link>
          </div>

          {/* CTA */}
          <button className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-xl font-semibold">
            Start
          </button>

        </div>
      </div>
    </nav>
  );
}