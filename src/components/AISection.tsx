"use client";

export default function AISection() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto text-center">
      
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Try KAC AI Assistant
      </h2>

      <p className="text-gray-400 mb-10">
        AI ကို အသုံးပြုပြီး မေးခွန်းတွေကို ချက်ချင်း ဖြေကြားနိုင်ပါတယ်
      </p>

      {/* Fake Chat UI */}
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-left shadow-lg">

        <div className="mb-4">
          <p className="text-sm text-gray-400">User:</p>
          <p>How can I start earning online?</p>
        </div>

        <div>
          <p className="text-sm text-blue-400">KAC AI:</p>
          <p className="text-gray-300">
            You can start with AI tools, crypto basics, and Telegram automation...
          </p>
        </div>

      </div>

    </section>
  );
}