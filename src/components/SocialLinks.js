export default function SocialLinks() {
  const links = [
    { name: "YouTube", url: "https://www.youtube.com/@KACForYouth", color: "hover:text-red-500" },
    { name: "Telegram", url: "https://t.me/lWJXmj8pC7o1YWY1", color: "hover:text-sky-400" },
    { name: "Facebook", url: "https://facebook.com/KACforYouth", color: "hover:text-blue-500" },
    { name: "TikTok", url: "https://tiktok.com/@kacforyouth", color: "hover:text-pink-500" },
  ];

  return (
    <section className="py-16 text-center">
      <h2 className="text-2xl font-bold mb-8">Follow Us</h2>

      <div className="flex flex-wrap justify-center gap-6">
        {links.map((link, i) => (
          <a
            key={i}
            href={link.url}
            target="_blank"
            className={`px-6 py-3 bg-slate-900 rounded-xl border border-slate-700 transition-all ${link.color}`}
          >
            {link.name}
          </a>
        ))}
      </div>
    </section>
  );
}