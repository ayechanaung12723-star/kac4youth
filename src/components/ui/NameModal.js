"use client";
export default function NameModal({ username, setUsername, onStart }) {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-gray-900 p-6 rounded-xl w-[300px] text-center">
        <h2 className="mb-4">Enter Name</h2>

        <input
          className="w-full p-2 text-black rounded"
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
        />

        <button
          className="mt-4 w-full bg-white text-black p-2 rounded"
          onClick={onStart}
        >
          Start
        </button>
      </div>
    </div>
  );
}