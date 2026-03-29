"use client";

import { useState } from "react";

export default function NameModal({ onSubmit }) {
  const [name, setName] = useState("");

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-[#1a1f2e] p-8 rounded-xl w-80 flex flex-col gap-4">
        <h2 className="text-white text-xl text-center">Enter Your Name</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          className="p-2 rounded bg-gray-800 text-white"
        />
        <button
          onClick={() => name.trim() && onSubmit(name)}
          className="bg-white text-black py-2 rounded mt-2"
        >
          Start
        </button>
      </div>
    </div>
  );
}