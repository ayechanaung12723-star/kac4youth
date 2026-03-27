export default function Hero() {
  return (
    <section className="py-28 text-center bg-gradient-to-b from-slate-900 to-[#020617]">

      <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text">
        KAC For Youth
      </h1>

      <p className="max-w-2xl mx-auto text-lg text-slate-400 mb-10">
        AI, Crypto, Freelancing skills တွေနဲ့ Online Income ရနိုင်အောင် သင်ကြားပေးနေတဲ့ Platform
      </p>

      <div className="flex justify-center gap-4 flex-wrap">

        <a
          href="https://t.me/lWJXmj8pC7o1YWY1"
          target="_blank"
          className="px-8 py-3 bg-blue-600 hover:bg-blue-500 rounded-full font-bold shadow-lg shadow-blue-500/30"
        >
          🚀 Telegram Join Now
        </a>

        <a
          href="https://www.youtube.com/@KACForYouth"
          target="_blank"
          className="px-8 py-3 bg-slate-800 border border-slate-700 rounded-full font-bold"
        >
          ▶️ Watch Free Lessons
        </a>

      </div>
    </section>
  );
}