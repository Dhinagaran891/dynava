const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We start with the business problem, users, information, and workflow behind the conversation.",
  },
  {
    number: "02",
    title: "Connect",
    description:
      "We identify the relevant documents, knowledge sources, systems, and APIs the assistant needs.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We shape the conversational experience around how customers or employees actually work.",
  },
  {
    number: "04",
    title: "Integrate",
    description:
      "We connect the assistant with the systems and channels required for practical use.",
  },
  {
    number: "05",
    title: "Improve",
    description:
      "We use feedback and usage insights to continuously refine the experience.",
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
            From business problem to useful conversation.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We focus on the business context first, then design the technology
            around it.
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