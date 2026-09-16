import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-6 py-20">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-140px] top-[15%] h-[360px] w-[360px] rounded-full bg-blue-100/40 blur-3xl" />

        <div className="absolute bottom-[-160px] right-[-100px] h-[420px] w-[420px] rounded-full bg-emerald-100/40 blur-3xl" />

        <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(#0f172a_1px,transparent_1px),linear-gradient(90deg,#0f172a_1px,transparent_1px)] [background-size:48px_48px]" />
      </div>

      <section className="relative z-10 mx-auto w-full max-w-3xl text-center">
        {/* Status label */}
        <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-emerald-200 bg-emerald-50/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          Feature in progress
        </div>

        {/* 404 visual */}
        <div className="relative select-none">
          <div className="text-[clamp(8rem,24vw,15rem)] font-black leading-none tracking-[-0.1em] text-slate-950">
            4
            <span className="bg-gradient-to-br from-blue-600 via-blue-500 to-emerald-500 bg-clip-text text-transparent">
              0
            </span>
            4
          </div>

          <div className="pointer-events-none absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-200/60 sm:h-36 sm:w-36" />
        </div>

        {/* Main message */}
        <h1 className="mt-8 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">
          Something valuable is on the way.
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-slate-600">
          This feature is currently being prepared by Team Dynava. We are
          working to make the experience useful, reliable, and ready for you.
        </p>

        <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-500">
          In the meantime, you can explore our other capabilities or get in
          touch with our team.
        </p>

        {/* Actions */}
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:w-auto"
          >
            Explore Dynava
            <span className="ml-2">↗</span>
          </Link>

          <Link
            href="/contact"
            className="inline-flex w-full items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-3.5 text-sm font-semibold text-slate-700 transition duration-300 hover:border-emerald-500 hover:text-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 sm:w-auto"
          >
            Talk to our team
          </Link>
        </div>

        {/* Brand footer */}
        <div className="mt-20 border-t border-slate-100 pt-7">
          <p className="text-lg font-semibold tracking-[-0.03em] text-slate-950">
            Dynava<span className="text-emerald-500">.</span>
          </p>

          <p className="mt-2 text-xs tracking-wide text-slate-400">
            Practical AI, Data & Digital Transformation
          </p>
        </div>
      </section>
    </main>
  );
}