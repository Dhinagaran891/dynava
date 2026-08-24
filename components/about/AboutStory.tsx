export default function AboutStory() {
  return (
    <section
      aria-labelledby="about-story-heading"
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
        <div
          className="
            grid
            gap-14
            lg:grid-cols-[0.8fr_1.4fr]
            lg:gap-24
          "
        >
          {/* Section label */}
          <div>
            <p
              className="
                text-[11px]
                font-medium
                uppercase
                tracking-[0.28em]
                text-slate-500
                sm:text-xs
              "
            >
              Our direction
            </p>
          </div>

          {/* Story */}
          <div className="max-w-4xl">
            <h2
              id="about-story-heading"
              className="
                max-w-3xl
                text-4xl
                font-medium
                leading-[1.05]
                tracking-[-0.04em]
                text-slate-950
                sm:text-5xl
                lg:text-6xl
              "
            >
              Built for what comes next.
            </h2>

            <div
              className="
                mt-10
                max-w-3xl
                space-y-6
                text-base
                leading-7
                text-slate-500
                sm:text-lg
                sm:leading-8
              "
            >
              <p>
                Artificial intelligence is changing how organizations
                operate, make decisions and create new possibilities.
              </p>

              <p>
                Dynava was established with a long-term view of that
                transformation — building a technology company capable
                of working across AI, data and digital systems as these
                technologies continue to evolve.
              </p>

              <p>
                From intelligent applications and automation to
                data-driven systems and digital products, Dynava focuses
                on turning emerging capabilities into technology with a
                clear place within the way an organization operates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}