import { CalendarDays, Sparkles, ArrowRight } from "lucide-react";

export default function HeroButtons() {
  return (
    <div className="mt-8 flex flex-col items-center justify-center gap-5 sm:flex-row">
      {/* Primary CTA */}
      <button
        className="
          group
          flex
          h-16
          min-w-[280px]
          items-center
          justify-center
          gap-3
          rounded-full
          bg-gradient-to-r
          from-blue-600
          to-emerald-500
          px-8
          font-semibold
          text-white
          shadow-xl
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-2xl
          active:scale-[0.98]
        "
      >
        <CalendarDays size={20} />

        <span>Book Consultation</span>

        <ArrowRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </button>

      {/* Secondary CTA */}
      <button
        className="
          group
          flex
          h-16
          min-w-[280px]
          items-center
          justify-center
          gap-3
          rounded-full
          border
          border-slate-200/70
          bg-white/70
          px-8
          font-semibold
          text-slate-900
          shadow-lg
          backdrop-blur-xl
          transition-all
          duration-300
          hover:-translate-y-1
          hover:bg-white/90
          hover:shadow-xl
          active:scale-[0.98]
        "
      >
        <Sparkles size={20} className="text-blue-600" />

        <span>Explore Solutions</span>

        <ArrowRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </button>
    </div>
  );
}