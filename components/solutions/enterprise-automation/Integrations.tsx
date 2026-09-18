const integrations = [
  {
    category: "Business Systems",
    items: ["CRM", "ERP", "Finance", "HR"],
  },
  {
    category: "Communication",
    items: ["Email", "Messaging", "Support", "Notifications"],
  },
  {
    category: "Data & Storage",
    items: ["Databases", "Cloud Storage", "Spreadsheets", "Data Platforms"],
  },
  {
    category: "Business APIs",
    items: ["REST APIs", "Webhooks", "Custom Services", "Third-party Tools"],
  },
];

export default function Integrations() {
  return (
    <section className="bg-slate-50 px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-600">
              Connected systems
            </p>

            <h2 className="mt-5 max-w-xl text-4xl font-semibold tracking-[-0.045em] text-slate-950 sm:text-5xl">
              Bring your business systems into the workflow.
            </h2>

            <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
              Automation becomes more useful when the systems your teams
              already rely on can work together.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {integrations.map((integration, index) => (
              <div
                key={integration.category}
                className="rounded-[1.5rem] border border-slate-200 bg-white p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-blue-600">
                    0{index + 1}
                  </span>

                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </div>

                <h3 className="mt-8 text-xl font-semibold tracking-tight text-slate-950">
                  {integration.category}
                </h3>

                <div className="mt-5 flex flex-wrap gap-2">
                  {integration.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-500"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 rounded-[1.5rem] border border-slate-200 bg-white px-6 py-5 sm:px-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm font-medium text-slate-700">
              Existing systems don't need to be replaced.
            </p>

            <p className="text-sm text-slate-500">
              Dynava focuses on connecting the technology you already use.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}