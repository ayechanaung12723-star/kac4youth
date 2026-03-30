import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

// API Key ကို စစ်ဆေးပါ
const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

export async function POST(req) {
  try {
    const { message } = await req.json();

    if (!apiKey) {
      return NextResponse.json({ reply: "API Key is missing. Please check your environment variables." }, { status: 500 });
    }

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // AI ကို သင့် website အကြောင်း system instruction ပေးခြင်း
    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: "မင်္ဂလာပါ။ သင်က KAC For Youth website ရဲ့ AI Assistant ဖြစ်ပါတယ်။ လူငယ်တွေကို နည်းပညာနဲ့ ပတ်သက်တာတွေ ဖြေပေးရပါမယ်။ မြန်မာလိုပဲ အဓိက ဖြေပေးပါ။" }],
        },
        {
          role: "model",
          parts: [{ text: "ဟုတ်ကဲ့ပါ။ KAC For Youth အတွက် အကောင်းဆုံး ကူညီပေးပါ့မယ်။" }],
        },
      ],
    });

    const result = await chat.sendMessage(message);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ reply: text });
  } catch (error) {
    console.error("Gemini API Error:", error);
    return NextResponse.json({ reply: "ခဏနေမှ ပြန်မေးကြည့်ပေးပါဦး။ (API Connection Error)" }, { status: 500 });
  }
}