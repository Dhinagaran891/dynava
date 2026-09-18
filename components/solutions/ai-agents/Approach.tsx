const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We start with the business objective, users, workflow, information, and decisions involved in the process.",
  },
  {
    number: "02",
    title: "Map",
    description:
      "We break the workflow into tasks, dependencies, decision points, systems, and areas where an agent could contribute.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We define what the agent should understand, what it can decide, what actions it can take, and where human oversight is required.",
  },
  {
    number: "04",
    title: "Integrate",
    description:
      "We connect the agent with the business systems, information sources, tools, and APIs required to perform its role.",
  },
  {
    number: "05",
    title: "Validate",
    description:
      "We test the agent against real workflow scenarios, edge cases, and defined boundaries before broader adoption.",
  },
  {
    number: "06",
    title: "Improve",
    description:
      "We use feedback and workflow insights to refine the agent and identify further opportunities for improvement.",
  },
];

export default function Approach() {
  return (
    <section className="bg-slate-50 px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Introduction */}
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-600">
            Our approach
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] text-slate-950 sm:text-5xl">
            From workflow to responsible AI action.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We design agents around real business processes, with clear
            responsibilities, controlled actions, and human oversight where it
            matters.
          </p>
        </div>

        {/* Process */}
        <div className="mt-16 border-t border-slate-200">
          {steps.map((step) => (
            <div
              key={step.number}
              className="grid gap-5 border-b border-slate-200 py-8 md:grid-cols-[100px_220px_1fr] md:items-start"
            >
              <span className="text-sm font-semibold text-blue-600">
                {step.number}
              </span>

              <h3 className="text-xl font-semibold tracking-tight text-slate-950">
                {step.title}
              </h3>

              <p className="max-w-2xl text-base leading-7 text-slate-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}