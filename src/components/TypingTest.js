"use client";
import { useState, useEffect, useRef } from "react";
import GraphemeSplitter from "grapheme-splitter";
import { typingLessons } from "../data/typingContent";

const splitter = new GraphemeSplitter();

// 🎲 Random Names Pool
const namePool = [
  "Aung Paing","Kyaw Thet","Wai Lin Aung","Su Lay",
  "Hein Htet Aung","May Thazin","Ko John","Zin Mar",
  "Min Khant","Thar Nyi","Mg Mg","Nay Lin",
  "Phyo Wai","Kaung Htet","Ye Yint","Hnin Ei"
];

// 🎲 Daily Random Generator
const getDailyRandomScores = () => {
  const today = new Date().toDateString();
  let seed = today.split("").reduce((a, c) => a + c.charCodeAt(0), 0);

  const random = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };

  let results = [];

  for (let i = 0; i < 10; i++) {
    const name = namePool[Math.floor(random() * namePool.length)];
    const wpm = Math.floor(random() * 60) + 40;
    const accuracy = Math.floor(random() * 10) + 90;
    const score = Math.round(wpm * (accuracy / 100));

    results.push({ name, wpm, accuracy, score });
  }

  results.sort((a, b) => b.score - a.score);
  return results;
};

export default function TypingTest() {
  const [mode, setMode] = useState("english");
  const [lessonIndex, setLessonIndex] = useState(0);
  const [input, setInput] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [isAI, setIsAI] = useState(false);

  const [topScores, setTopScores] = useState([]);

  // 👤 User Name System
  const [username, setUsername] = useState("");
  const [showNameModal, setShowNameModal] = useState(true);

  const inputRef = useRef(null);
  const typeSound = useRef(null);
  const errorSound = useRef(null);

  const lessons =
    mode === "english" ? typingLessons.english : typingLessons.myanmar;

  // 🔊 Load + Leaderboard Init
  useEffect(() => {
    typeSound.current = new Audio("/sounds/type.mp3");
    errorSound.current = new Audio("/sounds/error.mp3");

    const savedName = localStorage.getItem("kac_username");
    if (savedName) {
      setUsername(savedName);
      setShowNameModal(false);
    }

    const realScores = JSON.parse(localStorage.getItem("kac_top_scores")) || [];
    const randomScores = getDailyRandomScores();

    const merged = [...realScores, ...randomScores]
      .sort((a, b) => b.score - a.score)
      .slice(0, 10);

    setTopScores(merged);
  }, []);

  // 🤖 AI Lesson
  const generateLesson = (mode) => {
    const words =
      mode === "english"
        ? ["success","future","money","freedom","focus","discipline"]
        : ["အောင်မြင်မှု","အနာဂတ်","ငွေကြေး","လွတ်လပ်မှု","ကြိုးစားမှု"];

    return Array.from({ length: 15 }, () =>
      words[Math.floor(Math.random() * words.length)]
    ).join(" ");
  };

  const text = isAI
    ? generateLesson(mode)
    : lessons[lessonIndex];

  const targetChars = splitter.splitGraphemes(text);
  const inputChars = splitter.splitGraphemes(input);

  useEffect(() => {
    if (input.length === 1 && !startTime) {
      setStartTime(Date.now());
    }
  }, [input]);

  useEffect(() => {
    if (!startTime) return;

    const interval = setInterval(() => {
      const time = (Date.now() - startTime) / 60000;
      const words = inputChars.length / 5;
      setWpm(Math.round(words / time) || 0);
    }, 1000);

    return () => clearInterval(interval);
  }, [startTime, inputChars.length]);

  useEffect(() => {
    let correct = 0;
    inputChars.forEach((c, i) => {
      if (c === targetChars[i]) correct++;
    });

    setAccuracy(Math.max(0, Math.round((correct / targetChars.length) * 100)));
  }, [inputChars, targetChars]);

  // 🏆 Save Score
  const saveScore = () => {
    const scoreData = {
      name: username,
      wpm,
      accuracy,
      score
    };

    let realScores = JSON.parse(localStorage.getItem("kac_top_scores")) || [];
    realScores.push(scoreData);

    localStorage.setItem("kac_top_scores", JSON.stringify(realScores));
  };

  const handleInput = (e) => {
    if (showNameModal) return;

    const value = e.target.value;
    const newChars = splitter.splitGraphemes(value);

    if (newChars.length > inputChars.length) {
      const i = newChars.length - 1;

      if (newChars[i] === targetChars[i]) {
        typeSound.current.play();
      } else {
        errorSound.current.play();
      }
    }

    setInput(value);
  };

  const reset = () => {
    setInput("");
    setStartTime(null);
    setWpm(0);
    setAccuracy(100);
    setLessonIndex(Math.floor(Math.random() * lessons.length));
    inputRef.current.focus();
  };

  const progress = (inputChars.length / targetChars.length) * 100;
  const score = Math.round(wpm * (accuracy / 100));

  useEffect(() => {
    if (input === text && score > 0) {
      saveScore();
    }
  }, [input]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0b0f1a] text-white px-4">

      {/* 👤 Name Modal */}
      {showNameModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-slate-900 p-6 rounded-xl text-center">
            <h2 className="mb-4 text-lg">Enter Your Name</h2>
            <input
              className="px-4 py-2 text-black rounded"
              onChange={(e) => setUsername(e.target.value)}
            />
            <button
              className="mt-4 px-4 py-2 bg-white text-black rounded"
              onClick={() => {
                if (!username) return;
                localStorage.setItem("kac_username", username);
                setShowNameModal(false);
                inputRef.current.focus();
              }}
            >
              Start
            </button>
          </div>
        </div>
      )}

      {/* TEXT */}
      <div className="text-3xl text-center font-mono">
        {targetChars.map((c, i) => {
          let cls = "text-gray-600";
          if (i < inputChars.length)
            cls = inputChars[i] === c ? "text-white" : "text-red-500";
          if (i === inputChars.length)
            cls = "border-b-2 border-yellow-400";

          return <span key={i} className={cls}>{c}</span>;
        })}
      </div>

      <textarea
        ref={inputRef}
        value={input}
        onChange={handleInput}
        className="opacity-0 absolute"
      />

      {/* Stats */}
      <div className="flex gap-6 mt-6">
        <div>{wpm} WPM</div>
        <div>{accuracy}%</div>
        <div>{score}</div>
      </div>

      {/* Leaderboard */}
      <div className="mt-10 w-full max-w-md">
        {topScores.map((s, i) => (
          <div key={i} className="flex justify-between p-2 bg-slate-800 mb-2 rounded">
            <span>#{i+1} {s.name}</span>
            <span>{s.score}</span>
          </div>
        ))}
      </div>
    </div>
  );
}