"use client";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex items-center p-6 bg-slate-900">

      <Image
        src="/images/logo.webp"
        alt="KAC Logo"
        width={0}
        height={0}
        sizes="100vw"
        className="h-12 w-auto"
      />

      <span className="ml-3 font-bold text-xl">
        KAC For Youth
      </span>

    </nav>
  );
}

