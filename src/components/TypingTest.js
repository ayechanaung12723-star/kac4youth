import { useState, useEffect } from 'react';
import { typingLessons } from '../data/typingContent';

export default function TypingTest() {
  const [language, setLanguage] = useState('english');
  const [lessonIndex, setLessonIndex] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [wpm, setWpm] = useState(0);

  const targetText = typingLessons[language][lessonIndex];

  // မြန်မာစာလုံးဆင့်များကို မခွဲဘဲ စာကြောင်းလိုက် ပြသရန် function
  const renderText = () => {
    if (language === 'myanmar') {
      return <span className="text-emerald-400">{targetText}</span>;
    }
    return targetText.split('').map((char, index) => {
      let color = "text-slate-500";
      if (index < userInput.length) {
        color = userInput[index] === char ? "text-emerald-400" : "text-rose-500 bg-rose-500/10";
      }
      return <span key={index} className={color}>{char}</span>;
    });
  };

  const resetTest = (lang) => {
    setLanguage(lang);
    setUserInput("");
    setStartTime(null);
    setWpm(0);
    setLessonIndex(Math.floor(Math.random() * typingLessons[lang].length));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-[#0f172a] rounded-2xl border border-white/10">
      <div className="flex gap-4 mb-6 justify-center">
        <button onClick={() => resetTest('english')} className={`px-6 py-2 rounded-full ${language === 'english' ? 'bg-blue-600' : 'bg-slate-800'}`}>English</button>
        <button onClick={() => resetTest('myanmar')} className={`px-6 py-2 rounded-full ${language === 'myanmar' ? 'bg-emerald-600' : 'bg-slate-800'}`}>မြန်မာ</button>
      </div>

      {/* Target Text Area */}
      <div className="mb-6 p-6 bg-slate-900 rounded-xl text-2xl leading-relaxed min-h-[100px] border border-white/5">
        {renderText()}
      </div>

      <textarea
        className="w-full bg-slate-800 border-2 border-white/10 p-4 rounded-xl text-white text-xl focus:border-blue-500 outline-none"
        rows="3"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="ရိုက်နှိပ်ပြီး လေ့ကျင့်ပါ..."
      />

      {/* Keyboard Layout Image Display */}
      <div className="mt-10">
        <p className="text-slate-400 text-sm mb-4 text-center">လက်ကွက်လမ်းညွှန်ပုံစံ</p>
        <div className="rounded-xl overflow-hidden border border-white/10 opacity-80 hover:opacity-100 transition-opacity">
           {language === 'english' ? (
             <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Qwerty.svg/1200px-Qwerty.svg.png" alt="English Keyboard" />
           ) : (
             <img src="https://kac-assets-placeholder.com/myanmar-keyboard.png" alt="Myanmar Keyboard" /> 
           )}
        </div>
      </div>
    </div>
  );
}