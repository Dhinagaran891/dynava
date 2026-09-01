export default function CareersValues() {
  const values = [
    {
      number: "01",
      title: "Think deeply.",
      description:
        "Understand the problem before reaching for the technology. Good solutions begin with the right questions.",
    },
    {
      number: "02",
      title: "Build intelligently.",
      description:
        "Combine engineering, data and AI to create solutions that are useful, reliable and built for real-world needs.",
    },
    {
      number: "03",
      title: "Keep evolving.",
      description:
        "Technology changes quickly. Curiosity, continuous learning and adaptability keep good work moving forward.",
    },
  ];

  return (
    <section
      aria-labelledby="careers-values-heading"
      className="
        relative
        overflow-hidden
        border-t
        border-slate-200/70
        px-6
        py-20
        sm:px-8
        sm:py-24
        lg:px-12
        lg:py-28
      "
    >
      <div className="mx-auto max-w-7xl">

        {/* Section introduction */}
        <div className="max-w-3xl">
          <p
            className="
              mb-6
              text-[11px]
              font-medium
              uppercase
              tracking-[0.3em]
              text-[#126BFF]
              sm:text-xs
            "
          >
            Curiosity with purpose
          </p>

          <h2
            id="careers-values-heading"
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
            Good technology starts
            <br />
            with good thinking.
          </h2>

          <p
            className="
              mt-7
              max-w-2xl
              text-base
              leading-7
              text-slate-600
              sm:text-lg
              sm:leading-8
            "
          >
            We value people who think deeply, build intelligently,
            and keep evolving with technology.
          </p>
        </div>

        {/* Values */}
        <div
          className="
            mt-16
            grid
            border-t
            border-slate-200
            sm:grid-cols-3
          "
        >
          {values.map((value) => (
            <article
              key={value.number}
              className="
                relative
                border-b
                border-slate-200
                py-8
                sm:border-b-0
                sm:border-r
                sm:px-8
                sm:py-9
                first:sm:pl-0
                last:sm:border-r-0
                last:sm:pr-0
              "
            >
              {/* Dynava accent */}
              <span
                aria-hidden="true"
                className="
                  absolute
                  left-0
                  top-0
                  h-px
                  w-10
                  bg-[#126BFF]
                  sm:left-8
                  first:sm:left-0
                  last:sm:left-auto
                "
              />

              <span
                className="
                  text-[10px]
                  font-medium
                  tracking-[0.2em]
                  text-[#126BFF]
                "
              >
                {value.number}
              </span>

              <h3
                className="
                  mt-6
                  text-2xl
                  font-medium
                  tracking-[-0.025em]
                  text-slate-950
                "
              >
                {value.title}
              </h3>

              <p
                className="
                  mt-4
                  max-w-sm
                  text-sm
                  leading-6
                  text-slate-600
                  sm:text-base
                  sm:leading-7
                "
              >
                {value.description}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}