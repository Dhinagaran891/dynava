const outcomes = [
  {
    number: "01",
    title: "Faster visual processing",
    description:
      "Reduce the time teams spend manually reviewing images, documents, and other visual information.",
  },
  {
    number: "02",
    title: "Less manual data entry",
    description:
      "Extract useful information from documents, forms, and images so teams can spend less time transferring information manually.",
  },
  {
    number: "03",
    title: "More consistent inspection",
    description:
      "Support repeatable visual inspection processes by applying consistent analysis across images and visual records.",
  },
  {
    number: "04",
    title: "Earlier anomaly detection",
    description:
      "Identify relevant visual patterns, anomalies, or conditions earlier so teams can investigate and respond appropriately.",
  },
  {
    number: "05",
    title: "Better operational visibility",
    description:
      "Turn visual information into structured insights that can support reporting, monitoring, and operational decisions.",
  },
  {
    number: "06",
    title: "Smarter workflows",
    description:
      "Connect visual intelligence with existing business systems and workflows to support practical automation.",
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
            Better visual intelligence should lead to better action.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            The value of computer vision is not simply recognising objects or
            analysing images. It is helping people process information faster,
            improve workflows, and make more informed decisions.
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
            Visual data · meaningful insight · practical action
          </p>
        </div>
      </div>
    </section>
  );
}