"use client";

import { useState, useEffect, useRef } from "react";
import { typingLessons } from "../../data/typingContent";
import GraphemeSplitter from "grapheme-splitter";

const splitter = new GraphemeSplitter();

export default function EnglishTyping({ username }) {
  const [lessonIndex, setLessonIndex] = useState(0);
  const [input, setInput] = useState("");
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [startTime, setStartTime] = useState(null);

  const inputRef = useRef(null);

  const lessons = typingLessons.english;

  const text = lessons[lessonIndex];
  const targetChars = splitter.splitGraphemes(text);
  const inputChars = splitter.splitGraphemes(input);

  useEffect(() => {
    if (input.length === 1 && !startTime) setStartTime(Date.now());
  }, [input]);

  const score = Math.round(wpm * (accuracy / 100));

  useEffect(() => {
    if (!startTime) return;
    const interval = setInterval(() => {
      const time = (Date.now() - startTime) / 60000;
      setWpm(Math.round((inputChars.length / 5) / time) || 0);
    }, 1000);
    return () => clearInterval(interval);
  }, [startTime, inputChars.length]);

  useEffect(() => {
    let correct = 0;
    inputChars.forEach((c, i) => { if (c === targetChars[i]) correct++; });
    setAccuracy(Math.max(0, Math.round((correct / targetChars.length) * 100)));
  }, [inputChars, targetChars]);

  const handleInput = (e) => setInput(e.target.value);

  const resetLesson = () => {
    setLessonIndex((prev) => (prev + 1) % lessons.length);
    setInput("");
    setStartTime(null);
    inputRef.current.focus();
  };

  return (
    <div className="text-center">
      <div className="text-xl my-4">{text}</div>
      <textarea
        ref={inputRef}
        value={input}
        onChange={handleInput}
        className="w-full p-2 text-black rounded"
        rows={3}
      />
      <div className="flex justify-center gap-6 mt-4">
        <div>WPM: {wpm}</div>
        <div>ACC: {accuracy}%</div>
        <div>SCORE: {score}</div>
      </div>
      {input === text && (
        <button onClick={resetLesson} className="mt-4 px-6 py-2 bg-white text-black rounded">
          NEXT LESSON
        </button>
      )}
    </div>
  );
}