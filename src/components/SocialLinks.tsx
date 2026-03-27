import { FaYoutube, FaTelegram, FaFacebook, FaTiktok } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <section className="py-16 text-center">
      <h2 className="text-2xl font-bold mb-8">Follow KAC</h2>
      <div className="flex justify-center gap-6 flex-wrap text-3xl">
        <a href="https://www.youtube.com/@KACForYouth" target="_blank" className="hover:text-red-500"><FaYoutube /></a>
        <a href="https://t.me/lWJXmj8pC7o1YWY1" target="_blank" className="hover:text-sky-400"><FaTelegram /></a>
        <a href="https://facebook.com/KACforYouth" target="_blank" className="hover:text-blue-500"><FaFacebook /></a>
        <a href="https://tiktok.com/@kacforyouth" target="_blank" className="hover:text-pink-500"><FaTiktok /></a>
      </div>
    </section>
  );
}