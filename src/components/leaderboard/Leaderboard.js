export default function Leaderboard({ scores }) {
  return (
    <div className="mt-12 w-full max-w-md">
      {scores.map((s, i) => (
        <div key={i} className="flex justify-between bg-slate-800 p-3 mb-2 rounded-lg">
          <span>#{i+1} {s.name}</span>
          <span>{s.score}</span>
        </div>
      ))}
    </div>
  );
}