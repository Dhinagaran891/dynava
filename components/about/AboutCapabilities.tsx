const capabilities = [
  {
    number: "01",
    title: "AI & Intelligence",
    description:
      "Intelligent applications, machine learning and AI-driven solutions designed around real operational needs.",
  },
  {
    number: "02",
    title: "Data & Analytics",
    description:
      "Data systems and analytical solutions that turn information into clearer decisions and measurable outcomes.",
  },
  {
    number: "03",
    title: "Digital Technology",
    description:
      "Modern software and digital solutions that connect technology with the way organizations work.",
  },
];

export default function AboutCapabilities() {
  return (
    <section
      aria-labelledby="about-capabilities-heading"
      className="
        relative
        border-t
        border-slate-200/70
        px-6
        py-24
        sm:px-8
        sm:py-28
        lg:px-12
        lg:py-36
      "
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p
            className="
              mb-7
              text-[11px]
              font-medium
              uppercase
              tracking-[0.28em]
              text-slate-500
              sm:text-xs
            "
          >
            AI · Data · Digital
          </p>

          <h2
            id="about-capabilities-heading"
            className="
              text-4xl
              font-medium
              leading-[1.04]
              tracking-[-0.04em]
              text-slate-950
              sm:text-5xl
              lg:text-6xl
            "
          >
            The capabilities
            <br />
            behind Dynava.
          </h2>
        </div>

        <div
          className="
            mt-16
            grid
            gap-px
            overflow-hidden
            rounded-3xl
            border
            border-slate-200
            bg-slate-200
            md:grid-cols-3
          "
        >
          {capabilities.map((capability) => (
            <article
              key={capability.number}
              className="
                bg-white
                p-7
                sm:p-9
                lg:p-10
              "
            >
              <span
                className="
                  text-xs
                  font-medium
                  tracking-[0.18em]
                  text-slate-400
                "
              >
                {capability.number}
              </span>

              <h3
                className="
                  mt-14
                  text-2xl
                  font-medium
                  tracking-[-0.025em]
                  text-slate-950
                "
              >
                {capability.title}
              </h3>

              <p
                className="
                  mt-5
                  text-sm
                  leading-6
                  text-slate-500
                  sm:text-base
                  sm:leading-7
                "
              >
                {capability.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}