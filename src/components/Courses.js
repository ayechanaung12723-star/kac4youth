const courses = [
  { title: "Computer သင်တန်း", desc: "အခြေခံမှစ၍ ကျွမ်းကျင်သည်အထိ", color: "border-blue-500" },
  { title: "Telegram သင်တန်း", desc: "Channel စီမံခန့်ခွဲမှုနှင့် အသုံးချနည်းများ", color: "border-sky-400" },
  { title: "AI သင်တန်း", desc: "ChatGPT နှင့် AI Tools များ အသုံးပြုနည်း", color: "border-purple-500" },
  { title: "Crypto သင်တန်း", desc: "Trading နှင့် Digital Asset ရင်းနှီးမြှုပ်နှံမှု", color: "border-yellow-500" },
  { title: "Freelancing သင်တန်း", desc: "အွန်လိုင်းမှ ငွေရှာနိုင်မည့် အတတ်ပညာများ", color: "border-emerald-500" },
];

export default function Courses() {
  return (
    <section className="py-20 bg-slate-950 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          KAC For Youth မှာ တက်ရောက်နိုင်သော <span className="text-blue-500">သင်တန်းများ</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div 
              key={index} 
              className={`p-8 bg-slate-900 rounded-2xl border-t-4 ${course.color} hover:transform hover:-translate-y-2 transition-all duration-300 shadow-xl`}
            >
              <h3 className="text-xl font-bold mb-3">{course.title}</h3>
              <p className="text-slate-400 mb-6">{course.desc}</p>
              <button className="text-blue-400 font-semibold hover:text-blue-300">
                အသေးစိတ်ကြည့်မည် →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}