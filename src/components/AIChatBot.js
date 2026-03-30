"use client";
import { useState, useRef, useEffect } from "react";

const courseCategories = {
  "Computer သင်တန်း": `အပိုင်း - ၁: ကွန်ပျူတာစနစ်ကို နားလည်ခြင်း\nအပိုင်း - ၂: Windows နှင့် File Management\nအပိုင်း - ၃: Keyboard Shortcuts\nအပိုင်း - ၄: Internet & Web Browsing\nအပိုင်း - ၅: Microsoft Word\nအပိုင်း - ၆: Microsoft Excel\nအပိုင်း - ၇: Microsoft PowerPoint\nအပိုင်း - ၈: Graphic Design Basics\nအပိုင်း - ၉: Cyber Security & Online Safety\nအပိုင်း - ၁၀: Troubleshooting & Maintenance`,
  
  "Telegram ဝင်ငွေရှာနည်းသင်တန်း": `Telegram Bot ဖန်တီးနည်း၊ Channel Management နှင့် Automation စနစ်များ အသုံးပြုပြီး ဝင်ငွေရှာဖွေနည်း သင်ခန်းစာများ ပါဝင်ပါသည်။`,
  
  "AI သင်တန်း": `အပိုင်း (၁): AI ဆိုတာဘာလဲ?\nအပိုင်း (၂): ChatGPT/Gemini (Prompt Engineering)\nအပိုင်း (၃): AI Content Writing\nအပိုင်း (၄): AI Image Generation\nအပိုင်း (၅): AI Video Creation\nအပိုင်း (၆): AI Voice & Music\nအပိုင်း (၇): ရုံးလုပ်ငန်းသုံး AI\nအပိုင်း (၈): AI Website & App Construction\nအပိုင်း (၉): AI Ethics\nအပိုင်း (၁၀): AI ဖြင့် ငွေရှာနည်းများ`,
  
  "Crypto ဖြင့် ငွေရှာနည်းသင်တန်း": `Binance အသုံးပြုနည်း၊ Futures/Spot Trading နှင့် Crypto နည်းပညာဖြင့် စနစ်တကျ ရင်းနှီးမြှုပ်နှံနည်းများ ပါဝင်ပါသည်။`,
  
  "Freelancing အလုပ်ဖြင့် ငွေရှာနည်းသင်တန်း": `Upwork, Fiverr နှင့် အခြား Freelance platform များတွင် အလုပ်ရှာဖွေနည်းနှင့် နိုင်ငံတကာမှ ဒေါ်လာဝင်ငွေ ရှာဖွေနည်းများ ပါဝင်ပါသည်။`
};

const pricingInfo = `💰 **သင်တန်းကြေး Package များ**\n\n📦 **Package A:** သင်တန်း ၅ မျိုးမှ ကြိုက်နှစ်သက်ရာ (၁) မျိုး - ၁ သိန်းကျပ်\n📦 **Package B:** သင်တန်း ၅ မျိုးမှ ကြိုက်နှစ်သက်ရာ (၃) မျိုး - ၂ သိန်းကျပ်\n📦 **Package C:** သင်တန်း ၅ မျိုးလုံး - ၃ သိန်းကျပ်\n\n📩 အသေးစိတ်သိရှိလိုပါက Telegram **@KAC_4_Youth** သို့ ဆက်သွယ်စုံစမ်းနိုင်ပါသည်။`;

