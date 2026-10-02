import Link from "next/link";

const focusAreas = [
  "AI Assistants",
  "Knowledge Systems",
  "AI Workflows",
  "Business Applications",
];

export default function CTA() {
  return (
    <section className="bg-white px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 p-8 sm:p-10 lg:p-14">
          <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-emerald-100/50 blur-3xl" />

          <div className="relative grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-600">
                Explore the opportunity
              </p>

              <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl lg:text-6xl">
                Have a business process that needs a more tailored approach?
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                We can explore whether a custom AI application, intelligent
                workflow, knowledge system, or integrated business platform
                could help solve the problem.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {focusAreas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-600"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:pl-8">
              <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Start with the problem
                </p>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Tell us what your team is trying to improve, where the
                  current process becomes difficult, and what outcome you want
                  to achieve.
                </p>

                <Link
                  href="/contact"
                  className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  Discuss your workflow
                  <span className="ml-2">↗</span>
                </Link>

                <p className="mt-4 text-center text-xs leading-5 text-slate-400">
                  No predefined product required. We start by understanding
                  the business requirement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}