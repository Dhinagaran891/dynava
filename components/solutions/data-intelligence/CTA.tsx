import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-white px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem] bg-slate-950 px-7 py-16 sm:px-10 sm:py-20 lg:px-16">
          <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-40 left-1/3 h-80 w-80 rounded-full bg-emerald-500/15 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-400">
                Start with your data
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
                Have data that could be working harder for your business?
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
                Tell us what data you have, what questions you need to answer,
                or where reporting and analysis currently create friction. We
                can explore what a practical intelligence solution could look
                like.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex w-fit items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-emerald-50"
            >
              Talk to Dynava
              <span className="ml-2">↗</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}