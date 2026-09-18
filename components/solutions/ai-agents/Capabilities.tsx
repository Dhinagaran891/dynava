const capabilities = [
  {
    number: "01",
    title: "Workflow Agents",
    description:
      "Support multi-step business processes by gathering information, coordinating tasks, and helping move work from one stage to the next.",
  },
  {
    number: "02",
    title: "Research & Analysis Agents",
    description:
      "Collect information from relevant sources, organise findings, and help teams turn large amounts of information into useful insights.",
  },
  {
    number: "03",
    title: "Customer Service Agents",
    description:
      "Handle defined customer service workflows, retrieve relevant information, and assist with routine requests across connected systems.",
  },
  {
    number: "04",
    title: "Operations Agents",
    description:
      "Support internal operations by coordinating repetitive tasks, checking information, and assisting teams with day-to-day workflows.",
  },
];

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      className="bg-white px-6 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Introduction */}
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-600">
            What we build
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] text-slate-950 sm:text-5xl">
            Agents designed around how work actually gets done.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We design AI agents around specific business workflows, with clear
            responsibilities, connected information, and defined boundaries.
          </p>
        </div>

        {/* Capability cards */}
        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {capabilities.map((item) => (
            <article
              key={item.number}
              className="group rounded-3xl border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/40"
            >
              <span className="text-sm font-semibold text-slate-400">
                {item.number}
              </span>

              <h3 className="mt-8 text-2xl font-semibold tracking-[-0.03em] text-slate-950">
                {item.title}
              </h3>

              <p className="mt-4 text-base leading-7 text-slate-600">
                {item.description}
              </p>

              <div className="mt-8 h-px w-full bg-slate-100 transition group-hover:bg-blue-100" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}