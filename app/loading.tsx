export default function Loading() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-6">
      {/* Subtle background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100/30 blur-3xl" />

        <div className="absolute right-[-100px] top-[-100px] h-[300px] w-[300px] rounded-full bg-emerald-100/30 blur-3xl" />

        <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(#0f172a_1px,transparent_1px),linear-gradient(90deg,#0f172a_1px,transparent_1px)] [background-size:48px_48px]" />
      </div>

      <section className="relative z-10 flex flex-col items-center text-center">
        {/* Animated Dynava symbol */}
        <div className="relative flex h-24 w-24 items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-blue-200/70" />

          <div className="absolute inset-1 animate-spin rounded-full border-2 border-transparent border-t-blue-600 border-r-emerald-500" />

          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-950 text-3xl font-bold tracking-tight text-white shadow-xl">
            D<span className="text-emerald-400">.</span>
          </div>
        </div>

        {/* Brand */}
        <h1 className="mt-8 text-2xl font-semibold tracking-[-0.04em] text-slate-950">
          Dynava<span className="text-emerald-500">.</span>
        </h1>

        <p className="mt-3 text-sm text-slate-500">
          Preparing your intelligent experience
        </p>

        {/* Loading indicator */}
        <div className="mt-8 h-1 w-40 overflow-hidden rounded-full bg-slate-100">
          <div className="h-full w-1/2 animate-[dynava-loading_1.5s_ease-in-out_infinite] rounded-full bg-gradient-to-r from-blue-600 to-emerald-500" />
        </div>

        <p className="mt-4 text-[11px] uppercase tracking-[0.24em] text-slate-400">
          AI · Data · Digital
        </p>
      </section>

      <style>{`
        @keyframes dynava-loading {
          0% {
            transform: translateX(-120%);
          }

          50% {
            transform: translateX(120%);
          }

          100% {
            transform: translateX(260%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
          }
        }
      `}</style>
    </main>
  );
}