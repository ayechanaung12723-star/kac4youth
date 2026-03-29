import Head from 'next/head';
import TypingTest from '../components/TypingTest';

export default function TypingPractice() {
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <Head>
        <title>Typing Practice - KAC For Youth</title>
      </Head>
      
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-2">Keyboard Typing Practice</h1>
        <p className="text-center text-gray-600 mb-8">English နှင့် မြန်မာ လက်ကွက်များကို စနစ်တကျ လေ့ကျင့်ပါ။</p>
        
        <TypingTest />
        
        <div className="mt-12 max-w-2xl mx-auto text-sm text-gray-500 bg-blue-50 p-4 rounded">
          <strong>မှတ်ချက်:</strong> မြန်မာစာအတွက် Unicode (Pyidaungsu) လက်ကွက်ကို အသုံးပြုထားပါသည်။ ဖုန်းဖြင့် လေ့လာသူများသည် OTG Keyboard သုံး၍ ပိုမိုထိရောက်စွာ လေ့ကျင့်နိုင်ပါသည်။
        </div>
      </div>
    </div>
  );
}