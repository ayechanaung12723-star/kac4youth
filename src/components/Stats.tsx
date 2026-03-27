export default function Stats() {
  return (
    <section className="py-20 text-center">
      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">

        <div>
          <h3 className="text-4xl font-bold">100+</h3>
          <p className="text-slate-400 mt-2">Students</p>
        </div>

        <div>
          <h3 className="text-4xl font-bold">5+</h3>
          <p className="text-slate-400 mt-2">Courses</p>
        </div>

        <div>
          <h3 className="text-4xl font-bold">24/7</h3>
          <p className="text-slate-400 mt-2">Access</p>
        </div>

      </div>
    </section>
  );
}