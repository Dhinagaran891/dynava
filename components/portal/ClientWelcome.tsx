interface ClientWelcomeProps {
  organizationName: string;
}

export default function ClientWelcome({
  organizationName,
}: ClientWelcomeProps) {
  const steps = [
    {
      number: "01",
      title: "Organization",
      description: "Tell us about your business.",
    },
    {
      number: "02",
      title: "AI Readiness",
      description: "Assess your current AI capabilities.",
    },
    {
      number: "03",
      title: "Insights",
      description: "Understand your readiness and key gaps.",
    },
    {
      number: "04",
      title: "Recommendations",
      description: "Identify practical next steps.",
    },
  ];

  return (
    <section aria-labelledby="client-welcome-heading">
      <div className="max-w-4xl">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#126BFF]">
          Welcome to Dynava
        </p>

        <h1
          id="client-welcome-heading"
          className="mt-6 text-4xl font-medium leading-[1.05] tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-6xl"
        >
          Let&apos;s understand where{" "}
          <span className="text-[#126BFF]">{organizationName}</span> stands
          today.
        </h1>

        <p className="mt-7 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
          We&apos;ll start by understanding your organization, assess your
          current AI readiness, and identify where intelligent technology can
          create meaningful business impact.
        </p>
      </div>

      <div className="mt-16 border-t border-slate-200">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <article
              key={step.number}
              className="border-b border-slate-200 py-8 sm:px-6 lg:border-b-0 lg:border-r first:lg:pl-0 last:lg:border-r-0 last:lg:pr-0"
            >
              <span className="text-[10px] font-medium tracking-[0.2em] text-[#126BFF]">
                {step.number}
              </span>

              <h2 className="mt-5 text-xl font-medium tracking-[-0.02em] text-slate-950">
                {step.title}
              </h2>

              <p className="mt-3 max-w-xs text-sm leading-6 text-slate-600">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-12 flex items-center justify-between border-t border-slate-200 pt-8">
        <p className="max-w-md text-sm leading-6 text-slate-500">
          Your assessment can be completed at your own pace. Your progress will
          be saved as you work.
        </p>

        <button
          type="button"
          className="group flex shrink-0 items-center gap-4 border border-[#126BFF] px-5 py-3.5 text-sm font-medium text-slate-950 transition-colors hover:border-[#00B889] hover:bg-white"
        >
          Start assessment
          <span
            aria-hidden="true"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[#126BFF] text-[#126BFF] transition-colors group-hover:border-[#00B889] group-hover:text-[#00B889]"
          >
            →
          </span>
        </button>
      </div>
    </section>
  );
}