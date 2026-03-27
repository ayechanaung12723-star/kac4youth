"use client";

import { FaYoutube, FaTelegram, FaFacebook, FaTiktok } from "react-icons/fa";

const socials = [
  {
    label: "YouTube",
    href: "https://www.youtube.com/@KACForYouth",
    icon: <FaYoutube />,
  },
  {
    label: "Telegram",
    href: "https://t.me/lWJXmj8pC7o1YWY1",
    icon: <FaTelegram />,
  },
  {
    label: "Facebook",
    href: "https://facebook.com/KACforYouth",
    icon: <FaFacebook />,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@kacforyouth",
    icon: <FaTiktok />,
  },
];

export default function SocialLinks() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10 md:px-10 md:py-16">
      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:p-8">
        <div className="mb-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300/80">
            Follow Us
          </p>
          <h3 className="mt-2 text-2xl font-bold md:text-3xl">
            Stay connected across platforms
          </h3>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {socials.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-950/40 px-5 py-4 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/8"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-xl text-white transition group-hover:bg-cyan-400 group-hover:text-slate-950">
                {item.icon}
              </span>
              <div>
                <p className="font-semibold text-white">{item.label}</p>
                <p className="text-sm text-slate-400">Open channel</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}