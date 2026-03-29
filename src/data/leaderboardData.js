const randomNames = [
  "Aung Paing","Kyaw Thet","Wai Lin Aung","Su Lay","Hein Htet Aung","May Thazin","Ko John","Nandar"
];

export function getDailyLeaderboard() {
  const today = new Date().toLocaleDateString();
  const key = `kac_leaderboard_${today}`;

  let saved = JSON.parse(localStorage.getItem(key) || "null");
  if (!saved) {
    // Generate top 10 random scores with unique names
    const used = new Set();
    saved = Array.from({length: 10}, () => {
      let name;
      do { name = randomNames[Math.floor(Math.random()*randomNames.length)]; } 
      while (used.has(name));
      used.add(name);
      return {
        name,
        wpm: Math.floor(Math.random()*60)+20,
        accuracy: Math.floor(Math.random()*20)+80,
        score: Math.floor(Math.random()*100)+50
      };
    });
    localStorage.setItem(key, JSON.stringify(saved));
  }
  return saved;
}