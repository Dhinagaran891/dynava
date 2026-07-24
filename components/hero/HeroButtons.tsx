export default function HeroButtons() {
  return (
    <div className="mt-10 flex flex-col gap-4 sm:flex-row">
      <button className="rounded-full bg-blue-600 px-8 py-4 font-semibold text-white">
        Book Consultation
      </button>

      <button className="rounded-full border border-slate-300 px-8 py-4 font-semibold text-slate-900">
        Explore Solutions
      </button>
    </div>
  );
}