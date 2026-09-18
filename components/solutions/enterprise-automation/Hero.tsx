import Link from "next/link";

const workflowSteps = [
  {
    label: "Trigger",
    detail: "A request enters the workflow",
  },
  {
    label: "Process",
    detail: "Information is gathered and transformed",
  },
  {
    label: "Decide",
    detail: "Rules or AI determine the next step",
  },
  {
    label: "Act",
    detail: "The right system or team is updated",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white px-6 pb-20 pt-32 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28 lg:pt-40">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-180px] top-[5%] h-[420px] w-[420px] rounded-full bg-blue-100/40 blur-3xl" />

        <div className="absolute bottom-[-180px] right-[-120px] h-[420px] w-[420px] rounded-full bg-emerald-100/40 blur-3xl" />

        <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(#0f172a_1px,transparent_1px),linear-gradient(90deg,#0f172a_1px,transparent_1px)] [background-size:48px_48px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Intro */}
        <div className="max-w-4xl">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-600">
            Enterprise Automation
          </p>

          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-[-0.055em] text-slate-950 sm:text-6xl lg:text-7xl">
            Automate the work
            <span className="block bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
              between your systems.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
            Dynava connects people, processes, data, and business systems to
            reduce manual work and create smoother, more connected workflows.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-slate-950 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Talk to Dynava
              <span className="ml-2">↗</span>
            </Link>

            <a
              href="#workflow"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:text-slate-950"
            >
              Explore automation
            </a>
          </div>
        </div>

        {/* Workflow visual */}
        <div
          id="workflow"
          className="relative mt-20 overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 p-6 sm:p-8 lg:mt-24 lg:p-10"
        >
          <div className="mb-8 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Workflow orchestration
              </p>

              <p className="mt-2 text-sm font-medium text-slate-700">
                From trigger to completed action
              </p>
            </div>

            <div className="hidden h-10 w-10 items-center justify-center rounded-full border border-emerald-200 bg-white sm:flex">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </div>
          </div>

          <div className="grid gap-3 md:grid-cols-4">
            {workflowSteps.map((step, index) => (
              <div key={step.label} className="relative">
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-blue-600">
                      0{index + 1}
                    </span>

                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  </div>

                  <h2 className="mt-8 text-xl font-semibold tracking-tight text-slate-950">
                    {step.label}
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {step.detail}
                  </p>
                </div>

                {index < workflowSteps.length - 1 && (
                  <div className="pointer-events-none absolute -right-2 top-1/2 z-10 hidden -translate-y-1/2 md:block">
                    <span className="text-lg text-slate-300">→</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-slate-200 pt-6">
            <span className="text-xs font-medium text-slate-400">
              AI where useful
            </span>

            <span className="text-xs font-medium text-slate-400">
              Rules where appropriate
            </span>

            <span className="text-xs font-medium text-slate-400">
              Human oversight where needed
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}