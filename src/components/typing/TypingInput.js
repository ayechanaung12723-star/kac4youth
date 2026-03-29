"use client";
export default function TypingInput({ input, setInput, inputRef }) {
  return (
    <input
      ref={inputRef}
      value={input}
      onChange={(e) => setInput(e.target.value)}
      autoComplete="off"
      className="absolute -left-[9999px]"
    />
  );
}