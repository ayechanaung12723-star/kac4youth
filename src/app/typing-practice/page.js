"use client";
import Navbar from "@/components/Navbar";
import TypingTest from "@/components/TypingTest";

export default function TypingPractice() {
  return (
    <div className="min-h-screen bg-[#020617] py-20">
      <Navbar />
      <div className="container mx-auto px-4 mt-10">
        <h1 className="text-3xl font-bold text-center mb-2 text-white">Keyboard Typing Practice</h1>
        <p className="text-center text-slate-400 mb-8">English နှင့် မြန်မာ လက်ကွက်များကို စနစ်တကျ လေ့ကျင့်ပါ။</p>
        
        <TypingTest />
        
        <div className="mt-12 max-w-2xl mx-auto text-sm text-slate-400 bg-white/5 p-4 rounded border border-white/10">
          <strong>မှတ်ချက်:</strong> မြန်မာစာအတွက် Unicode (Pyidaungsu) လက်ကွက်ကို အသုံးပြုထားပါသည်။ ဖုန်းဖြင့် လေ့လာသူများသည် OTG Keyboard သုံး၍ ပိုမိုထိရောက်စွာ လေ့ကျင့်နိုင်ပါသည်။
        </div>
      </div>
    </div>
  );
}