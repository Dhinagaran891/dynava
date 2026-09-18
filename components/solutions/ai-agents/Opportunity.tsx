export default function Opportunity() {
  return (
    <section className="bg-slate-950 px-6 py-24 text-white sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        {/* Heading */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-400">
            The opportunity
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
            Move beyond automation.
          </h2>
        </div>

        {/* Content */}
        <div>
          <p className="text-xl leading-9 text-slate-300">
            Many business processes involve more than a single repetitive
            task. They require information to be gathered, decisions to be
            made, and actions to happen across multiple systems.
          </p>

          <p className="mt-6 text-base leading-8 text-slate-400">
            AI agents can help coordinate these multi-step workflows by
            understanding context, working with business information, and
            taking appropriate actions within defined boundaries.
          </p>

          {/* Business challenges */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {[
              "Multi-step workflows",
              "Manual research and analysis",
              "Repetitive coordination between teams",
              "Disconnected business systems",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
              >
                <span className="mb-4 block h-2 w-2 rounded-full bg-emerald-400" />

                <p className="text-sm leading-6 text-slate-200">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}