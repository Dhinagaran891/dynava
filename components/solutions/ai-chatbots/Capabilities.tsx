const capabilities = [
  {
    number: "01",
    title: "Customer Assistants",
    description:
      "Help customers find information, understand services, and get answers without waiting for a member of your team.",
  },
  {
    number: "02",
    title: "Internal Knowledge Assistants",
    description:
      "Give employees a simpler way to search and interact with internal documents, policies, knowledge bases, and business information.",
  },
  {
    number: "03",
    title: "Support Assistants",
    description:
      "Handle common support questions and provide consistent responses while allowing your team to focus on more complex cases.",
  },
  {
    number: "04",
    title: "Lead & Enquiry Assistants",
    description:
      "Engage website visitors, answer initial questions, capture useful information, and help route enquiries to the right team.",
  },
];

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      className="bg-white px-6 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section introduction */}
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-600">
            What we build
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] text-slate-950 sm:text-5xl">
            Assistants designed for real business interactions.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We design conversational experiences around the information,
            workflows, and systems that matter to your organisation.
          </p>
        </div>

        {/* Capability cards */}
        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {capabilities.map((item) => (
            <article
              key={item.number}
              className="group rounded-3xl border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/40"
            >
              <span className="text-sm font-semibold text-slate-400">
                {item.number}
              </span>

              <h3 className="mt-8 text-2xl font-semibold tracking-[-0.03em] text-slate-950">
                {item.title}
              </h3>

              <p className="mt-4 text-base leading-7 text-slate-600">
                {item.description}
              </p>

              <div className="mt-8 h-px w-full bg-slate-100 transition group-hover:bg-blue-100" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}