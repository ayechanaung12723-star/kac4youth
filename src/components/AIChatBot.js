"use client";
import { useState, useRef, useEffect } from "react";

export default function AIChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  // စာအသစ်ရောက်တိုင်း အောက်ဆုံးကို scroll ဆင်းပေးရန်
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    
    const userMsg = { role: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    const currentInput = input;
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: currentInput }),
      });
      
      const data = await res.json();
      const botMsg = { role: "bot", text: data.reply || data.error };
      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      setMessages((prev) => [...prev, { role: "bot", text: "Error: ဆာဗာနဲ့ ချိတ်ဆက်လို့မရပါဘူး။" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-[100] font-sans">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-cyan-500 hover:bg-cyan-600 p-4 rounded-full shadow-2xl transition-all transform hover:scale-110 active:scale-90"
      >
        {isOpen ? "❌" : "💬"}
      </button>

      {isOpen && (
        <div className="absolute bottom-16 right-0 w-[350px] md:w-[400px] bg-[#0f172a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[500px] animate-in slide-in-from-bottom-5 duration-300">
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 p-4 font-bold text-white flex justify-between items-center">
            <span>KAC AI Assistant</span>
            <span className="text-xs bg-white/20 px-2 py-1 rounded">Online</span>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-900/50">
            {messages.length === 0 && (
              <div className="text-center text-slate-500 text-sm mt-10">
                မင်္ဂလာပါ။ KAC For Youth က ကြိုဆိုပါတယ်။ ဘာများ ကူညီပေးရမလဲခင်ဗျာ?
              </div>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                  m.role === "user" 
                  ? "bg-cyan-600 text-white rounded-tr-none" 
                  : "bg-slate-800 text-slate-200 rounded-tl-none border border-white/5"
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-slate-800 text-slate-400 p-3 rounded-2xl rounded-tl-none text-xs animate-pulse">
                  Thinking...
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          <div className="p-4 border-t border-white/10 bg-[#0f172a] flex gap-2">
            <input 
              className="flex-1 bg-slate-800 border border-white/5 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="မေးခွန်းများ မေးမြန်းနိုင်ပါသည်..."
            />
            <button 
              onClick={sendMessage} 
              className="bg-cyan-500 hover:bg-cyan-600 p-2 rounded-xl transition-colors"
              disabled={loading}
            >
              🚀
            </button>
          </div>
        </div>
      )}
    </div>
  );
}