const dataSources = [
  {
    number: "01",
    title: "Business Data",
    description:
      "Connect structured and unstructured business information that gives the AI application the context it needs.",
    items: [
      "Databases",
      "Spreadsheets",
      "Business records",
      "Operational data",
    ],
  },
  {
    number: "02",
    title: "Knowledge & Documents",
    description:
      "Make organisational knowledge accessible through documents, policies, reports, manuals, and other information sources.",
    items: [
      "PDFs",
      "Documents",
      "Knowledge bases",
      "Internal content",
    ],
  },
  {
    number: "03",
    title: "Business Systems",
    description:
      "Connect existing applications so the AI solution can work with the systems your teams already depend on.",
    items: [
      "CRM",
      "ERP",
      "Business applications",
      "Cloud platforms",
    ],
  },
  {
    number: "04",
    title: "APIs & AI Services",
    description:
      "Bring together external services, AI models, APIs, and specialised capabilities when they add value to the solution.",
    items: [
      "REST APIs",
      "Webhooks",
      "AI models",
      "External services",
    ],
  },
];

export default function DataSources() {
  return (
    <section className="bg-slate-50 px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="lg:sticky lg:top-32">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-600">
              Connected intelligence
            </p>

            <h2 className="mt-5 max-w-xl text-4xl font-semibold tracking-[-0.045em] text-slate-950 sm:text-5xl">
              Your business already has the information. We help connect it.
            </h2>

            <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
              A useful AI application needs access to the right context.
              Dynava can connect business information, knowledge, systems, and
              AI services into a single solution.
            </p>

            <div className="mt-10 flex flex-wrap gap-2">
              <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-600">
                Data
              </span>

              <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-600">
                Knowledge
              </span>

              <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-600">
                Systems
              </span>

              <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-600">
                APIs
              </span>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {dataSources.map((source) => (
              <article
                key={source.number}
                className="rounded-[1.5rem] border border-slate-200 bg-white p-7 transition hover:border-slate-300 hover:shadow-sm sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-[0.16em] text-emerald-600">
                    {source.number}
                  </span>

                  <span className="h-2 w-2 rounded-full bg-blue-500" />
                </div>

                <h3 className="mt-8 text-xl font-semibold tracking-tight text-slate-950">
                  {source.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {source.description}
                </p>

                <div className="mt-6 grid grid-cols-2 gap-2">
                  {source.items.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-slate-100 bg-slate-50 px-3 py-2.5"
                    >
                      <span className="text-xs font-medium text-slate-600">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-12 rounded-[1.5rem] border border-slate-200 bg-white px-6 py-7 sm:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-slate-950">
                Connect what matters.
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Existing data, knowledge, systems, and services can become
                part of a stronger AI ecosystem.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
              <span>Connect</span>
              <span>→</span>
              <span>Understand</span>
              <span>→</span>
              <span className="text-emerald-600">Act</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}