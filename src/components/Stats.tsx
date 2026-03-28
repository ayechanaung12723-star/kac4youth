export default function Stats() {
  return (
    <div className="grid grid-cols-3 gap-4 text-center">

      <div>
        <h3 className="text-2xl md:text-3xl font-bold">100+</h3>
        <p className="text-slate-400 text-xs md:text-sm mt-1">Students</p>
      </div>

      <div>
        <h3 className="text-2xl md:text-3xl font-bold">5+</h3>
        <p className="text-slate-400 text-xs md:text-sm mt-1">Courses</p>
      </div>

      <div>
        <h3 className="text-2xl md:text-3xl font-bold">24/7</h3>
        <p className="text-slate-400 text-xs md:text-sm mt-1">Access</p>
      </div>

    </div>
  );
}