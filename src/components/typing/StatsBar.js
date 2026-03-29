export default function StatsBar({ wpm, accuracy, score }) {
  return (
    <div className="flex gap-10 mt-10 text-sm text-gray-400">
      <div>WPM <br /><span className="text-white text-xl">{wpm}</span></div>
      <div>ACC <br /><span className="text-white text-xl">{accuracy}%</span></div>
      <div>SCORE <br /><span className="text-white text-xl">{score}</span></div>
    </div>
  );
}