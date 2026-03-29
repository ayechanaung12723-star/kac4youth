"use client";
import { useRouter } from "next/navigation";

export default function HomeButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push("/")}
      className="absolute top-4 left-4 px-4 py-2 bg-gray-800 rounded hover:bg-gray-700"
    >
      Home
    </button>
  );
}