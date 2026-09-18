const useCases = [
  {
    number: "01",
    title: "Lead & Enquiry Handling",
    description:
      "Capture enquiries, enrich information, route them to the right team, and keep your CRM updated automatically.",
    flow: "Enquiry → Enrichment → CRM → Team",
  },
  {
    number: "02",
    title: "Document Workflows",
    description:
      "Process incoming documents, extract relevant information, validate it, and move it into the next stage of the workflow.",
    flow: "Document → AI Processing → Validation → System",
  },
  {
    number: "03",
    title: "Reporting & Data Operations",
    description:
      "Bring information together from multiple systems and automate recurring reporting and data preparation.",
    flow: "Systems → Data → Processing → Report",
  },
  {
    number: "04",
    title: "Customer & Operations Requests",
    description:
      "Turn incoming requests into structured workflows that can be routed, processed, tracked, and resolved.",
    flow: "Request → Classification → Routing → Resolution",
  },
];

export default function UseCases() {
  return (
    <section className="bg-slate-50 px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-600">
            Where automation helps
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] text-slate-950 sm:text-5xl">
            Automate the workflows that slow your teams down.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            From incoming requests to recurring operational processes, Dynava
            can connect the steps that currently depend on manual coordination.
          </p>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-2">
          {useCases.map((useCase) => (
            <article
              key={useCase.number}
              className="group rounded-[1.75rem] border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50 sm:p-9"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-blue-600">
                  {useCase.number}
                </span>

                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 transition-transform duration-300 group-hover:scale-125" />
              </div>

              <h3 className="mt-12 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                {useCase.title}
              </h3>

              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600">
                {useCase.description}
              </p>

              <div className="mt-8 overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
                <div className="flex flex-wrap items-center gap-2 px-4 py-3">
                  {useCase.flow.split(" → ").map((step, index, array) => (
                    <div key={step} className="flex items-center gap-2">
                      <span className="rounded-full bg-white px-3 py-1.5 text-xs font-medium text-slate-600">
                        {step}
                      </span>

                      {index < array.length - 1 && (
                        <span className="text-slate-300">→</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}