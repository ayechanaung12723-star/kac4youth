"use client";

import { FaYoutube, FaTelegram, FaFacebook, FaTiktok } from "react-icons/fa";

const socials = [
  {
    label: "YouTube",
    href: "https://www.youtube.com/@KACForYouth",
    icon: <FaYoutube />,
    color: "hover:bg-red-500/20 hover:border-red-500/30 hover:text-red-500",
    glow: "group-hover:shadow-[0_0_20px_rgba(239,68,68,0.2)]"
  },
  {
    label: "Telegram",
    // Private Invite Link ကို Direct format အတိုင်း သေချာထည့်ပေးထားပါတယ်
    href: "https://t.me/+lWJXmj8pC7o1YWY1", 
    icon: <FaTelegram />,
    color: "hover:bg-blue-500/20 hover:border-blue-500/30 hover:text-blue-400",
    glow: "group-hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]"
  },
  {
    label: "Facebook",
    href: "https://facebook.com/KACforYouth",
    icon: <FaFacebook />,
    color: "hover:bg-blue-600/20 hover:border-blue-600/30 hover:text-blue-500",
    glow: "group-hover:shadow-[0_0_20px_rgba(37,99,235,0.2)]"
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@kacforyouth",
    icon: <FaTiktok />,
    color: "hover:bg-pink-500/20 hover:border-pink-500/30 hover:text-pink-400",
    glow: "group-hover:shadow-[0_0_20px_rgba(236,72,153,0.2)]"
  },
];

export default function SocialLinks() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
      <div className="rounded-[2.5rem] border border-white/5 bg-gradient-to-b from-white/5 to-transparent p-8 backdrop-blur-2xl md:p-12 relative overflow-hidden">
        
        {/* Background Decorative Light */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/10 blur-[80px] pointer-events-none" />

        <div className="mb-12 text-center relative">
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-blue-400/80 mb-3">
            Follow Us
          </p>
          <h3 className="text-3xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500">
            Stay connected across platforms
          </h3>
          <p className="mt-4 text-slate-400 max-w-lg mx-auto">
            ကျွန်တော်တို့ရဲ့ နောက်ဆုံးရ သင်တန်းအချက်အလက်တွေကို Social Media တွေမှာလည်း စောင့်မျှော်ကြည့်ရှုနိုင်ပါတယ်
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4 relative">
          {socials.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center gap-5 rounded-[24px] border border-white/5 bg-slate-900/40 px-6 py-5 transition-all duration-500 hover:-translate-y-2 ${item.color} ${item.glow}`}
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-2xl text-white transition-all duration-500 group-hover:scale-110 group-hover:bg-white/10">
                {item.icon}
              </span>
              <div>
                <p className="font-bold text-lg text-white group-hover:text-inherit">
                  {item.label}
                </p>
                <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">
                  Open channel
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}