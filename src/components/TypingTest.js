"use client";
import { useState, useEffect } from 'react';
import { typingLessons } from '../data/typingContent';

export default function TypingTest() {
  const [mode, setMode] = useState('english');
  const [lessonIndex, setLessonIndex] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [wpm, setWpm] = useState(0);

  // Lesson data ကို ဘာသာစကားအလိုက် ယူခြင်း
  const lessonData = mode === 'english' ? typingLessons.english : typingLessons.myanmar;
  const targetText = lessonData[lessonIndex];

  useEffect(() => {
    if (userInput.length === 1 && !startTime) {
      setStartTime(Date.now());
    }
    if (userInput === targetText) {
      calculateWPM();
    }
  }, [userInput, targetText]);

  const calculateWPM = () => {
    const timeElapsed = (Date.now() - startTime) / 60000;
    const words = targetText.split(' ').length;
    setWpm(Math.round(words / timeElapsed));
  };

  const resetTest = (newMode) => {
    setMode(newMode);
    setUserInput("");
    setStartTime(null);
    setWpm(0);
    const newData = newMode === 'english' ? typingLessons.english : typingLessons.myanmar;
    setLessonIndex(Math.floor(Math.random() * newData.length));
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Mode Selection */}
      <div className="flex gap-4 mb-8 justify-center">
        <button 
          onClick={() => resetTest('english')} 
          className={`px-8 py-2 rounded-full font-bold transition-all ${mode === 'english' ? 'bg-blue-600 text-white shadow-lg' : 'bg-slate-800 text-slate-400'}`}
        >
          English Practice
        </button>
        <button 
          onClick={() => resetTest('myanmar')} 
          className={`px-8 py-2 rounded-full font-bold transition-all ${mode === 'myanmar' ? 'bg-emerald-600 text-white shadow-lg' : 'bg-slate-800 text-slate-400'}`}
        >
          မြန်မာစာ လေ့ကျင့်ရန်
        </button>
      </div>

      <div className="bg-[#0f172a] p-8 rounded-2xl border border-white/10 shadow-2xl">
        {/* စာသားပြသသည့် နေရာ (မြန်မာစာလုံးပေါင်း မလွဲအောင် ရှင်းရှင်းလင်းလင်း ပြထားပါတယ်) */}
        <div className="mb-8 p-6 bg-slate-900 rounded-xl border border-white/5 text-2xl leading-relaxed text-white text-center min-h-[120px] flex items-center justify-center select-none font-pyidaungsu">
          {targetText}
        </div>

        {/* Input Area */}
        <textarea
          className="w-full bg-slate-950 border-2 border-white/10 p-5 rounded-xl focus:border-blue-500 outline-none text-xl text-white text-center transition-all h-32"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder={mode === 'english' ? "Start typing above text..." : "အပေါ်ကစာသားအတိုင်း ရိုက်နှိပ်ပါ..."}
          spellCheck="false"
          autoFocus
        />

        {/* Result & Progress */}
        <div className="mt-6 flex justify-between items-center px-4">
          <div className="text-slate-400">
            Progress: <span className="text-white font-bold">{Math.round((userInput.length / targetText.length) * 100)}%</span>
          </div>
          {userInput === targetText && (
            <div className="flex items-center gap-4 animate-in zoom-in duration-300">
              <span className="text-emerald-400 font-bold text-xl">Speed: {wpm} WPM 🎉</span>
              <button onClick={() => resetTest(mode)} className="bg-white text-black px-6 py-1.5 rounded-full font-bold hover:bg-gray-200">Next</button>
            </div>
          )}
        </div>

        {/* Keyboard Image (Keyboard Layout) */}
        <div className="mt-10 pt-8 border-t border-white/10">
          <p className="text-slate-500 text-sm mb-4 text-center italic">
            {mode === 'english' ? 'QWERTY Layout' : 'မြန်မာယူနီကုဒ် လက်ကွက်လမ်းညွှန်'}
          </p>
          <div className="rounded-xl overflow-hidden border border-white/10 bg-slate-900 p-2">
            <img 
              src={mode === 'english' 
                ? "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Qwerty.svg/1200px-Qwerty.svg.png" 
                : "https://www.mmsit.com/wp-content/uploads/2020/05/keyboard-layout.png"} 
              alt="Keyboard Layout" 
              className="w-full opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </div>
    </div>
  );
}