const dataSources = [
  {
    number: "01",
    title: "Business Applications",
    description:
      "Bring information together from the systems teams use to manage customers, finance, operations, and other core business activities.",
    items: ["CRM", "ERP", "Finance", "HR"],
  },
  {
    number: "02",
    title: "Files & Documents",
    description:
      "Work with structured and unstructured information stored across files, reports, documents, and spreadsheets.",
    items: ["Spreadsheets", "Reports", "Documents", "CSV"],
  },
  {
    number: "03",
    title: "Databases",
    description:
      "Connect structured business data from operational databases and existing data environments.",
    items: ["SQL", "Cloud Databases", "Data Warehouses", "Data Lakes"],
  },
  {
    number: "04",
    title: "APIs & External Sources",
    description:
      "Bring relevant external information into the intelligence layer through APIs and connected services.",
    items: ["REST APIs", "Webhooks", "External Data", "Business Services"],
  },
];

export default function DataSources() {
  return (
    <section className="bg-slate-50 px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-600">
              Your data ecosystem
            </p>

            <h2 className="mt-5 max-w-xl text-4xl font-semibold tracking-[-0.045em] text-slate-950 sm:text-5xl">
              Your data already exists. We help make it useful.
            </h2>

            <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
              Business intelligence does not have to start with replacing
              existing systems. Dynava can work with the data and technology
              your organisation already relies on.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {dataSources.map((source) => (
              <article
                key={source.number}
                className="rounded-[1.75rem] border border-slate-200 bg-white p-7 sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-blue-600">
                    {source.number}
                  </span>

                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </div>

                <h3 className="mt-9 text-xl font-semibold tracking-tight text-slate-950">
                  {source.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {source.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {source.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-500"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 rounded-[1.5rem] border border-slate-200 bg-white px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p className="text-sm font-medium text-slate-700">
            Connect what matters.
          </p>

          <p className="text-sm text-slate-500">
            Existing systems can become part of a stronger intelligence
            ecosystem.
          </p>
        </div>
      </div>
    </section>
  );
}