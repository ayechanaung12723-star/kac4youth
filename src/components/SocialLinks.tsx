"use client";
import { FaYoutube, FaTelegram, FaFacebook, FaTiktok } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <section className="py-10 flex justify-center gap-6 text-3xl">
      <a href="https://www.youtube.com/@KACForYouth" target="_blank"><FaYoutube /></a>
      <a href="https://t.me/lWJXmj8pC7o1YWY1" target="_blank"><FaTelegram /></a>
      <a href="https://facebook.com/KACforYouth" target="_blank"><FaFacebook /></a>
      <a href="https://www.tiktok.com/@kacforyouth" target="_blank"><FaTiktok /></a>
    </section>
  );
}