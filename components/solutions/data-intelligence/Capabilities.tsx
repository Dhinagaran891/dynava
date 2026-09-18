const capabilityGroups = [
  {
    number: "01",
    title: "Data Foundation",
    description:
      "Create a reliable foundation for analytics and AI by bringing business data together and making it usable.",
    capabilities: [
      "Data integration",
      "Data transformation",
      "Data consolidation",
      "Data quality",
    ],
  },
  {
    number: "02",
    title: "Business Intelligence",
    description:
      "Turn business information into clear reporting and performance views that teams can use every day.",
    capabilities: [
      "KPI reporting",
      "Interactive dashboards",
      "Trend analysis",
      "Management reporting",
    ],
  },
  {
    number: "03",
    title: "Advanced Analytics",
    description:
      "Go beyond historical reporting to identify patterns, understand changes, and support forward-looking decisions.",
    capabilities: [
      "Forecasting",
      "Anomaly detection",
      "Predictive analytics",
      "Scenario analysis",
    ],
  },
  {
    number: "04",
    title: "AI Intelligence",
    description:
      "Make business data easier to explore and use through AI-assisted analysis and natural-language experiences.",
    capabilities: [
      "AI-generated insights",
      "Natural-language analytics",
      "Data copilots",
      "Intelligent reporting",
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
            From reliable data to intelligent analysis.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Dynava brings together data engineering, analytics, predictive
            modelling, and AI to create intelligence around the decisions that
            matter to your business.
          </p>
        </div>

        <div className="mt-16 overflow-hidden rounded-[2rem] border border-slate-200">
          {capabilityGroups.map((group, index) => (
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
          <span>Foundation</span>
          <span>Analytics</span>
          <span>Prediction</span>
          <span>AI</span>
        </div>
      </div>
    </section>
  );
}