"use client";
import { useState, useEffect } from 'react';
import { typingLessons } from '../data/typingContent';

export default function TypingTest() {
  const [mode, setMode] = useState('english'); // 'english' or 'myanmar'
  const [lessonIndex, setLessonIndex] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [wpm, setWpm] = useState(0);

  const targetText = typingLessons.myanmar[lessonIndex];

  useEffect(() => {
    if (userInput.length === 1 && !startTime) {
      setStartTime(Date.now());
    }
    if (userInput === targetText && mode === 'myanmar') {
      calculateWPM();
    }
  }, [userInput, targetText, startTime, mode]);

  const calculateWPM = () => {
    const timeElapsed = (Date.now() - startTime) / 60000;
    const words = targetText.split(' ').length;
    setWpm(Math.round(words / timeElapsed));
  };

  const resetMyanmarTest = () => {
    setUserInput("");
    setStartTime(null);
    setWpm(0);
    setLessonIndex(Math.floor(Math.random() * typingLessons.myanmar.length));
  };

  return (
    <div className="max-w-5xl mx-auto p-4 mt-5">
      {/* Mode Selection */}
      <div className="flex gap-4 mb-8 justify-center">
        <button 
          onClick={() => setMode('english')} 
          className={`px-8 py-2 rounded-full font-bold transition-all ${mode === 'english' ? 'bg-yellow-500 text-black shadow-lg shadow-yellow-500/20' : 'bg-slate-800 text-slate-400'}`}
        >
          English (Monkeytype)
        </button>
        <button 
          onClick={() => setMode('myanmar')} 
          className={`px-8 py-2 rounded-full font-bold transition-all ${mode === 'myanmar' ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/30' : 'bg-slate-800 text-slate-400'}`}
        >
          မြန်မာစာ လေ့ကျင့်ရန်
        </button>
      </div>

      {/* English Mode: Monkeytype Iframe */}
      {mode === 'english' && (
        <div className="w-full h-[600px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
          <iframe 
            src="https://monkeytype.com" 
            className="w-full h-full"
            title="Monkeytype"
          ></iframe>
        </div>
      )}

      {/* Myanmar Mode: Custom Typing Tool */}
      {mode === 'myanmar' && (
        <div className="max-w-3xl mx-auto bg-[#0f172a] p-8 rounded-2xl border border-white/10 shadow-2xl">
          <div className="mb-6 p-6 bg-slate-900 rounded-xl border border-white/5 text-2xl leading-relaxed text-white text-center min-h-[100px] flex items-center justify-center">
            {targetText}
          </div>

          <textarea
            className="w-full bg-slate-950 border-2 border-white/10 p-5 rounded-xl focus:border-emerald-500 outline-none text-xl text-white text-center transition-all"
            rows="3"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="အပေါ်ကစာသားအတိုင်း ရိုက်နှိပ်ပါ..."
            spellCheck="false"
          />

          {userInput === targetText && (
            <div className="mt-6 text-center animate-in zoom-in duration-300">
              <p className="text-2xl font-bold text-emerald-400">အောင်မြင်ပါတယ်! 🎉</p>
              <p className="text-slate-400 mt-2">Speed: {wpm} WPM</p>
              <button onClick={resetMyanmarTest} className="mt-4 bg-emerald-600 text-white px-8 py-2 rounded-full hover:bg-emerald-500 transition-colors">
                နောက်တစ်ခု လေ့ကျင့်မယ်
              </button>
            </div>
          )}

          {/* Myanmar Keyboard Layout Image */}
          <div className="mt-10 pt-10 border-t border-white/10">
            <p className="text-slate-500 text-sm mb-4 text-center italic">မြန်မာယူနီကုဒ် လက်ကွက်လမ်းညွှန်</p>
            <div className="rounded-xl overflow-hidden border border-white/10">
              <img 
                src="https://www.mmsit.com/wp-content/uploads/2020/05/keyboard-layout.png" 
                alt="Myanmar Unicode Keyboard Layout" 
                className="w-full opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}