export default function AIChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "bot", text: "မင်္ဂလာပါ။ KAC For Youth မှ ကြိုဆိုပါတယ်။ ဘာများ ကူညီပေးရမလဲခင်ဗျာ?" }
  ]);
  const [view, setView] = useState("home"); // home, courses, pricing
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const goToHome = () => {
    setMessages((prev) => [...prev, { role: "user", text: "Home သို့ပြန်သွားမည်" }]);
    setView("home");
  };

  const showCourseList = () => {
    setMessages((prev) => [...prev, 
      { role: "user", text: "သင်တန်းများအကြောင်း သိလိုပါသည်" },
      { role: "bot", text: "KAC For Youth မှာ တက်ရောက်နိုင်တဲ့ သင်တန်းများမှာ အောက်ပါအတိုင်း ဖြစ်ပါသည်။ သင်စိတ်ဝင်စားတဲ့ သင်တန်းကို နှိပ်ပြီး အသေးစိတ် ကြည့်နိုင်ပါတယ်။" }
    ]);
    setView("courses");
  };

  const showPricing = () => {
    setMessages((prev) => [...prev, 
      { role: "user", text: "သင်တန်းကြေး စုံစမ်းရန်" },
      { role: "bot", text: pricingInfo }
    ]);
    setView("pricing");
  };

  const handleCourseClick = (courseName) => {
    setMessages((prev) => [...prev, 
      { role: "user", text: courseName },
      { role: "bot", text: courseCategories[courseName] },
      { role: "bot", text: "အခြားသင်တန်းများအကြောင်း အသေးစိတ် ထပ်ကြည့်မလား?" }
    ]);
    setView("courses");
  };

  return (
    <div className="fixed bottom-5 right-5 z-[100] font-sans">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-cyan-500 hover:bg-cyan-600 p-4 rounded-full shadow-2xl transition-all"
      >
        {isOpen ? "❌" : "💬"}
      </button>

      {isOpen && (
        <div className="absolute bottom-16 right-0 w-[350px] md:w-[400px] bg-[#0f172a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[550px]">
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 p-4 font-bold text-white flex justify-between items-center">
            <span>KAC Assistant</span>
            {view !== "home" && (
              <button onClick={goToHome} className="text-xs bg-white/20 px-2 py-1 rounded hover:bg-white/30">🏠 Home</button>
            )}
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-900/50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[90%] p-3 rounded-2xl text-sm whitespace-pre-wrap ${
                  m.role === "user" ? "bg-cyan-600 text-white" : "bg-slate-800 text-slate-200 shadow-lg border border-white/5"
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          <div className="p-4 border-t border-white/10 bg-[#0f172a] flex flex-col gap-2">
            {view === "home" && (
              <>
                <button onClick={showCourseList} className="bg-cyan-500 hover:bg-cyan-600 text-white py-2 rounded-xl transition-all font-bold">သင်တန်းများအကြောင်း စုံစမ်းရန်</button>
                <button onClick={showPricing} className="bg-slate-800 hover:bg-slate-700 text-white py-2 rounded-xl transition-all border border-white/10">သင်တန်းကြေး စုံစမ်းရန်</button>
              </>
            )}

            {view === "courses" && (
              <div className="grid grid-cols-1 gap-1.5">
                {Object.keys(courseCategories).map((name) => (
                  <button key={name} onClick={() => handleCourseClick(name)} className="bg-slate-800 hover:bg-cyan-500 text-white text-[11px] p-2 rounded-lg transition-all text-left border border-white/5">• {name}</button>
                ))}
                <div className="grid grid-cols-2 gap-2 mt-1">
                  <button onClick={showPricing} className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs py-2 rounded-lg font-bold">💰 သင်တန်းကြေး</button>
                  <button onClick={goToHome} className="bg-slate-700 hover:bg-slate-600 text-white text-xs py-2 rounded-lg">🔙 Back to Home</button>
                </div>
              </div>
            )}

            {view === "pricing" && (
              <div className="flex flex-col gap-2">
                <button onClick={showCourseList} className="bg-cyan-500 hover:bg-cyan-600 text-white py-2 rounded-xl text-xs font-bold">📚 သင်တန်းများ ပြန်ကြည့်ရန်</button>
                <button onClick={goToHome} className="bg-slate-700 hover:bg-slate-600 text-white py-2 rounded-xl text-xs">🏠 Home သို့ပြန်သွားမည်</button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}