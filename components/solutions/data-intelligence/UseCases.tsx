const useCases = [
  {
    number: "01",
    title: "Management Intelligence",
    description:
      "Bring key business metrics together so leadership teams can understand performance, trends, and areas that need attention.",
    flow: "Business Data → KPIs → Insights → Decisions",
  },
  {
    number: "02",
    title: "Sales Intelligence",
    description:
      "Understand pipeline performance, customer behaviour, conversion patterns, and opportunities across the sales process.",
    flow: "CRM Data → Analysis → Patterns → Action",
  },
  {
    number: "03",
    title: "Financial Intelligence",
    description:
      "Combine financial information to support performance analysis, forecasting, planning, and better visibility into business drivers.",
    flow: "Financial Data → Analysis → Forecast → Planning",
  },
  {
    number: "04",
    title: "Operational Intelligence",
    description:
      "Identify bottlenecks, recurring patterns, and performance changes across operational processes and teams.",
    flow: "Operations → Monitoring → Anomalies → Improvement",
  },
  {
    number: "05",
    title: "Customer Analytics",
    description:
      "Understand customer segments, behaviour, engagement, retention, and the factors influencing customer relationships.",
    flow: "Customer Data → Segmentation → Behaviour → Insight",
  },
  {
    number: "06",
    title: "Forecasting & Planning",
    description:
      "Use historical patterns and predictive models to support demand, revenue, resource, and operational planning.",
    flow: "Historical Data → Model → Forecast → Plan",
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
              Give every part of the business a clearer view.
            </h2>

            <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
              Data becomes valuable when it helps teams answer important
              business questions and make better decisions.
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
                    Intelligence flow
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