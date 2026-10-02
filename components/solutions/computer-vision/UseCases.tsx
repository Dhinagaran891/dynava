const useCases = [
  {
    number: "01",
    title: "Document Intelligence",
    description:
      "Extract information from scanned documents, forms, records, and image-based files so teams can reduce manual data entry and processing.",
    flow: "Documents → OCR → Extraction → Structured Data",
  },
  {
    number: "02",
    title: "Visual Inspection",
    description:
      "Analyse images to identify defects, inconsistencies, anomalies, or other visual conditions that require attention.",
    flow: "Images → Analysis → Detection → Inspection",
  },
  {
    number: "03",
    title: "Asset & Property Inspection",
    description:
      "Use visual information to support inspections, identify conditions, and create more consistent records and reporting.",
    flow: "Images → Detection → Findings → Reports",
  },
  {
    number: "04",
    title: "Retail & Inventory",
    description:
      "Use visual analysis to understand products, shelves, stock conditions, and other physical information across retail environments.",
    flow: "Visual Data → Recognition → Analysis → Action",
  },
  {
    number: "05",
    title: "Video Intelligence",
    description:
      "Analyse video streams to identify relevant events, activities, or patterns and connect them with operational workflows.",
    flow: "Video → Detection → Events → Response",
  },
  {
    number: "06",
    title: "Visual Workflow Automation",
    description:
      "Connect computer vision outputs with business systems to trigger alerts, update records, support decisions, and automate repetitive processes.",
    flow: "Visual Input → Intelligence → Workflow → Action",
  },
];

export default function UseCases() {
  return (
    <section className="bg-slate-50 px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div className="lg:sticky lg:top-32">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-600">
              Business use cases
            </p>

            <h2 className="mt-5 max-w-xl text-4xl font-semibold tracking-[-0.045em] text-slate-950 sm:text-5xl">
              Turn visual information into practical business value.
            </h2>

            <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
              Computer vision becomes valuable when visual information can
              support real business processes, decisions, and actions.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {useCases.map((useCase) => (
              <article
                key={useCase.number}
                className="group rounded-[1.75rem] border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50 sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-blue-600">
                    {useCase.number}
                  </span>

                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 transition-transform duration-300 group-hover:scale-125" />
                </div>

                <h3 className="mt-10 text-2xl font-semibold tracking-tight text-slate-950">
                  {useCase.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {useCase.description}
                </p>

                <div className="mt-7 border-t border-slate-100 pt-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                    Vision flow
                  </p>

                  <p className="mt-2 text-xs font-medium leading-6 text-slate-600">
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