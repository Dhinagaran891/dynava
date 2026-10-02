const capabilityGroups = [
  {
    number: "01",
    title: "Visual Data Processing",
    description:
      "Turn images and other visual inputs into usable information that can support business processes and decisions.",
    capabilities: [
      "Image classification",
      "Object detection",
      "Image analysis",
      "Visual data extraction",
    ],
  },
  {
    number: "02",
    title: "Image Intelligence",
    description:
      "Analyse visual information to identify patterns, objects, conditions, and other details that matter to the business.",
    capabilities: [
      "Visual inspection",
      "Pattern recognition",
      "Anomaly detection",
      "Image comparison",
    ],
  },
  {
    number: "03",
    title: "Document & OCR Intelligence",
    description:
      "Extract structured information from documents, scanned records, forms, and other image-based content.",
    capabilities: [
      "OCR",
      "Document extraction",
      "Form processing",
      "Document classification",
    ],
  },
  {
    number: "04",
    title: "Video & Workflow Intelligence",
    description:
      "Connect visual analysis with business workflows to support monitoring, alerts, reporting, and practical automation.",
    capabilities: [
      "Video analytics",
      "Event detection",
      "Visual monitoring",
      "Workflow integration",
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
            From visual data to intelligent action.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Dynava combines computer vision, image analysis, OCR, and visual
            intelligence to help businesses extract information and automate
            processes built around visual data.
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
          <span>Vision</span>
          <span>Images</span>
          <span>Documents</span>
          <span>Video</span>
        </div>
      </div>
    </section>
  );
}