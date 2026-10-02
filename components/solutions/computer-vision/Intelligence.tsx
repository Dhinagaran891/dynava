const intelligenceStages = [
  {
    number: "01",
    title: "Capture",
    description:
      "Bring images, documents, video, camera feeds, and other visual sources into the workflow your business already uses.",
  },
  {
    number: "02",
    title: "Detect",
    description:
      "Identify objects, patterns, visual elements, text, anomalies, and other information that matters to the business process.",
  },
  {
    number: "03",
    title: "Extract",
    description:
      "Turn visual information into structured data using OCR, image analysis, classification, and other computer vision techniques.",
  },
  {
    number: "04",
    title: "Understand",
    description:
      "Give extracted information business context so teams and systems can understand what the visual data means.",
  },
  {
    number: "05",
    title: "Act",
    description:
      "Connect visual intelligence to workflows, alerts, decisions, and downstream systems where automation can create practical value.",
  },
];

export default function Intelligence() {
  return (
    <section className="bg-slate-950 px-6 py-24 text-white sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="lg:sticky lg:top-32">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-400">
              From vision to action
            </p>

            <h2 className="mt-5 max-w-xl text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
              Computer vision is more than image recognition.
            </h2>

            <p className="mt-6 max-w-lg text-lg leading-8 text-slate-400">
              Dynava connects visual data with the business workflows,
              decisions, and actions that create practical value.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-[0.14em] text-slate-500">
              <span>Visual Data</span>
              <span>→</span>
              <span>Context</span>
              <span>→</span>
              <span>Intelligence</span>
              <span>→</span>
              <span className="text-emerald-400">Action</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-4 top-4 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-blue-500/40 via-white/10 to-emerald-400/40 sm:block" />

            <div className="space-y-5">
              {intelligenceStages.map((stage, index) => (
                <div
                  key={stage.number}
                  className="relative grid gap-5 rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-7 transition hover:border-white/20 hover:bg-white/[0.05] sm:grid-cols-[34px_1fr] sm:gap-8 sm:p-8"
                >
                  <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-slate-950">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  </div>

                  <div>
                    <div className="flex flex-wrap items-baseline gap-3">
                      <span className="text-xs font-semibold tracking-[0.16em] text-blue-400">
                        {stage.number}
                      </span>

                      <h3 className="text-2xl font-semibold tracking-tight text-white">
                        {stage.title}
                      </h3>
                    </div>

                    <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
                      {stage.description}
                    </p>
                  </div>

                  {index < intelligenceStages.length - 1 && (
                    <div className="absolute -bottom-3 left-4 z-20 hidden h-6 w-px bg-emerald-400/30 sm:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}