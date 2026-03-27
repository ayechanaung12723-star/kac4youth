export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-slate-900 border-b border-slate-800">
      <h1 className="text-xl font-bold text-blue-400">KAC For Youth</h1>

      <div className="flex gap-6 text-sm">
        <a href="/" className="hover:text-blue-400">Home</a>
        <a href="#courses" className="hover:text-blue-400">Courses</a>
        <a href="https://t.me/lWJXmj8pC7o1YWY1" target="_blank" className="hover:text-blue-400">
          Telegram
        </a>
      </div>
    </nav>
  );
}