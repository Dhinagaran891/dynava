const useCases = [
  {
    number: "01",
    title: "Internal AI Assistants",
    description:
      "Create tailored AI assistants that help teams find information, answer questions, work with internal knowledge, and support everyday decisions.",
    flow: "Knowledge → Reasoning → Response",
  },
  {
    number: "02",
    title: "Intelligent Operations",
    description:
      "Build AI applications around operational workflows to reduce repetitive work, coordinate tasks, and help teams act on information faster.",
    flow: "Data → Intelligence → Action",
  },
  {
    number: "03",
    title: "Document & Knowledge Systems",
    description:
      "Turn large collections of documents and business knowledge into searchable, contextual systems that people can actually use.",
    flow: "Documents → Understanding → Insight",
  },
  {
    number: "04",
    title: "Decision Support",
    description:
      "Bring business data, rules, context, and AI together to support complex decisions without removing people from the process.",
    flow: "Data → Context → Decision",
  },
  {
    number: "05",
    title: "Customer & Service Applications",
    description:
      "Design AI-powered experiences that help customers and service teams get relevant information, complete tasks, and resolve requests more efficiently.",
    flow: "Request → Intelligence → Resolution",
  },
  {
    number: "06",
    title: "AI-Powered Business Tools",
    description:
      "Build focused applications for business processes where existing software does not fully address the way your organisation works.",
    flow: "Workflow → AI Application → Outcome",
  },
];

export default function UseCases() {
  return (
    <section className="bg-slate-50 px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div className="lg:sticky lg:top-32">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-600">
              Where it can help
            </p>

            <h2 className="mt-5 max-w-xl text-4xl font-semibold tracking-[-0.045em] text-slate-950 sm:text-5xl">
              AI applications built around real business needs.
            </h2>

            <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
              Custom AI platforms are most useful when they are designed around
              a specific workflow, information environment, or business
              challenge rather than treated as technology for its own sake.
            </p>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Guiding principle
              </p>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                Start with the business problem. Choose the AI capabilities
                only after the workflow and desired outcome are understood.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {useCases.map((useCase) => (
              <article
                key={useCase.number}
                className="group rounded-[1.5rem] border border-slate-200 bg-white p-7 transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-sm sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-[0.16em] text-emerald-600">
                    {useCase.number}
                  </span>

                  <span className="h-2 w-2 rounded-full bg-blue-500 transition group-hover:bg-emerald-500" />
                </div>

                <h3 className="mt-8 text-xl font-semibold tracking-tight text-slate-950">
                  {useCase.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {useCase.description}
                </p>

                <div className="mt-7 border-t border-slate-100 pt-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                    Intelligence flow
                  </p>

                  <p className="mt-2 text-xs font-medium text-slate-700">
                    {useCase.flow}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}