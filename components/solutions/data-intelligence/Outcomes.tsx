const outcomes = [
  {
    number: "01",
    title: "Faster access to information",
    description:
      "Give teams a clearer and more accessible view of the information they need to understand the business.",
  },
  {
    number: "02",
    title: "Less manual reporting",
    description:
      "Reduce repetitive data preparation and reporting work so teams can spend more time interpreting results.",
  },
  {
    number: "03",
    title: "Consistent business metrics",
    description:
      "Create a clearer shared understanding of important measures across teams, systems, and reporting.",
  },
  {
    number: "04",
    title: "Earlier visibility",
    description:
      "Identify meaningful changes, trends, anomalies, and emerging patterns before they become harder to address.",
  },
  {
    number: "05",
    title: "Better decision support",
    description:
      "Turn complex business information into insights that help teams evaluate situations and decide what deserves attention.",
  },
  {
    number: "06",
    title: "Stronger AI foundations",
    description:
      "Build a more reliable data foundation for future AI applications, intelligent automation, and advanced analytics.",
  },
];

export default function Outcomes() {
  return (
    <section className="bg-slate-950 px-6 py-24 text-white sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-400">
            Business outcomes
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
            Better data should lead to better decisions.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            The value of data intelligence is not simply having more reports.
            It is helping people understand what is happening and make more
            informed decisions.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {outcomes.map((outcome) => (
            <article
              key={outcome.number}
              className="bg-slate-950 p-7 sm:p-8"
            >
              <span className="text-sm font-semibold text-emerald-400">
                {outcome.number}
              </span>

              <h3 className="mt-10 text-xl font-semibold tracking-tight text-white">
                {outcome.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                {outcome.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <div className="h-px w-16 bg-gradient-to-r from-blue-500 to-emerald-400" />

          <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
            Trusted data · meaningful insight · informed decisions
          </p>
        </div>
      </div>
    </section>
  );
}