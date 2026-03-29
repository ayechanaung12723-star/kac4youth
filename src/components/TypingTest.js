"use client";
import { useState, useEffect, useRef } from "react";
import GraphemeSplitter from "grapheme-splitter";
import { typingLessons } from "../data/typingContent";

const splitter = new GraphemeSplitter();

export default function TypingTest() {
  const [mode, setMode] = useState("english");
  const [lessonIndex, setLessonIndex] = useState(0);
  const [input, setInput] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [isAI, setIsAI] = useState(false);

  // 🏆 Leaderboard state
  const [topScores, setTopScores] = useState([]);

  const inputRef = useRef(null);
  const typeSound = useRef(null);
  const errorSound = useRef(null);

  const lessons =
    mode === "english" ? typingLessons.english : typingLessons.myanmar;

  // 🔊 Load sounds
  useEffect(() => {
    typeSound.current = new Audio("/sounds/type.mp3");
    errorSound.current = new Audio("/sounds/error.mp3");

    // Load leaderboard
    const saved = localStorage.getItem("kac_top_scores");
    if (saved) {
      setTopScores(JSON.parse(saved));
    }
  }, []);

  // 🤖 AI Lesson Generator
  const generateLesson = (mode) => {
    if (mode === "english") {
      const words = [
        "success","future","money","freedom","focus",
        "discipline","growth","power","skill","mindset"
      ];
      return Array.from({ length: 15 }, () =>
        words[Math.floor(Math.random() * words.length)]
      ).join(" ");
    } else {
      const words = [
        "အောင်မြင်မှု","အနာဂတ်","ငွေကြေး","လွတ်လပ်မှု",
        "အာရုံစိုက်မှု","ကြိုးစားမှု","တိုးတက်မှု"
      ];
      return Array.from({ length: 12 }, () =>
        words[Math.floor(Math.random() * words.length)]
      ).join(" ");
    }
  };

  const getText = () => {
    if (isAI) return generateLesson(mode);
    return lessons[lessonIndex];
  };

  const text = getText();

  const targetChars = splitter.splitGraphemes(text);
  const inputChars = splitter.splitGraphemes(input);

  // Start timer
  useEffect(() => {
    if (input.length === 1 && !startTime) {
      setStartTime(Date.now());
    }
  }, [input]);

  // Live WPM
  useEffect(() => {
    if (!startTime) return;

    const interval = setInterval(() => {
      const time = (Date.now() - startTime) / 60000;
      const words = inputChars.length / 5;
      setWpm(Math.round(words / time) || 0);
    }, 1000);

    return () => clearInterval(interval);
  }, [startTime, inputChars.length]);

  // Accuracy
  useEffect(() => {
    let correct = 0;
    inputChars.forEach((c, i) => {
      if (c === targetChars[i]) correct++;
    });

    setAccuracy(
      Math.max(0, Math.round((correct / targetChars.length) * 100))
    );
  }, [inputChars, targetChars]);

  // 🏆 Save Score (Local Top 10)
  const saveScore = () => {
    const scoreData = {
      wpm,
      accuracy,
      score,
      date: new Date().toLocaleDateString()
    };

    let updated = [...topScores, scoreData];
    updated.sort((a, b) => b.score - a.score);
    updated = updated.slice(0, 10);

    setTopScores(updated);
    localStorage.setItem("kac_top_scores", JSON.stringify(updated));
  };

  // 🔊 Typing handler
  const handleInput = (e) => {
    const value = e.target.value;

    const newChars = splitter.splitGraphemes(value);
    const prevLength = inputChars.length;

    if (newChars.length > prevLength) {
      const lastIndex = newChars.length - 1;
      const lastChar = newChars[lastIndex];
      const expectedChar = targetChars[lastIndex];

      if (!startTime && newChars.length === 1) {
        setStartTime(Date.now());
      }

      if (lastChar === expectedChar) {
        typeSound.current.currentTime = 0;
        typeSound.current.play();
      } else {
        errorSound.current.currentTime = 0;
        errorSound.current.play();
      }
    }

    setInput(value);
  };

  const reset = (newMode) => {
    const m = newMode || mode;
    setMode(m);
    setInput("");
    setStartTime(null);
    setWpm(0);
    setAccuracy(100);

    const newLessons =
      m === "english"
        ? typingLessons.english
        : typingLessons.myanmar;

    setLessonIndex(Math.floor(Math.random() * newLessons.length));
    inputRef.current.focus();
  };

  const progress = (inputChars.length / targetChars.length) * 100;
  const score = Math.round(wpm * (accuracy / 100));

  // Save when finished
  useEffect(() => {
    if (input === text && score > 0) {
      saveScore();
    }
  }, [input]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0b0f1a] text-white px-4">

      {/* Mode + AI */}
      <div className="flex gap-4 mb-10">
        <button onClick={() => reset("english")}
          className={`px-6 py-2 rounded-full ${mode==="english"?"bg-white text-black":"text-gray-500"}`}>
          EN
        </button>
        <button onClick={() => reset("myanmar")}
          className={`px-6 py-2 rounded-full ${mode==="myanmar"?"bg-white text-black":"text-gray-500"}`}>
          MM
        </button>

        <button onClick={() => setIsAI(!isAI)}
          className="px-4 py-2 border border-gray-600 rounded-full text-sm">
          {isAI ? "AI ON" : "AI OFF"}
        </button>
      </div>

      {/* Text */}
      <div className="text-3xl leading-relaxed max-w-3xl text-center font-mono">
        {targetChars.map((char, i) => {
          let className = "text-gray-600";

          if (i < inputChars.length) {
            className = inputChars[i] === char ? "text-white" : "text-red-500";
          }

          if (i === inputChars.length) {
            className = "border-b-2 border-yellow-400 animate-pulse";
          }

          return <span key={i} className={className}>{char}</span>;
        })}
      </div>

      {/* Hidden Input */}
      <textarea
        ref={inputRef}
        value={input}
        onChange={handleInput}
        className="opacity-0 absolute"
        autoFocus
        onPaste={(e) => e.preventDefault()}
      />

      {/* Progress */}
      <div className="w-full max-w-xl mt-8 h-[2px] bg-gray-800">
        <div className="h-[2px] bg-white transition-all"
          style={{ width: `${progress}%` }} />
      </div>

      {/* Stats */}
      <div className="flex gap-10 mt-10 text-gray-400 text-sm">
        <div>WPM <br /><span className="text-white text-xl">{wpm}</span></div>
        <div>ACC <br /><span className="text-white text-xl">{accuracy}%</span></div>
        <div>SCORE <br /><span className="text-white text-xl">{score}</span></div>
      </div>

      {/* Finish */}
      {input === text && (
        <button onClick={() => reset()}
          className="mt-10 px-6 py-2 bg-white text-black rounded-full">
          NEXT
        </button>
      )}

      {/* 🏆 Leaderboard */}
      <div className="mt-16 w-full max-w-xl">
        <h2 className="text-center mb-4 text-lg text-gray-400">
          🏆 Top 10 Scores
        </h2>

        {topScores.map((s, i) => (
          <div key={i}
            className={`flex justify-between p-3 rounded-lg mb-2 bg-slate-800 ${
              i===0?"border border-yellow-400":
              i===1?"border border-gray-300":
              i===2?"border border-orange-400":""
            }`}>
            <span>#{i+1}</span>
            <span>{s.wpm} WPM</span>
            <span>{s.accuracy}%</span>
            <span className="text-yellow-400">{s.score}</span>
          </div>
        ))}
      </div>

    </div>
  );
}