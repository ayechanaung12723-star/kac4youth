export default function Hero() {
  return (
    <section className="py-24 text-center bg-gradient-to-b from-slate-900 to-[#020617]">
      <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
        KAC For Youth
      </h1>

      <p className="max-w-2xl mx-auto text-lg text-slate-400 mb-10">
        AI, Crypto နဲ့ နည်းပညာ ဗဟုသုတတွေကို တစ်နေရာတည်းမှာ လေ့လာနိုင်ပါတယ်။
      </p>

      <div className="flex justify-center gap-4">
        <a href="#courses" className="px-8 py-3 bg-blue-600 hover:bg-blue-500 rounded-full font-bold shadow-lg shadow-blue-500/20">
          သင်တန်းများ ကြည့်မည်
        </a>

        <a href="https://t.me/lWJXmj8pC7o1YWY1" target="_blank" className="px-8 py-3 bg-slate-800 rounded-full font-bold border border-slate-700">
          Telegram Join
        </a>
      </div>
    </section>
  );
}