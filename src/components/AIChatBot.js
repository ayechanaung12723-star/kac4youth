"use client";
import { useState, useRef, useEffect } from "react";

const courseCategories = {
  "Computer သင်တန်း": `အပိုင်း - ၁: ကွန်ပျူတာစနစ်ကို နားလည်ခြင်း\nအပိုင်း - ၂: Windows နှင့် File Management\nအပိုင်း - ၃: Keyboard Shortcuts\nအပိုင်း - ၄: Internet & Web Browsing\nအပိုင်း - ၅: Microsoft Word\nအပိုင်း - ၆: Microsoft Excel\nအပိုင်း - ၇: Microsoft PowerPoint\nအပိုင်း - ၈: Adobe Photoshop အခြေခံ\nအပိုင်း - ၉: Cyber Security & Online Safety\nအပိုင်း - ၁၀: Troubleshooting & Maintenance`,
  
  "Telegram ဝင်ငွေရှာနည်းသင်တန်း": `Telegram Bot ဖန်တီးနည်း၊ Channel Management နှင့် Automation စနစ်များ အသုံးပြုပြီး ဝင်ငွေရှာဖွေနည်း သင်ခန်းစာများ ပါဝင်ပါသည်။`,
  
  "AI သင်တန်း": `အပိုင်း - ၁: AI ဆိုတာဘာလဲ?\nအပိုင်း - ၂: Prompt Engineering\nအပိုင်း - ၃: AI Content Writing\nအပိုင်း - ၄: AI Image Generation\nအပိုင်း - ၅: AI Video Creation\nအပိုင်း - ၆: AI Voice & Music\nအပိုင်း - ၇: လုပ်ငန်းတွင် AI အသုံးချနည်း\nအပိုင်း - ၈: AI ဖြင့် Web & App လုပ်နည်း\nအပိုင်း - ၉: AI ရဲ့ ကျင့်ဝတ်\nအပိုင်း - ၁၀: AI ဖြင့် ငွေရှာနည်းများ`,
  
  "Crypto ဖြင့် ငွေရှာနည်းသင်တန်း": `အပိုင်း - ၁: Cryptocurrency အခြေခံ\nအပိုင်း - ၂: Crypto Wallet များအကြောင်း\nအပိုင်း - ၃: Binance နှင့် Exchange များအသုံးပြုနည်း\nအပိုင်း - ၄: Market Analysis\nအပိုင်း - ၅: Spot Trading နှင့် Investment\nအပိုင်း - ၆: Futures Trading နှင့် Leverage\nအပိုင်း - ၇: Trading Bots နှင့် Automation\nအပိုင်း - ၈: DeFi နှင့် Token များ\nအပိုင်း - ၉: Risk Management\nအပိုင်း - ၁၀: Crypto ဖြင့် ရေရှည်ဝင်ငွေရှာခြင်း`,
  
  "Freelancing အလုပ်ဖြင့် ငွေရှာနည်းသင်တန်း": `အပိုင်း - ၁: Freelancing အခြေခံ\nအပိုင်း - ၂: မိမိ Skill ကို ဝန်ဆောင်မှုအဖြစ်ပြောင်းလဲခြင်း\nအပိုင်း - ၃: Facebook Marketing\nအပိုင်း - ၄: LinkedIn - Branding & Networking\nအပိုင်း - ၅: TikTok & YouTube (Video Marketing နဲ့အလုပ်ရှာခြင်း)\nအပိုင်း - ၆: Portfolio ပြုစုနည်း\nအပိုင်း - ၇: Client နဲ့ ဆက်သွယ်ပြောဆိုခြင်း\nအပိုင်း - ၈: Project စီမံခန့်ခွဲခြင်း\nအပိုင်း - ၉: ငွေပေးချေမှုနှင့် ဝင်ငွေထုတ်ယူခြင်း\nအပိုင်း - ၁၀: ရေရှည်ရပ်တည်နိုင်ရန် လျှို့ဝှက်ချက်များ`,
};

const pricingInfo = `💰 **သင်တန်းကြေး Package များ**\n\n📦 **Package A:**\n သင်တန်း ၅ မျိုးမှ (၁) မျိုး - ၁ သိန်းကျပ်\n📦 **Package B:**\n သင်တန်း ၅ မျိုးမှ (၃) မျိုး - ၂ သိန်းကျပ်\n📦 **Package C:**\n သင်တန်း ၅ မျိုးလုံး - ၃ သိန်းကျပ်\n\n📩 အောက်ပါခလုတ်ကိုနှိပ်ပြီး Telegram တွင် တိုက်ရိုက်အပ်နှံနိုင်ပါသည်။`;

export default function AIChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "bot", text: "မင်္ဂလာပါ။ KAC For Youth မှ ကြိုဆိုပါတယ်။ ဘာများ ကူညီပေးရမလဲခင်ဗျာ?" }
  ]);
  const [view, setView] = useState("home"); 
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
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 p-4 font-bold text-white flex justify-between items-center shadow-lg">
            <span>KAC Assistant</span>
            {view !== "home" && (
              <button onClick={goToHome} className="text-xs bg-white/20 px-2 py-1 rounded hover:bg-white/30 transition-colors">🏠 Home</button>
            )}
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-900/50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[90%] p-3 rounded-2xl text-sm whitespace-pre-wrap ${
                  m.role === "user" ? "bg-cyan-600 text-white" : "bg-slate-800 text-slate-200 border border-white/5 shadow-md"
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
                <button onClick={showCourseList} className="bg-cyan-500 hover:bg-cyan-600 text-white py-2.5 rounded-xl transition-all font-bold shadow-lg">📚 သင်တန်းများ စုံစမ်းရန်</button>
                <button onClick={showPricing} className="bg-slate-800 hover:bg-slate-700 text-white py-2.5 rounded-xl transition-all border border-white/10 font-medium">💰 သင်တန်းကြေး စုံစမ်းရန်</button>
              </>
            )}

            {view === "courses" && (
              <div className="grid grid-cols-1 gap-1.5">
                {Object.keys(courseCategories).map((name) => (
                  <button key={name} onClick={() => handleCourseClick(name)} className="bg-slate-800 hover:bg-cyan-500 text-white text-[11px] p-2 rounded-lg transition-all text-left border border-white/5">• {name}</button>
                ))}
                <div className="grid grid-cols-2 gap-2 mt-1">
                  <button onClick={showPricing} className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs py-2 rounded-lg font-bold transition-colors">💰 သင်တန်းကြေး</button>
                  <button onClick={goToHome} className="bg-slate-700 hover:bg-slate-600 text-white text-xs py-2 rounded-lg transition-colors">🔙 Back to Home</button>
                </div>
              </div>
            )}

            {view === "pricing" && (
              <div className="flex flex-col gap-2">
                <a 
                  href="https://t.me/KAC4YouthBot" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2.5 rounded-xl text-sm font-bold text-center transition-all shadow-lg animate-pulse"
                >
                  🚀 သင်တန်းအပ်ရန် (Telegram)
                </a>
                <button onClick={showCourseList} className="bg-cyan-600 hover:bg-cyan-700 text-white py-2 rounded-xl text-xs font-medium">📚 သင်တန်းများ ပြန်ကြည့်ရန်</button>
                <button onClick={goToHome} className="bg-slate-700 hover:bg-slate-600 text-white py-2 rounded-xl text-xs">🏠 Home သို့ပြန်သွားမည်</button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}