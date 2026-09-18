const workflowStages = [
  {
    number: "01",
    title: "Capture",
    description:
      "Bring requests, forms, documents, emails, and other business inputs into a connected workflow.",
  },
  {
    number: "02",
    title: "Understand",
    description:
      "Extract information, classify requests, and determine what needs to happen next.",
  },
  {
    number: "03",
    title: "Route",
    description:
      "Send work, information, and decisions to the right system, process, or person.",
  },
  {
    number: "04",
    title: "Execute",
    description:
      "Trigger the appropriate actions across business applications and connected services.",
  },
  {
    number: "05",
    title: "Track",
    description:
      "Capture workflow activity and create visibility into what has happened and what remains.",
  },
];

export default function Workflow() {
  return (
    <section className="bg-slate-950 px-6 py-24 text-white sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Introduction */}
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-400">
            Workflow transformation
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
            Turn disconnected steps into one connected flow.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Automation can connect the individual steps that make up a
            business process, reducing unnecessary handoffs and making work
            easier to track.
          </p>
        </div>

        {/* Workflow */}
        <div className="mt-16 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]">
          {workflowStages.map((stage, index) => (
            <div
              key={stage.number}
              className="relative grid gap-5 border-b border-white/10 p-7 last:border-b-0 sm:p-9 md:grid-cols-[90px_220px_1fr] md:items-center"
            >
              <span className="text-sm font-semibold text-emerald-400">
                {stage.number}
              </span>

              <div>
                <h3 className="text-xl font-semibold tracking-tight text-white">
                  {stage.title}
                </h3>

                {index < workflowStages.length - 1 && (
                  <div className="mt-4 hidden h-8 w-px bg-white/10 md:block" />
                )}
              </div>

              <p className="max-w-2xl text-sm leading-7 text-slate-400">
                {stage.description}
              </p>
            </div>
          ))}
        </div>

        {/* Supporting statement */}
        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
          <span>People</span>
          <span>Processes</span>
          <span>Data</span>
          <span>AI</span>
          <span>Systems</span>
        </div>
      </div>
    </section>
  );
}