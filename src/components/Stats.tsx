import { useEffect, useState } from "react";

function Counter({ end }: { end: number }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const interval = setInterval(() => {
      start += Math.ceil(end / 100);
      if (start >= end) {
        start = end;
        clearInterval(interval);
      }
      setCount(start);
    }, 20);
  }, [end]);
  return <h3 className="text-4xl font-bold text-blue-400">{count}+</h3>;
}

export default function Stats() {
  return (
    <section className="py-20 text-center">
      <h2 className="text-3xl font-bold mb-12">Why Choose KAC?</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div>
          <Counter end={100} />
          <p className="text-slate-400 mt-2">Students Joined</p>
        </div>
        <div>
          <Counter end={5} />
          <p className="text-slate-400 mt-2">Courses Available</p>
        </div>
        <div>
          <Counter end={24} />
          <p className="text-slate-400 mt-2">Hours Access</p>
        </div>
      </div>
    </section>
  );
}