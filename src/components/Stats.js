export default function Stats() {
  return (
    <section className="py-20 text-center">

      <h2 className="text-3xl font-bold mb-12">Why Choose KAC?</h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

        <div>
          <h3 className="text-4xl font-bold text-blue-400">100+</h3>
          <p className="text-slate-400 mt-2">Students Joined</p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-blue-400">5+</h3>
          <p className="text-slate-400 mt-2">Courses Available</p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-blue-400">24/7</h3>
          <p className="text-slate-400 mt-2">Learning Access</p>
        </div>

      </div>

    </section>
  );
}