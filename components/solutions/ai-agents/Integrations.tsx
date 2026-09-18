const integrations = [
  "CRM systems",
  "Business applications",
  "Databases",
  "Documents & knowledge bases",
  "Communication platforms",
  "Business APIs",
];

export default function Integrations() {
  return (
    <section className="bg-white px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        {/* Introduction */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-600">
            Connected systems
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] text-slate-950 sm:text-5xl">
            Agents become useful when they can work across your systems.
          </h2>
        </div>

        {/* Integrations */}
        <div>
          <p className="text-lg leading-8 text-slate-600">
            We connect agents with the information, tools, and applications
            they need to perform their defined role within a business
            workflow.
          </p>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {integrations.map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-4 rounded-2xl border border-slate-200 p-5 transition duration-300 hover:border-blue-200 hover:shadow-sm"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-950 text-xs font-semibold text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="text-sm font-semibold text-slate-800">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}