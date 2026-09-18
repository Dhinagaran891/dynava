import Link from "next/link";

const dataSources = [
  "CRM",
  "ERP",
  "Finance",
  "Spreadsheets",
  "Documents",
  "APIs",
];

const intelligenceLayers = [
  "Connect",
  "Understand",
  "Analyse",
  "Decide",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white px-6 pb-20 pt-44 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28 lg:pt-48">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-180px] top-[5%] h-[420px] w-[420px] rounded-full bg-blue-100/40 blur-3xl" />

        <div className="absolute bottom-[-180px] right-[-120px] h-[420px] w-[420px] rounded-full bg-emerald-100/40 blur-3xl" />

        <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(#0f172a_1px,transparent_1px),linear-gradient(90deg,#0f172a_1px,transparent_1px)] [background-size:48px_48px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-600">
              Data Intelligence
            </p>

            <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[1.05] tracking-[-0.055em] text-slate-950 sm:text-6xl lg:text-7xl">
              Turn fragmented data
              <span className="block bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
                into trusted intelligence.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              Dynava helps businesses connect, understand, and use their data
              to uncover insights, improve decisions, and build stronger
              foundations for AI.
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
                href="#intelligence"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:text-slate-950"
              >
                Explore intelligence
              </a>
            </div>
          </div>

          <div
            id="intelligence"
            className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 p-6 sm:p-8"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Data ecosystem
                </p>

                <p className="mt-2 text-sm font-medium text-slate-700">
                  From business data to actionable intelligence
                </p>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-emerald-200 bg-white">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </div>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {dataSources.map((source, index) => (
                <div
                  key={source}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-blue-600">
                      0{index + 1}
                    </span>

                    <span className="h-2 w-2 rounded-full bg-slate-300" />
                  </div>

                  <p className="mt-7 text-sm font-semibold text-slate-800">
                    {source}
                  </p>
                </div>
              ))}
            </div>

            <div className="my-7 flex items-center justify-center">
              <div className="h-10 w-px bg-gradient-to-b from-blue-200 to-emerald-300" />
            </div>

            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-950 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Dynava intelligence layer
              </p>

              <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {intelligenceLayers.map((layer, index) => (
                  <div
                    key={layer}
                    className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-4 text-center"
                  >
                    <span className="block text-[10px] font-semibold text-emerald-400">
                      0{index + 1}
                    </span>

                    <span className="mt-2 block text-xs font-medium text-slate-300">
                      {layer}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex items-center justify-center gap-3 text-xs font-medium text-slate-400">
              <span>Data</span>
              <span>→</span>
              <span>Insight</span>
              <span>→</span>
              <span className="text-emerald-600">Decision</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}