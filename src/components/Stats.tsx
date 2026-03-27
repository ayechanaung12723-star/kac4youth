"use client";

import { useEffect, useRef, useState } from "react";

function Counter({ end, start }: { end: number; start: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const increment = Math.max(1, Math.ceil(end / 70));

    const timer = window.setInterval(() => {
      current += increment;
      if (current >= end) {
        current = end;
        window.clearInterval(timer);
      }
      setCount(current);
    }, 22);

    return () => window.clearInterval(timer);
  }, [end, start]);

  return <span className="text-4xl font-black tracking-tight text-cyan-300 md:text-5xl">{count}+</span>;
}

export default function Stats() {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="stats"
      ref={ref}
      className="mx-auto max-w-7xl px-6 py-10 md:px-10 md:py-16"
    >
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl">
          <Counter end={100} start={visible} />
          <p className="mt-2 text-sm text-slate-300">Students Joined</p>
        </div>

        <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl">
          <Counter end={5} start={visible} />
          <p className="mt-2 text-sm text-slate-300">Courses Available</p>
        </div>

        <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl">
          <Counter end={24} start={visible} />
          <p className="mt-2 text-sm text-slate-300">Hours Access</p>
        </div>
      </div>
    </section>
  );
}