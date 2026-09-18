const approachSteps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We start with the business questions, decisions, and outcomes that the data needs to support.",
  },
  {
    number: "02",
    title: "Assess",
    description:
      "We examine available data sources, quality, structure, accessibility, and the gaps that may affect the intended use.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We connect and transform the relevant data, then build the analytics, models, or intelligence layer around the business requirement.",
  },
  {
    number: "04",
    title: "Validate",
    description:
      "We test the outputs against business context and data quality requirements so teams can understand and trust the results.",
  },
  {
    number: "05",
    title: "Evolve",
    description:
      "We improve the solution as new data, business questions, and opportunities emerge.",
  },
];

export default function Approach() {
  return (
    <section className="bg-white px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-600">
              Our approach
            </p>

            <h2 className="mt-5 max-w-xl text-4xl font-semibold tracking-[-0.045em] text-slate-950 sm:text-5xl">
              Intelligence built around the decisions that matter.
            </h2>

            <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
              We start with the business need and work backwards to the data,
              technology, and intelligence required to support it.
            </p>

            <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Guiding principle
              </p>

              <p className="mt-4 text-lg font-medium leading-8 text-slate-800">
                The right data matters. So does the right question.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-4 top-5 hidden h-[calc(100%-2.5rem)] w-px bg-gradient-to-b from-blue-200 via-slate-200 to-emerald-200 sm:block" />

            <div className="space-y-5">
              {approachSteps.map((step) => (
                <div
                  key={step.number}
                  className="relative grid gap-5 rounded-[1.5rem] border border-slate-200 bg-white p-7 sm:grid-cols-[32px_1fr] sm:gap-8 sm:p-8"
                >
                  <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  </div>

                  <div>
                    <div className="flex flex-wrap items-baseline gap-3">
                      <span className="text-xs font-semibold tracking-[0.16em] text-blue-600">
                        {step.number}
                      </span>

                      <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                        {step.title}
                      </h3>
                    </div>

                    <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}