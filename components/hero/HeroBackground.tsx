export default function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">

      {/* Base */}
      <div className="absolute inset-0 bg-[#f8fafc]" />

      {/* Central white atmosphere */}
      <div
        className="
          absolute
          left-1/2
          top-[42%]
          h-[850px]
          w-[1100px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-white
          blur-[90px]
        "
      />

      {/* Blue atmosphere */}
      <div
        className="
          absolute
          -left-[260px]
          top-[180px]
          h-[620px]
          w-[620px]
          rounded-full
          bg-blue-500/[0.07]
          blur-[140px]
        "
      />

      {/* Green atmosphere */}
      <div
        className="
          absolute
          -right-[260px]
          top-[300px]
          h-[650px]
          w-[650px]
          rounded-full
          bg-emerald-400/[0.07]
          blur-[150px]
        "
      />

      {/* Subtle left technical field */}
      <div
        className="
          absolute
          -left-[180px]
          top-[30%]
          h-[500px]
          w-[500px]
          rounded-full
          opacity-40
        "
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(37,99,235,0.14) 1px, transparent 1px)",
          backgroundSize: "12px 12px",
          maskImage:
            "radial-gradient(circle, black 0%, transparent 68%)",
          WebkitMaskImage:
            "radial-gradient(circle, black 0%, transparent 68%)",
        }}
      />

      {/* Subtle right technical field */}
      <div
        className="
          absolute
          -right-[180px]
          top-[45%]
          h-[520px]
          w-[520px]
          rounded-full
          opacity-35
        "
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(16,185,129,0.14) 1px, transparent 1px)",
          backgroundSize: "12px 12px",
          maskImage:
            "radial-gradient(circle, black 0%, transparent 68%)",
          WebkitMaskImage:
            "radial-gradient(circle, black 0%, transparent 68%)",
        }}
      />

      {/* Very subtle border rings */}
      <div
        className="
          absolute
          -left-[300px]
          top-[20%]
          h-[700px]
          w-[700px]
          rounded-full
          border
          border-blue-500/[0.06]
        "
      />

      <div
        className="
          absolute
          -right-[300px]
          top-[35%]
          h-[720px]
          w-[720px]
          rounded-full
          border
          border-emerald-500/[0.06]
        "
      />

    </div>
  );
}