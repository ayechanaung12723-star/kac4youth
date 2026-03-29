// src/data/typingData.js

export const typingLessons = {
  english: Array.from({ length: 50 }, (_, i) => {
    const texts = [
      "The quick brown fox jumps over the lazy dog.",
      "Practice makes perfect in every typing journey.",
      "Next.js is a powerful framework for modern web.",
      "Consistency is the key to mastering any skill.",
      "Success is a journey, not a destination."
    ];
    // စာသား ၅၀ ပြည့်အောင် ပတ်ပြီး ထည့်ပေးထားခြင်း
    return `Lesson ${i + 1}: ${texts[i % texts.length]}`;
  }),
  
  myanmar: Array.from({ length: 50 }, (_, i) => {
    const texts = [
      "မင်္ဂလာပါ၊ မြန်မာစာရိုက်လေ့ကျင့်ခန်းမှ ကြိုဆိုပါသည်။",
      "မြန်မာစာသည် ကျွန်ုပ်တို့၏ မိခင်ဘာသာစကား ဖြစ်ပါသည်။",
      "နည်းပညာသည် လူသားတို့၏ ဘဝကို ပိုမိုကောင်းမွန်စေပါသည်။",
      "ကြိုးစားအားထုတ်မှုသည် အောင်မြင်ခြင်း၏ သော့ချက်ဖြစ်ပါသည်။",
      "မြန်မာလက်ကွက်ကို ကျွမ်းကျင်စွာ ရိုက်နိုင်အောင် လေ့ကျင့်ပါ။"
    ];
    return `သင်ခန်းစာ ${i + 1}: ${texts[i % texts.length]}`;
  })
};

export const randomNames = ["Aung Paing", "Kyaw Thet", "Wai Lin Aung", "Su Lay", "Hein Htet Aung"];