export const namePool = [
  "Aung Paing","Kyaw Thet","Wai Lin Aung","Su Lay",
  "Hein Htet Aung","May Thazin","Ko John","Zin Mar",
  "Min Khant","Thar Nyi","Mg Mg","Nay Lin",
  "Phyo Wai","Kaung Htet","Ye Yint","Hnin Ei"
];

export const getDailyLeaderboard = () => {
  const shuffled = [...namePool].sort(() => 0.5 - Math.random()).slice(0, 10);

  return shuffled.map((name) => {
    const wpm = Math.floor(Math.random() * 50) + 40;
    const accuracy = Math.floor(Math.random() * 10) + 90;
    const score = Math.round(wpm * (accuracy / 100));

    return { name, wpm, accuracy, score };
  }).sort((a, b) => b.score - a.score);
};