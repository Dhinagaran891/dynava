import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-white px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-slate-200 bg-slate-50 px-7 py-14 text-center sm:px-12 sm:py-20">
        {/* Eyebrow */}
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-600">
          Start a conversation
        </p>

        {/* Heading */}
        <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.045em] text-slate-950 sm:text-5xl">
          Have a workflow worth improving?
        </h2>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          Tell us where your team spends time on repetitive or multi-step
          work. We can explore whether an AI agent could help move that
          workflow forward.
        </p>

        {/* CTA */}
        <div className="mt-9">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-slate-950 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Talk to Dynava
            <span className="ml-2">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}