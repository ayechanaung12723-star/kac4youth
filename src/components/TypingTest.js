"use client";
import { useState, useEffect, useRef } from "react";
import GraphemeSplitter from "grapheme-splitter";
import { typingLessons } from "../data/typingContent";

const splitter = new GraphemeSplitter();

const namePool = [
  "Aung Paing","Kyaw Thet","Wai Lin Aung","Su Lay",
  "Hein Htet Aung","May Thazin","Ko John","Zin Mar",
  "Min Khant","Thar Nyi","Mg Mg","Nay Lin"
];

const getDailyRandomScores = () => {
  const today = new Date().toDateString();
  let seed = today.split("").reduce((a, c) => a + c.charCodeAt(0), 0);

  const random = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };

  let arr = [];
  for (let i = 0; i < 10; i++) {
    const name = namePool[Math.floor(random() * namePool.length)];
    const wpm = Math.floor(random() * 50) + 40;
    const accuracy = Math.floor(random() * 10) + 90;
    const score = Math.round(wpm * (accuracy / 100));
    arr.push({ name, wpm, accuracy, score });
  }

  return arr.sort((a, b) => b.score - a.score);
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

  const [username, setUsername] = useState("");
  const [showModal, setShowModal] = useState(true);

  const inputRef = useRef(null);
  const typeSound = useRef(null);
  const errorSound = useRef(null);

  const lessons =
    mode === "english" ? typingLessons.english : typingLessons.myanmar;

  useEffect(() => {
    typeSound.current = new Audio("/sounds/type.mp3");
    errorSound.current = new Audio("/sounds/error.mp3");

    const savedName = localStorage.getItem("kac_username");
    if (savedName) {
      setUsername(savedName);
      setShowModal(false);
    }

    const real = JSON.parse(localStorage.getItem("kac_top_scores")) || [];
    const fake = getDailyRandomScores();

    const merged = [...real, ...fake]
      .sort((a, b) => b.score - a.score)
      .slice(0, 10);

    setTopScores(merged);
  }, []);

  const generateLesson = (mode) => {
    const words =
      mode === "english"
        ? ["success","future","money","focus","discipline"]
        : ["အောင်မြင်မှု","အနာဂတ်","ငွေကြေး","လွတ်လပ်မှု","ကြိုးစားမှု"];

    return Array.from({ length: 15 }, () =>
      words[Math.floor(Math.random() * words.length)]
    ).join(" ");
  };

  const text = isAI ? generateLesson(mode) : lessons[lessonIndex];

  const targetChars = splitter.splitGraphemes(text);
  const inputChars = splitter.splitGraphemes(input);

  // 👉 ALWAYS keep focus (FIX Myanmar typing)
  useEffect(() => {
    if (!showModal && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showModal]);

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

    setAccuracy(Math.round((correct / targetChars.length) * 100) || 0);
  }, [inputChars, targetChars]);

  const saveScore = () => {
    const data = { name: username, wpm, accuracy, score };

    let arr = JSON.parse(localStorage.getItem("kac_top_scores")) || [];
    arr.push(data);
    localStorage.setItem("kac_top_scores", JSON.stringify(arr));
  };

  const handleInput = (e) => {
    const value = e.target.value;
    const newChars = splitter.splitGraphemes(value);

    if (newChars.length > inputChars.length) {
      const i = newChars.length - 1;
      if (newChars[i] === targetChars[i]) {
        typeSound.current.currentTime = 0;
        typeSound.current.play();
      } else {
        errorSound.current.currentTime = 0;
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

      {/* 👤 BEAUTIFUL MODAL */}
      {showModal && (
        <div className="fixed inset-0 backdrop-blur-md bg-black/70 flex items-center justify-center z-50">
          <div className="bg-[#111827] p-8 rounded-2xl shadow-2xl w-[90%] max-w-md text-center">
            <h2 className="text-xl mb-4">Enter Your Name</h2>

            <input
              className="w-full px-4 py-3 rounded-lg bg-black text-white border border-gray-600 outline-none focus:border-white"
              placeholder="Your name..."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <button
              className="mt-6 w-full py-3 rounded-lg bg-white text-black font-semibold"
              onClick={() => {
                if (!username.trim()) return;
                localStorage.setItem("kac_username", username);
                setShowModal(false);
              }}
            >
              Start Typing
            </button>
          </div>
        </div>
      )}

      {/* TEXT */}
      <div className="text-3xl leading-relaxed text-center max-w-3xl font-mono">
        {targetChars.map((c, i) => {
          let cls = "text-gray-600";
          if (i < inputChars.length)
            cls = inputChars[i] === c ? "text-white" : "text-red-500";
          if (i === inputChars.length)
            cls = "border-b-2 border-yellow-400 animate-pulse";

          return <span key={i} className={cls}>{c}</span>;
        })}
      </div>

      {/* HIDDEN INPUT */}
      <textarea
        ref={inputRef}
        value={input}
        onChange={handleInput}
        className="opacity-0 absolute"
        autoFocus
      />

      {/* PROGRESS */}
      <div className="w-full max-w-xl mt-6 h-[2px] bg-gray-800">
        <div className="h-[2px] bg-white" style={{ width: `${progress}%` }} />
      </div>

      {/* STATS */}
      <div className="flex gap-10 mt-8 text-sm">
        <div>{wpm} WPM</div>
        <div>{accuracy}%</div>
        <div>{score}</div>
      </div>

      {/* LEADERBOARD */}
      <div className="mt-10 w-full max-w-md">
        {topScores.map((s, i) => (
          <div key={i} className="flex justify-between bg-slate-800 p-3 mb-2 rounded-lg">
            <span>#{i+1} {s.name}</span>
            <span>{s.score}</span>
          </div>
        ))}
      </div>
    </div>
  );
}