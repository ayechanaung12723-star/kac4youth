const courses = [
  { title: "Computer သင်တန်း", desc: "အခြေခံမှစ၍ ကျွမ်းကျင်သည်အထိ စနစ်တကျ သင်ကြားပေးခြင်း။", color: "from-blue-500 to-cyan-400", icon: "💻" },
  { title: "Telegram သင်တန်း", desc: "Channel စီမံခန့်ခွဲမှုနှင့် Content Creation အသုံးချနည်းများ။", color: "from-sky-500 to-blue-600", icon: "📱" },
  { title: "AI သင်တန်း", desc: "ChatGPT နှင့် AI Tools များဖြင့် အလုပ်တွင်ကျယ်အောင် လုပ်ဆောင်နည်း။", color: "from-purple-500 to-indigo-600", icon: "🤖" },
  { title: "Crypto သင်တန်း", desc: "Trading ဗျူဟာများ၊ Technical Analysis နှင့် Market Insight များ။", color: "from-orange-400 to-yellow-500", icon: "💰" },
  { title: "Freelancing သင်တန်း", desc: "အွန်လိုင်းမှ ဝင်ငွေရှာနိုင်မည့် နည်းလမ်းများနှင့် Skill များ။", color: "from-emerald-400 to-teal-600", icon: "🚀" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020617] text-white">
      {/* Hero Section */}
      <section className="py-24 px-6 text-center bg-gradient-to-b from-slate-900 to-[#020617]">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
          KAC For Youth
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-slate-400 mb-10">
          AI, Crypto နဲ့ နည်းပညာ ဗဟုသုတတွေကို တစ်နေရာတည်းမှာ အခမဲ့ လေ့လာနိုင်ဖို့ KAC မှ ကြိုဆိုပါတယ်။
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-500 rounded-full font-bold">သင်တန်းများ ကြည့်မည်</button>
          <button className="px-8 py-3 bg-slate-800 rounded-full font-bold border border-slate-700">Telegram Join ရန်</button>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16">တက်ရောက်နိုင်သော သင်တန်းများ</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, i) => (
            <div key={i} className="p-8 bg-slate-900 rounded-3xl border border-slate-800 hover:border-blue-500 transition-all">
              <div className="text-4xl mb-4">{course.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{course.title}</h3>
              <p className="text-slate-400 mb-6">{course.desc}</p>
              <button className="text-blue-400 font-bold">အသေးစိတ်ကြည့်မည် →</button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}