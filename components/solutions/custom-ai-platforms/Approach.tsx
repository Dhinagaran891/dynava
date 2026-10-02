const approachSteps = [
  {
    number: "01",
    title: "Understand",
    description:
      "Start with the business objective, users, workflows, information, and constraints. The goal is to understand what the AI system actually needs to accomplish.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Define the application architecture, AI capabilities, data flows, integrations, user experience, and human involvement required for the solution.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Develop the core application and connect the appropriate models, knowledge sources, workflows, APIs, and business systems.",
  },
  {
    number: "04",
    title: "Validate",
    description:
      "Test the solution against real workflows, representative information, user expectations, reliability requirements, and measurable business outcomes.",
  },
  {
    number: "05",
    title: "Evolve",
    description:
      "Improve the application as users interact with it, business requirements change, new data becomes available, and AI capabilities continue to develop.",
  },
];

export default function Approach() {
  return (
    <section className="bg-white px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="lg:sticky lg:top-32">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-600">
              Our approach
            </p>

            <h2 className="mt-5 max-w-xl text-4xl font-semibold tracking-[-0.045em] text-slate-950 sm:text-5xl">
              Build around the problem, not the technology.
            </h2>

            <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
              Custom AI applications need more than a model. Dynava connects
              business requirements, user experience, data, workflows, and
              technology into a solution that can work in the real world.
            </p>

            <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Guiding principle
              </p>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                The right solution may involve AI, automation, integration,
                conventional software, or a combination of them. We choose the
                approach based on the business requirement.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-4 top-4 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-blue-500/30 via-slate-200 to-emerald-500/30 sm:block" />

            <div className="space-y-5">
              {approachSteps.map((step, index) => (
                <div
                  key={step.number}
                  className="relative grid gap-5 rounded-[1.5rem] border border-slate-200 bg-white p-7 transition hover:border-slate-300 hover:shadow-sm sm:grid-cols-[34px_1fr] sm:gap-8 sm:p-8"
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

                  {index < approachSteps.length - 1 && (
                    <div className="absolute -bottom-3 left-4 z-20 hidden h-6 w-px bg-emerald-500/20 sm:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}