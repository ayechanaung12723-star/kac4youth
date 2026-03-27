"use client";
import Lottie from "lottie-react";

export default function Hero() {
  return (
    <section className="relative py-28 text-center">

      <h1 className="text-5xl font-bold mb-6">
        KAC For Youth
      </h1>

      <div className="w-32 md:w-48 mx-auto opacity-70">
        <Lottie
          animationData={require("../../public/hero-ai.json")}
          loop={true}
        />
      </div>

    </section>
  );
}