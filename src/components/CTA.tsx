import Link from "next/link";

export default function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10 md:px-10 md:py-16">
      <div className="relative overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-500/20 via-blue-500/15 to-indigo-500/20 px-6 py-12 text-center shadow-[0_20px_100px_rgba(8,145,178,0.15)] md:px-10 md:py-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_45%)]" />
        <div className="relative mx-auto max-w-3xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.4em] text-cyan-100/80">
            Community
          </p>
          <h2 className="text-3xl font-black tracking-tight md:text-5xl">
            Ready to build your future?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-200 md:text-base">
            Telegram မှာ join ပြီး KAC For Youth နဲ့အတူ skills တည်ဆောက်ပါ။
            Learning ကို simple, modern, practical ဖြစ်အောင် တည်ဆောက်ထားပါတယ်။
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="https://t.me/lWJXmj8pC7o1YWY1"
              target="_blank"
              className="inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02] hover:bg-cyan-100 sm:w-auto sm:px-8"
            >
              Join Telegram
            </Link>
            <Link
              href="#courses"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.02] hover:bg-white/10 sm:w-auto sm:px-8"
            >
              View Courses
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}