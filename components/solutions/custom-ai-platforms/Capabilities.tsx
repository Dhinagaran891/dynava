const capabilityGroups = [
  {
    number: "01",
    title: "AI Applications",
    description:
      "Design tailored AI applications around specific business processes, users, information, and operational requirements.",
    capabilities: [
      "Custom AI applications",
      "AI-powered interfaces",
      "Internal AI tools",
      "Role-based experiences",
    ],
  },
  {
    number: "02",
    title: "Knowledge & Intelligence",
    description:
      "Connect AI applications with business knowledge and information so users can interact with relevant organisational context.",
    capabilities: [
      "Knowledge systems",
      "RAG applications",
      "Document intelligence",
      "AI-assisted search",
    ],
  },
  {
    number: "03",
    title: "AI Workflows",
    description:
      "Turn AI capabilities into structured workflows that can support repetitive tasks, decisions, and business processes.",
    capabilities: [
      "AI workflows",
      "Agentic workflows",
      "Task automation",
      "Human-in-the-loop",
    ],
  },
  {
    number: "04",
    title: "Integration & Infrastructure",
    description:
      "Connect AI applications with existing systems, APIs, data sources, and deployment environments to create a usable business solution.",
    capabilities: [
      "API integration",
      "System integration",
      "Cloud deployment",
      "AI model integration",
    ],
  },
];

export default function Capabilities() {
  return (
    <section className="bg-white px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-600">
            What we deliver
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] text-slate-950 sm:text-5xl">
            From AI capabilities to practical business applications.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Dynava brings together AI applications, knowledge systems,
            intelligent workflows, and integrations to create solutions around
            specific business requirements.
          </p>
        </div>

        <div className="mt-16 overflow-hidden rounded-[2rem] border border-slate-200">
          {capabilityGroups.map((group) => (
            <div
              key={group.number}
              className="grid gap-8 border-b border-slate-200 p-7 last:border-b-0 sm:p-9 lg:grid-cols-[80px_0.9fr_1.1fr]"
            >
              <span className="text-sm font-semibold text-emerald-600">
                {group.number}
              </span>

              <div>
                <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                  {group.title}
                </h3>

                <p className="mt-3 max-w-md text-sm leading-7 text-slate-600">
                  {group.description}
                </p>
              </div>

              <div className="grid gap-2 sm:grid-cols-2">
                {group.capabilities.map((capability) => (
                  <div
                    key={capability}
                    className="flex items-center rounded-xl border border-slate-200 bg-slate-50 px-4 py-3"
                  >
                    <span className="mr-3 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-blue-600 to-emerald-500" />

                    <span className="text-sm font-medium text-slate-700">
                      {capability}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-xs font-medium uppercase tracking-[0.16em] text-slate-400">
          <span>Applications</span>
          <span>Knowledge</span>
          <span>Automation</span>
          <span>Integration</span>
        </div>
      </div>
    </section>
  );
}