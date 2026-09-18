import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white px-6 pb-24 pt-32 sm:px-8 lg:px-12 lg:pb-32 lg:pt-40">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-180px] top-[10%] h-[420px] w-[420px] rounded-full bg-blue-100/40 blur-3xl" />

        <div className="absolute bottom-[-180px] right-[-120px] h-[420px] w-[420px] rounded-full bg-emerald-100/40 blur-3xl" />

        <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(#0f172a_1px,transparent_1px),linear-gradient(90deg,#0f172a_1px,transparent_1px)] [background-size:48px_48px]" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-600">
            AI Chatbots
          </p>

          {/* Heading */}
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-[-0.055em] text-slate-950 sm:text-6xl lg:text-7xl">
            Intelligent conversations,
            <span className="block bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
              built around your business.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
            Dynava designs AI-powered assistants that help businesses answer
            questions, support customers, surface knowledge, and streamline
            everyday interactions.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-slate-950 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Talk to Dynava
              <span className="ml-2">↗</span>
            </Link>

            <a
              href="#capabilities"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:text-slate-950"
            >
              Explore capabilities
            </a>
          </div>
        </div>

        {/* Three-part value strip */}
        <div className="mt-20 grid gap-px overflow-hidden rounded-3xl border border-slate-200 bg-slate-200 sm:grid-cols-3">
          <div className="bg-white p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Understand
            </p>

            <p className="mt-3 text-lg font-semibold tracking-tight text-slate-950">
              Your business context
            </p>
          </div>

          <div className="bg-white p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Connect
            </p>

            <p className="mt-3 text-lg font-semibold tracking-tight text-slate-950">
              Your knowledge & systems
            </p>
          </div>

          <div className="bg-white p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Improve
            </p>

            <p className="mt-3 text-lg font-semibold tracking-tight text-slate-950">
              Everyday interactions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}