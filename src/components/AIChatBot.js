"use client";
import { useState, useRef, useEffect } from "react";

const courseData = {
  "သင်တန်းများ": "KAC For Youth မှာ Computer သင်တန်း, AI သင်တန်း, Crypto သင်တန်း, Telegram Automation နဲ့ Freelancing သင်တန်းတွေ ရှိပါတယ်ခင်ဗျာ။",
  "သင်တန်းကြေး": "သင်တန်းအလိုက် သင်တန်းကြေးတွေ ကွာခြားမှုရှိပါတယ်။ အသေးစိတ်ကိုတော့ Messenger မှာ ထပ်မံစုံစမ်းနိုင်ပါတယ်ခင်ဗျာ။",
  "တက်ရောက်ရန်": "သင်တန်းတွေကို Online ကနေ တိုက်ရိုက်တက်ရောက်နိုင်အောင် စီစဉ်ပေးထားပါတယ်ခင်ဗျာ။",
  "ဆက်သွယ်ရန်": "ဖုန်း - 09-668014456 သို့မဟုတ် Telegram @KAC_4_Youth ကို ဆက်သွယ်နိုင်ပါတယ်ခင်ဗျာ။"
};

export default function AIChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "bot", text: "မင်္ဂလာပါ။ KAC For Youth က ကြိုဆိုပါတယ်။ ဘာများ ကူညီပေးရမလဲခင်ဗျာ?" }
  ]);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleOptionClick = (key) => {
    const userMsg = { role: "user", text: key };
    const botMsg = { role: "bot", text: courseData[key] };
    
    setMessages((prev) => [...prev, userMsg]);
    
    // AI အဖြေပေးသလို ခဏစောင့်ပြီးမှ ပြပေးရန်
    setTimeout(() => {
      setMessages((prev) => [...prev, botMsg]);
    }, 500);
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
        <div className="absolute bottom-16 right-0 w-[350px] md:w-[400px] bg-[#0f172a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[500px]">
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 p-4 font-bold text-white flex justify-between items-center">
            <span>KAC Assistant (Auto-Reply)</span>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-900/50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                  m.role === "user" ? "bg-cyan-600 text-white" : "bg-slate-800 text-slate-200"
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          {/* မေးခွန်း ခလုတ်လေးများ */}
          <div className="p-4 border-t border-white/10 bg-[#0f172a] flex flex-wrap gap-2">
            {Object.keys(courseData).map((key) => (
              <button
                key={key}
                onClick={() => handleOptionClick(key)}
                className="bg-white/10 hover:bg-cyan-500 text-white text-xs px-3 py-2 rounded-lg transition-colors border border-white/10"
              >
                {key}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}