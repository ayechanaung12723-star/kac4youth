"use client";
import React, { forwardRef } from "react";

const TypingInput = forwardRef(({ input, setInput }, ref) => {
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <textarea
      ref={ref}
      value={input}
      onChange={handleChange}
      className="absolute opacity-0"
      autoFocus
      onPaste={(e) => e.preventDefault()}
    />
  );
});

export default TypingInput;