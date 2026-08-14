import { MessageCircle, Sparkles, ArrowRight } from "lucide-react";

export default function HeroButtons() {
  return (
    <div
      className="
        flex
        w-full
        flex-col
        items-center
        justify-center
        gap-4
        sm:w-auto
        sm:flex-row
        sm:gap-5
      "
    >
      {/* Primary CTA */}
      <button
        className="
          group
          flex
          h-14
          w-full
          items-center
          justify-center
          gap-3
          rounded-full
          bg-gradient-to-r
          from-blue-600
          to-emerald-500
          px-7
          text-base
          font-medium
          text-white
          shadow-lg
          transition-all
          duration-300
          hover:-translate-y-0.5
          hover:shadow-xl
          active:scale-[0.98]
          sm:w-[280px]
        "
      >
        <MessageCircle size={19} />

        <span>Talk to Dynava</span>

        <ArrowRight
          size={18}
          className="
            transition-transform
            duration-300
            group-hover:translate-x-1
          "
        />
      </button>

      {/* Secondary CTA */}
      <button
        className="
          group
          flex
          h-14
          w-full
          items-center
          justify-center
          gap-3
          rounded-full
          border
          border-slate-200
          bg-white/80
          px-7
          text-base
          font-medium
          text-slate-900
          shadow-md
          backdrop-blur-xl
          transition-all
          duration-300
          hover:-translate-y-0.5
          hover:bg-white
          hover:shadow-lg
          active:scale-[0.98]
          sm:w-[280px]
        "
      >
        <Sparkles
          size={19}
          className="text-blue-600"
        />

        <span>Explore Solutions</span>

        <ArrowRight
          size={18}
          className="
            transition-transform
            duration-300
            group-hover:translate-x-1
          "
        />
      </button>
    </div>
  );
}