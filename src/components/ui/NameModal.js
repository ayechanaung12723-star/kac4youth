"use client";
import React, { useState } from "react";

export default function NameModal({ username, setUsername, onStart }) {
  const [localName, setLocalName] = useState(username || "");

  const handleStart = () => {
    if (localName.trim() === "") return;
    onStart(localName.trim());
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-[#0b0f1a] p-8 rounded-lg text-white w-80 text-center">
        <h2 className="mb-4 text-xl font-bold">Enter Your Name</h2>
        <input
          autoFocus
          value={localName}
          onChange={(e) => setLocalName(e.target.value)}
          className="w-full p-2 mb-4 rounded bg-gray-800 border border-gray-600 text-white text-center"
          placeholder="Type your name..."
          onKeyDown={(e) => { if (e.key === "Enter") handleStart(); }}
        />
        <button
          onClick={handleStart}
          className="px-6 py-2 bg-white text-black rounded-full font-semibold hover:bg-gray-300 transition"
        >
          Start
        </button>
      </div>
    </div>
  );
}