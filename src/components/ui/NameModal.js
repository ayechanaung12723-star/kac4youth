"use client";
import React, { useState } from "react";

export default function NameModal({ username, setUsername, onStart }) {
  const [localName, setLocalName] = useState(username || "");

  const handleStart = () => {
    if (!localName.trim()) return;
    setUsername(localName.trim());
    onStart(localName.trim());
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center z-50">
      <div className="bg-gray-900 p-8 rounded-md w-80 text-center">
        <h2 className="text-white text-xl mb-4">Enter your name</h2>
        <input
          value={localName}
          onChange={(e) => setLocalName(e.target.value)}
          className="w-full px-3 py-2 rounded bg-gray-800 text-white mb-4 focus:outline-none"
          autoFocus
        />
        <button
          onClick={handleStart}
          className="px-6 py-2 bg-white text-black rounded hover:bg-gray-200"
        >
          Start
        </button>
      </div>
    </div>
  );
}