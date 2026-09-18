const outcomes = [
  {
    title: "Reduce repetitive work",
    description:
      "Give teams and customers faster access to answers for common questions.",
  },
  {
    title: "Improve access to knowledge",
    description:
      "Make important business information easier to discover and use.",
  },
  {
    title: "Respond faster",
    description:
      "Provide useful responses without making every interaction dependent on manual intervention.",
  },
  {
    title: "Create consistent interactions",
    description:
      "Deliver a more consistent experience across common customer and employee conversations.",
  },
];

export default function Outcomes() {
  return (
    <section className="bg-slate-950 px-6 py-24 text-white sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Introduction */}
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-400">
            Business value
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
            Technology should make the business work better.
          </h2>
        </div>

        {/* Outcomes */}
        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2">
          {outcomes.map((item) => (
            <div
              key={item.title}
              className="bg-slate-950 p-8 transition duration-300 hover:bg-slate-900 sm:p-10"
            >
              <h3 className="text-xl font-semibold tracking-tight">
                {item.title}
              </h3>

              <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}