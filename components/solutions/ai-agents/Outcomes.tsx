const outcomes = [
  {
    title: "Reduce manual coordination",
    description:
      "Let AI agents handle defined coordination tasks across workflows so teams can spend more time on work that requires human judgement.",
  },
  {
    title: "Accelerate repetitive workflows",
    description:
      "Move routine multi-step processes forward faster by combining information gathering, reasoning, and defined actions.",
  },
  {
    title: "Connect disconnected systems",
    description:
      "Help information and actions move between the business applications involved in a workflow.",
  },
  {
    title: "Give teams more time",
    description:
      "Reduce the operational effort spent on repetitive tasks and allow people to focus on higher-value activities.",
  },
];

export default function Outcomes() {
  return (
    <section className="bg-slate-950 px-6 py-24 text-white sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Introduction */}
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-400">
            Business value
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
            Turn complex workflows into more connected operations.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            The goal is not autonomy for its own sake. It is using AI where it
            can make business processes simpler, faster, and more connected.
          </p>
        </div>

        {/* Outcomes */}
        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2">
          {outcomes.map((item) => (
            <div
              key={item.title}
              className="bg-slate-950 p-8 transition duration-300 hover:bg-slate-900 sm:p-10"
            >
              <h3 className="text-xl font-semibold tracking-tight">
                {item.title}
              </h3>

              <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}