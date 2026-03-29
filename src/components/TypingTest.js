"use client";
import { useState, useEffect } from 'react';
import { typingLessons } from '../data/typingContent';

export default function TypingTest() {
  const [mode, setMode] = useState('english');
  const [lessonIndex, setLessonIndex] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [wpm, setWpm] = useState(0);

  const lessonData = mode === 'english' ? typingLessons.english : typingLessons.myanmar;
  const targetText = lessonData[lessonIndex];

  useEffect(() => {
    if (userInput.length === 1 && !startTime) {
      setStartTime(Date.now());
    }
    if (userInput === targetText) {
      calculateWPM();
    }
  }, [userInput, targetText, startTime]);

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
      <div className="flex gap-4 mb-8 justify-center font-pyidaungsu">
        <button onClick={() => resetTest('english')} className={`px-8 py-2 rounded-full font-bold transition-all ${mode === 'english' ? 'bg-blue-600 text-white shadow-lg' : 'bg-slate-800 text-slate-400'}`}>English</button>
        <button onClick={() => resetTest('myanmar')} className={`px-8 py-2 rounded-full font-bold transition-all ${mode === 'myanmar' ? 'bg-emerald-600 text-white shadow-lg' : 'bg-slate-800 text-slate-400'}`}>မြန်မာစာ</button>
      </div>

      <div className="bg-[#0f172a] p-10 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
        {/* စာသားပြသသည့် နေရာ */}
        <div className="mb-8 p-6 bg-slate-900/50 rounded-2xl border border-white/5 text-2xl leading-relaxed text-center min-h-[140px] flex items-center justify-center flex-wrap gap-x-1">
          {mode === 'english' ? (
            targetText.split('').map((char, index) => {
              let color = "text-slate-600";
              if (index < userInput.length) {
                color = userInput[index] === char ? "text-white" : "text-red-500 bg-red-500/10 rounded";
              }
              return <span key={index} className={`${color} transition-colors`}>{char}</span>;
            })
          ) : (
            <span className="text-white font-pyidaungsu">{targetText}</span>
          )}
        </div>

        <textarea
          className="w-full bg-transparent border-b-2 border-white/10 p-4 focus:outline-none focus:border-blue-500 text-2xl text-white text-center transition-all h-24 overflow-hidden resize-none"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder={mode === 'english' ? "type the text above..." : "အပေါ်ကစာသားအတိုင်း ရိုက်နှိပ်ပါ..."}
          spellCheck="false"
          autoFocus
        />

        <div className="mt-8 flex justify-between items-center text-sm font-mono">
           <div className="text-slate-500 uppercase tracking-widest">
             Mode: <span className="text-blue-400">{mode}</span>
           </div>
           {userInput === targetText && (
             <div className="flex items-center gap-6 animate-bounce">
               <span className="text-emerald-400 font-bold text-2xl">{wpm} WPM</span>
               <button onClick={() => resetTest(mode)} className="bg-white text-black px-6 py-2 rounded-lg font-bold hover:bg-blue-400 hover:text-white transition-all">NEXT LESSON</button>
             </div>
           )}
        </div>

        {/* Keyboard Layout Guide */}
        <div className="mt-12 pt-8 border-t border-white/5 opacity-40 hover:opacity-100 transition-opacity">
          <p className="text-center text-xs text-slate-500 mb-6 uppercase tracking-widest">Reference Layout</p>
          <img 
            src={mode === 'english' 
              ? "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Qwerty.svg/1200px-Qwerty.svg.png" 
              : "https://www.mmsit.com/wp-content/uploads/2020/05/keyboard-layout.png"} 
            className="w-full max-w-2xl mx-auto rounded-lg grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>
      </div>
    </div>
  );
}