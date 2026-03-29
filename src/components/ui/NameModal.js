"use client";
import { useState } from "react";

export default function NameModal({ onSubmit }) {
  const [name, setName] = useState("");

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[150] p-4">
      <div className="bg-[#0f172a] border border-white/10 p-8 rounded-[32px] w-full max-w-sm flex flex-col gap-6 shadow-2xl animate-in zoom-in duration-300">
        <div className="text-center">
          <h2 className="text-white text-2xl font-black mb-2">Welcome!</h2>
          <p className="text-slate-400 text-sm">ကျေးဇူးပြု၍ သင်၏အမည်ကို ရိုက်ထည့်ပါ</p>
        </div>
        
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="သင်၏ အမည်..."
          className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:border-blue-500 outline-none transition-all text-center font-bold"
          autoFocus
        />
        
        <button
          onClick={() => name.trim() && onSubmit(name.trim())}
          className="w-full bg-white text-black py-4 rounded-2xl font-bold hover:bg-slate-200 transition-all active:scale-95"
        >
          စတင်လေ့ကျင့်မည်
        </button>
      </div>
    </div>
  );
}