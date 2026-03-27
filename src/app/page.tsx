const courses = [
  { title: "Computer သင်တန်း", desc: "အခြေခံမှစ၍ ကျွမ်းကျင်သည်အထိ စနစ်တကျ သင်ကြားပေးခြင်း။", color: "from-blue-500 to-cyan-400", icon: "💻" },
  { title: "Telegram သင်တန်း", desc: "Channel စီမံခန့်ခွဲမှုနှင့် Content Creation အသုံးချနည်းများ။", color: "from-sky-500 to-blue-600", icon: "📱" },
  { title: "AI သင်တန်း", desc: "ChatGPT နှင့် AI Tools များဖြင့် အလုပ်တွင်ကျယ်အောင် လုပ်ဆောင်နည်း။", color: "from-purple-500 to-indigo-600", icon: "🤖" },
  { title: "Crypto သင်တန်း", desc: "Trading ဗျူဟာများ၊ Technical Analysis နှင့် Market Insight များ။", color: "from-orange-400 to-yellow-500", icon: "💰" },
  { title: "Freelancing သင်တန်း", desc: "အွန်လိုင်းမှ ဝင်ငွေရှာနိုင်မည့် နည်းလမ်းများနှင့် Skill များ။", color: "from-emerald-400 to-teal-600", icon: "🚀" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020617] text-white selection:bg-blue-500/30">
      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent -z-10"></div>
        
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
            KAC For <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">Youth</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
            AI, Crypto နဲ့ နည်းပညာ ဗဟုသုတတွေကို တစ်နေရာတည်းမှာ <br className="hidden md:block" />
            အခမဲ့ လေ့လာနိုင်ဖို့ KAC မှ ကြိုဆိုပါတယ်။
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-2xl font-bold transition-all transform hover:scale-105 shadow-lg shadow-blue-600/25">
              သင်တန်းများ ကြည့်မည်
            </button>
            <button className="px-8 py-4 bg-slate-800/50 hover:bg-slate-700 rounded-2xl font-bold border border-slate-700 transition-all">
              Telegram Join ရန်
            </button>
          </div>
        </div>
      </section>

      {/* Courses Grid Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">တက်ရောက်နိုင်သော <span className="text-blue-500">သင်တန်းများ</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <div 
              key={index} 
              className="group relative p-8 rounded-3xl bg-slate-900/40 border border-slate-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 overflow-hidden"
            >
              {/* Card Decor Line */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${course.color}`}></div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                  {course.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{course.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-8">{course.desc}</p>
                
                <button className="flex items-center text-sm font-bold text-blue-400 group-hover:gap-2 transition-all">
                  အသေးစိတ်ကြည့်မည် <span className="opacity-0 group-hover:opacity-100 transition-all">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="py-12 text-center text-slate-500 border-t border-slate-900">
        <p>© 2026 KAC For Youth. All rights reserved.</p>
      </footer>
    </main>
  );
}