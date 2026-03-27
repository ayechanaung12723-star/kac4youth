export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-48">
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
          KAC For <span className="text-blue-500">Youth</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-10">
          AI, Crypto နဲ့ နည်းပညာ ဗဟုသုတတွေကို တစ်နေရာတည်းမှာ အခမဲ့ လေ့လာနိုင်ဖို့ 
          KAC မှ ကြိုဆိုပါတယ်။
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-blue-500/20">
            သင်တန်းများ ကြည့်မည်
          </button>
          <button className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold border border-slate-700 transition-all">
            Telegram Join ရန်
          </button>
        </div>
      </div>
      
      {/* Background အလှဆင်တဲ့ အလင်းစက် (Blur Effect) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[20%] w-[300px] h-[300px] bg-blue-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] right-[20%] w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[120px]"></div>
      </div>
    </section>
  );
}