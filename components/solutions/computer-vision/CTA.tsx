import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-white px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 px-7 py-16 sm:px-10 sm:py-20 lg:px-16">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-100/70 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-emerald-100/70 blur-3xl" />

          <div className="relative grid gap-12 lg:grid-cols-[1fr_0.45fr] lg:items-end">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-600">
                Explore the opportunity
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-6xl">
                Have a visual process that could work smarter?
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Whether you are working with documents, images, inspections,
                video, or another visual workflow, we can explore where
                computer vision could create practical value for your
                business.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Images",
                  "Documents",
                  "Inspections",
                  "Video",
                  "Automation",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-600"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:justify-self-end">
              <div className="mb-5 max-w-xs">
                <p className="text-sm leading-6 text-slate-500">
                  Start with the process, not the technology. We can explore
                  whether computer vision is actually the right fit.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex w-fit items-center justify-center rounded-full bg-slate-950 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Discuss your workflow
                <span className="ml-2">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}