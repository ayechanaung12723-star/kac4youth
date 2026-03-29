"use client";
import React from "react";

export default function NameModal({ username, setUsername, onStart }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center z-50">
      <div className="bg-[#0b0f1a] p-6 rounded-xl text-white w-80 flex flex-col items-center">
        <h2 className="text-xl mb-4">Enter Your Name</h2>
        <input
          type="text"
          className="p-2 rounded w-full text-black"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoFocus
        />
        <button
          onClick={() => username.trim() && onStart(username.trim())}
          className="mt-4 px-6 py-2 bg-white text-black rounded-full"
        >
          Start
        </button>
      </div>
    </div>
  );
}