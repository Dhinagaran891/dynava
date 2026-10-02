const outcomes = [
  {
    number: "01",
    title: "Less repetitive work",
    description:
      "Use AI to support repetitive information-heavy tasks and give teams more time for higher-value work.",
  },
  {
    number: "02",
    title: "Faster access to knowledge",
    description:
      "Help people find and understand relevant business information without searching across disconnected sources.",
  },
  {
    number: "03",
    title: "More connected workflows",
    description:
      "Bring AI capabilities into existing processes so information and actions can move more naturally between systems.",
  },
  {
    number: "04",
    title: "Better decision support",
    description:
      "Combine business data, context, rules, and AI to help teams make informed decisions more efficiently.",
  },
  {
    number: "05",
    title: "Purpose-built experiences",
    description:
      "Create applications around the specific needs of your users instead of forcing workflows into generic software.",
  },
  {
    number: "06",
    title: "A foundation that can evolve",
    description:
      "Design AI platforms that can adapt as your business processes, data, systems, and AI capabilities change.",
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
            AI should improve the way the business works.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            The value of a custom AI platform is not the technology itself.
            It is what becomes easier, faster, more connected, or more useful
            for the people and processes around it.
          </p>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {outcomes.map((outcome) => (
            <article
              key={outcome.number}
              className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-7 transition hover:border-white/20 hover:bg-white/[0.05] sm:p-8"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold tracking-[0.16em] text-blue-400">
                  {outcome.number}
                </span>

                <span className="h-2 w-2 rounded-full bg-emerald-400" />
              </div>

              <h3 className="mt-8 text-xl font-semibold tracking-tight text-white">
                {outcome.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                {outcome.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
            <span>Business Need</span>
            <span>→</span>
            <span>Connected Intelligence</span>
            <span>→</span>
            <span className="text-emerald-400">Business Value</span>
          </div>
        </div>
      </div>
    </section>
  );
}