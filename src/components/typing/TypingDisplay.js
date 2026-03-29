import GraphemeSplitter from "grapheme-splitter";
const splitter = new GraphemeSplitter();

export default function TypingDisplay({ text, input }) {
  const target = splitter.splitGraphemes(text);
  const typed = splitter.splitGraphemes(input);

  return (
    <div className="text-3xl font-mono text-center max-w-3xl leading-relaxed">
      {target.map((char, i) => {
        let cls = "text-gray-600";

        if (i < typed.length) {
          cls = typed[i] === char ? "text-white" : "text-red-500";
        }

        if (i === typed.length) {
          cls += " border-b-2 border-yellow-400 animate-pulse";
        }

        return <span key={i} className={cls}>{char}</span>;
      })}
    </div>
  );
}