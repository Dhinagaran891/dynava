const approachSteps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We start by understanding how the work happens today, including people, systems, decisions, and bottlenecks.",
  },
  {
    number: "02",
    title: "Map",
    description:
      "We map the workflow from its starting point through to the final outcome and identify where automation can help.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We design the right combination of automation, AI, integrations, business rules, and human involvement.",
  },
  {
    number: "04",
    title: "Implement",
    description:
      "We connect the required systems and build the workflow around the way your business actually operates.",
  },
  {
    number: "05",
    title: "Improve",
    description:
      "We monitor the workflow, identify opportunities for improvement, and evolve the solution as your needs change.",
  },
];

export default function Approach() {
  return (
    <section className="bg-white px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-600">
              Our approach
            </p>

            <h2 className="mt-5 max-w-xl text-4xl font-semibold tracking-[-0.045em] text-slate-950 sm:text-5xl">
              Automation designed around your business.
            </h2>

            <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
              Effective automation starts with understanding the work, not
              simply adding technology to it.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-[15px] top-4 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-blue-200 via-slate-200 to-emerald-200 sm:block" />

            <div className="space-y-10">
              {approachSteps.map((step) => (
                <div
                  key={step.number}
                  className="relative grid gap-5 sm:grid-cols-[32px_1fr] sm:gap-8"
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