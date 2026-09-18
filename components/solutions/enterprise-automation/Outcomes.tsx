const outcomes = [
  {
    number: "01",
    title: "Less manual work",
    description:
      "Reduce repetitive data entry, coordination, follow-ups, and other tasks that consume valuable team time.",
  },
  {
    number: "02",
    title: "Faster processes",
    description:
      "Move information and work between people and systems with fewer unnecessary delays and handoffs.",
  },
  {
    number: "03",
    title: "Better visibility",
    description:
      "Create clearer visibility into workflow activity, exceptions, progress, and completed actions.",
  },
  {
    number: "04",
    title: "More consistent execution",
    description:
      "Turn recurring processes into structured workflows that follow defined rules and business requirements.",
  },
];

export default function Outcomes() {
  return (
    <section className="bg-slate-950 px-6 py-24 text-white sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-400">
              Business outcomes
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
              Automation should improve the way work gets done.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-slate-400">
            The goal is not automation for its own sake. It is to make
            processes easier to operate, easier to understand, and easier to
            improve.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {outcomes.map((outcome) => (
            <article
              key={outcome.number}
              className="bg-slate-950 p-7 sm:p-8"
            >
              <span className="text-sm font-semibold text-emerald-400">
                {outcome.number}
              </span>

              <h3 className="mt-12 text-xl font-semibold tracking-tight text-white">
                {outcome.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                {outcome.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex items-center gap-4">
          <div className="h-px w-16 bg-gradient-to-r from-blue-500 to-emerald-400" />

          <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
            Practical automation. Measurable improvement.
          </p>
        </div>
      </div>
    </section>
  );
}