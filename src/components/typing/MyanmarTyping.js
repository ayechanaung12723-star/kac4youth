"use client";
import { useState, useEffect, useRef } from "react";
import GraphemeSplitter from "grapheme-splitter";
import { typingLessons } from "../../data/typingContent";

const splitter = new GraphemeSplitter();

export default function MyanmarTyping({ input, setInput, mode, startTime, setStartTime, wpm, setWpm, accuracy, setAccuracy, lessonIndex }) {
    const inputRef = useRef(null);
    const lessons = typingLessons.myanmar;

    const getLessonText = () => {
        if (lessons[lessonIndex]) return lessons[lessonIndex];
        const words = ["အောင်မြင်မှု","အနာဂတ်","ငွေကြေး","လွတ်လပ်မှု","အာရုံစိုက်မှု","ကြိုးစားမှု","တိုးတက်မှု"];
        return Array.from({ length: 12 }, () => words[Math.floor(Math.random()*words.length)]).join(" ");
    };

    const text = getLessonText();
    const targetChars = splitter.splitGraphemes(text);
    const inputChars = splitter.splitGraphemes(input);

    useEffect(() => { if(input.length===1 && !startTime) setStartTime(Date.now()); }, [input]);
    
    useEffect(() => {
        if(!startTime) return;
        const interval = setInterval(() => {
            const time = (Date.now() - startTime)/60000;
            setWpm(Math.round((inputChars.length/5)/time)||0);
        }, 1000);
        return () => clearInterval(interval);
    }, [startTime, inputChars.length]);

    useEffect(() => {
        let correct = 0;
        inputChars.forEach((c,i)=>{ if(c===targetChars[i]) correct++; });
        setAccuracy(Math.max(0, Math.round((correct/targetChars.length)*100)));
    }, [inputChars, targetChars]);

    const handleInput = (e) => setInput(e.target.value);

    return (
        <div className="text-3xl leading-relaxed max-w-3xl text-center font-mono relative">
            {targetChars.map((char,i)=>{
                let className = "text-gray-600";
                if(i<inputChars.length) className = inputChars[i]===char?"text-white":"text-red-500";
                if(i===inputChars.length) className="border-b-2 border-yellow-400 animate-pulse";
                return <span key={i} className={className}>{char}</span>
            })}
            <textarea ref={inputRef} value={input} onChange={handleInput} className="opacity-0 absolute" autoFocus/>
        </div>
    )
}