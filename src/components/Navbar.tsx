"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaTelegram, FaYoutube, FaFacebook } from "react-icons/fa";

const links = [
  { label: "Courses", href: "#courses" },
  { label: "Stats", href: "#stats" },
  { label: "Join", href: "https://t.me/lWJXmj8pC7o1YWY1", external: true },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="border-b border-white/10 bg-[#020617]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <Link href="/" className="group flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/8 text-sm font-black tracking-wide shadow-lg shadow-cyan-950/20">
              KAC
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold text-white md:text-base">
                KAC For Youth
              </p>
              <p className="text-xs text-slate-400">
                Learn • Build • Grow
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {links.map((item) =>
              item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-slate-300 transition hover:text-white"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-slate-300 transition hover:text-white"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="https://www.facebook.com/KACforYouth"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-300 transition hover:text-blue-400"
            >
              <FaFacebook />
            </a>
            <a
              href="https://t.me/lWJXmj8pC7o1YWY1"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-300 transition hover:text-cyan-300"
            >
              <FaTelegram />
            </a>
            <a
              href="https://www.youtube.com/@KACForYouth"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-300 transition hover:text-red-400"
            >
              <FaYoutube />
            </a>

            <Link
              href="https://t.me/lWJXmj8pC7o1YWY1"
              target="_blank"
              className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:scale-[1.02] hover:bg-cyan-100"
            >
              Start Now
            </Link>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {open && (
          <div className="border-t border-white/10 bg-[#020617]/95 px-6 py-5 md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-4">
              {links.map((item) =>
                item.external ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setOpen(false)}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-slate-200"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-slate-200"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}