const capabilities = [
  {
    number: "01",
    title: "Process Automation",
    description:
      "Automate repetitive business processes across teams, systems, and operational workflows.",
    tags: ["Approvals", "Routing", "Notifications"],
  },
  {
    number: "02",
    title: "AI-Powered Processing",
    description:
      "Use AI to understand documents, emails, requests, and unstructured information inside automated workflows.",
    tags: ["Classification", "Extraction", "Summarisation"],
  },
  {
    number: "03",
    title: "System Integration",
    description:
      "Connect the applications your teams already use so information can move between systems without unnecessary manual effort.",
    tags: ["CRM", "ERP", "APIs"],
  },
  {
    number: "04",
    title: "Data Synchronisation",
    description:
      "Keep information aligned across connected systems and reduce repetitive data entry and inconsistent records.",
    tags: ["Data Flows", "Validation", "Sync"],
  },
  {
    number: "05",
    title: "Workflow Orchestration",
    description:
      "Coordinate multiple actions, systems, and teams through structured workflows with clear rules and handoffs.",
    tags: ["Triggers", "Logic", "Actions"],
  },
  {
    number: "06",
    title: "Monitoring & Visibility",
    description:
      "Create visibility into workflow activity, exceptions, bottlenecks, and completed actions.",
    tags: ["Tracking", "Alerts", "Reporting"],
  },
];

export default function Capabilities() {
  return (
    <section className="bg-white px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="lg:sticky lg:top-32">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-600">
              What we automate
            </p>

            <h2 className="mt-5 max-w-xl text-4xl font-semibold tracking-[-0.045em] text-slate-950 sm:text-5xl">
              Connect the pieces that keep your business moving.
            </h2>

            <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
              Dynava combines automation, AI, integrations, and workflow
              intelligence to simplify the way work moves through your
              organisation.
            </p>

            <div className="mt-10 hidden h-px w-32 bg-gradient-to-r from-blue-600 to-emerald-500 lg:block" />
          </div>

          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {capabilities.map((capability) => (
              <div
                key={capability.number}
                className="group py-8 sm:py-10"
              >
                <div className="grid gap-5 sm:grid-cols-[70px_1fr]">
                  <span className="text-sm font-semibold text-emerald-600">
                    {capability.number}
                  </span>

                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight text-slate-950 transition group-hover:text-blue-700">
                      {capability.title}
                    </h3>

                    <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
                      {capability.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {capability.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-500"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}