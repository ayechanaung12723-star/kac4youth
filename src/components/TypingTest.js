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

// ✅ Unique daily leaderboard
const getDailyRandomScores = () => {
  const shuffled = [...namePool].sort(() => 0.5 - Math.random()).slice(0, 10);

  return shuffled.map((name) => {
    const wpm = Math.floor(Math.random() * 50) + 40;
    const accuracy = Math.floor(Math.random() * 10) + 90;
    const score = Math.round(wpm * (accuracy / 100));
    return { name, wpm, accuracy, score };
  }).sort((a, b) => b.score - a.score);
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

  const lessons =
    mode === "english" ? typingLessons.english : typingLessons.myanmar;

  useEffect(() => {
    const savedName = localStorage.getItem("kac_username");
    if (savedName) {
      setUsername(savedName);
      setShowModal(false);
    }

    const real = JSON.parse(localStorage.getItem("kac_top_scores")) || [];
    const fake = getDailyRandomScores();

    setTopScores([...real, ...fake].sort((a,b)=>b.score-a.score).slice(0,10));
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

  const score = Math.round(wpm * (accuracy / 100));

  const saveScore = () => {
    const data = { name: username, wpm, accuracy, score };
    let arr = JSON.parse(localStorage.getItem("kac_top_scores")) || [];
    arr.push(data);
    localStorage.setItem("kac_top_scores", JSON.stringify(arr));
  };

  useEffect(() => {
    if (input === text && score > 0) {
      saveScore();
    }
  }, [input]);

  const reset = () => {
    setInput("");
    setStartTime(null);
    setWpm(0);
    setAccuracy(100);
    setLessonIndex(Math.floor(Math.random() * lessons.length));
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-[#0b0f1a] text-white px-4"
      onClick={() => inputRef.current?.focus()}
    >

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
          <div className="bg-gray-900 p-6 rounded-xl w-[300px] text-center">
            <h2 className="mb-4">Enter Name</h2>
            <input
              className="w-full p-2 text-black rounded"
              value={username}
              onChange={(e)=>setUsername(e.target.value)}
            />
            <button
              className="mt-4 w-full bg-white text-black p-2 rounded"
              onClick={()=>{
                if(!username) return;
                localStorage.setItem("kac_username", username);
                setShowModal(false);
                setTimeout(()=>inputRef.current?.focus(),100);
              }}
            >
              Start
            </button>
          </div>
        </div>
      )}

      {/* TEXT */}
      <div className="text-3xl text-center max-w-3xl font-mono leading-relaxed">
        {targetChars.map((c, i) => {
          let cls = "text-gray-600";
          if (i < inputChars.length)
            cls = inputChars[i] === c ? "text-white" : "text-red-500";
          if (i === inputChars.length)
            cls = "border-b-2 border-yellow-400";

          return <span key={i} className={cls}>{c}</span>;
        })}
      </div>

      {/* ✅ IME SAFE INPUT */}
      <textarea
        ref={inputRef}
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        className="mt-6 w-full max-w-xl p-3 rounded bg-black text-white border border-gray-700 outline-none"
        placeholder="Start typing here..."
      />

      {/* STATS */}
      <div className="flex gap-10 mt-6">
        <div>{wpm} WPM</div>
        <div>{accuracy}%</div>
        <div>{score}</div>
      </div>

      {/* LEADERBOARD */}
      <div className="mt-10 w-full max-w-md">
        {topScores.map((s,i)=>(
          <div key={i} className="flex justify-between bg-slate-800 p-2 mb-2 rounded">
            <span>#{i+1} {s.name}</span>
            <span>{s.score}</span>
          </div>
        ))}
      </div>

    </div>
  );
}