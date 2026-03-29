import { useState, useEffect } from 'react';
import { typingLessons } from '../data/typingContent';

export default function TypingTest() {
  const [language, setLanguage] = useState('english');
  const [lessonIndex, setLessonIndex] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [wpm, setWpm] = useState(0);

  const targetText = typingLessons[language][lessonIndex];

  useEffect(() => {
    if (userInput.length === 1 && !startTime) {
      setStartTime(Date.now());
    }
    if (userInput === targetText) {
      calculateWPM();
    }
  }, [userInput, targetText, startTime]);

  const calculateWPM = () => {
    const timeElapsed = (Date.now() - startTime) / 60000; // in minutes
    const words = targetText.split(' ').length;
    setWpm(Math.round(words / timeElapsed));
  };

  const resetTest = (lang) => {
    setLanguage(lang);
    setUserInput("");
    setStartTime(null);
    setWpm(0);
    setLessonIndex(Math.floor(Math.random() * typingLessons[lang].length));
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-[#0f172a] rounded-2xl shadow-2xl border border-white/10 mt-10">
      {/* Language Selection Buttons */}
      <div className="flex gap-4 mb-8 justify-center">
        <button 
          onClick={() => resetTest('english')} 
          className={`px-6 py-2 rounded-full font-medium transition-all ${language === 'english' ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}
        >
          English
        </button>
        <button 
          onClick={() => resetTest('myanmar')} 
          className={`px-6 py-2 rounded-full font-medium transition-all ${language === 'myanmar' ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/30' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}
        >
          မြန်မာ (Unicode)
        </button>
      </div>

      {/* Target Text Display Area */}
      <div className="mb-8 p-6 bg-slate-900/50 rounded-xl border border-white/5 text-2xl leading-relaxed select-none min-h-[120px] flex flex-wrap gap-x-1 content-center">
        {targetText.split('').map((char, index) => {
          let color = "text-slate-500"; // မရိုက်ရသေးသော စာလုံး (မှိန်မှိန်)
          if (index < userInput.length) {
            color = userInput[index] === char ? "text-emerald-400" : "text-rose-500 bg-rose-500/10 rounded";
          }
          return (
            <span key={index} className={`${color} transition-colors duration-150`}>
              {char}
            </span>
          );
        })}
      </div>

      {/* Typing Input Area */}
      <textarea
        className="w-full bg-slate-900 border-2 border-white/10 p-5 rounded-xl focus:outline-none focus:border-blue-500 text-xl text-white placeholder-slate-600 transition-all shadow-inner"
        rows="3"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="ဒီမှာ စတင်ရိုက်နှိပ်ပါ..."
        spellCheck="false"
      />

      {/* Results / Feedback Area */}
      {userInput === targetText && (
        <div className="mt-8 text-center p-6 bg-blue-500/10 rounded-xl border border-blue-500/20 animate-in fade-in zoom-in duration-300">
          <p className="text-3xl font-bold text-emerald-400 mb-2">ဂုဏ်ယူပါတယ်! 🎉</p>
          <div className="flex justify-center gap-8 items-center mt-4">
            <div className="text-center">
              <p className="text-slate-400 text-sm uppercase">Speed</p>
              <p className="text-2xl font-mono font-bold text-white">{wpm} WPM</p>
            </div>
            <button 
              onClick={() => resetTest(language)} 
              className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-2 rounded-full font-bold transition-all transform hover:scale-105 active:scale-95"
            >
              နောက်တစ်ခု စမ်းမယ်
            </button>
          </div>
        </div>
      )}
    </div>
  );
}