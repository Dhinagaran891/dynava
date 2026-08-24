import Link from "next/link";

export default function AboutCTA() {
  return (
    <section
      aria-labelledby="about-cta-heading"
      className="
        relative
        overflow-hidden
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
      {/* Subtle Dynava brand atmosphere */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          -z-10
          h-[500px]
          w-[800px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-blue-500/[0.035]
          blur-[130px]
        "
      />

      <div className="mx-auto max-w-7xl">

        {/* Main CTA */}
        <div
          className="
            grid
            gap-12
            lg:grid-cols-[1.5fr_0.5fr]
            lg:items-end
            lg:gap-20
          "
        >
          {/* Heading */}
          <div>
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
              The next chapter
            </p>

            <h2
              id="about-cta-heading"
              className="
                max-w-4xl
                text-5xl
                font-medium
                leading-[0.98]
                tracking-[-0.05em]
                text-slate-950
                sm:text-6xl
                lg:text-7xl
              "
            >
              Let's build
              <br />
              what's next.
            </h2>
          </div>

          {/* Supporting copy + CTA */}
          <div className="max-w-md lg:pb-2">
            <p
              className="
                text-base
                leading-7
                text-slate-600
                sm:text-lg
                sm:leading-8
              "
            >
              Whether you're exploring an idea, solving a business
              challenge, or looking at what's possible with emerging
              technology, start a conversation with Dynava.
            </p>

            {/* Dynava CTA */}
            <Link
              href="/contact"
              className="
                group
                mt-8
                inline-flex
                items-center
                gap-4
                text-base
                font-medium
                text-slate-950
              "
            >
              <span
                className="
                  relative
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#126BFF]/40
                  bg-[#126BFF]/[0.06]
                  text-[#126BFF]
                  transition-all
                  duration-300
                  group-hover:border-[#00B889]
                  group-hover:bg-[#00B889]
                  group-hover:text-white
                "
              >
                <span
                  aria-hidden="true"
                  className="
                    text-lg
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  →
                </span>
              </span>

              <span
                className="
                  transition-colors
                  duration-300
                  group-hover:text-[#126BFF]
                "
              >
                Talk to Dynava
              </span>
            </Link>
          </div>
        </div>

        {/* Closing divider */}
        <div
          className="
            mt-24
            border-t
            border-slate-200
            pt-7
            sm:mt-28
            sm:flex
            sm:items-center
            sm:justify-between
          "
        >
          <p
            className="
              text-[10px]
              font-medium
              uppercase
              tracking-[0.3em]
              text-slate-500
              sm:text-xs
            "
          >
            Intelligence for Every Enterprise
          </p>

          <p
            className="
              mt-3
              text-xs
              text-slate-500
              sm:mt-0
            "
          >
            Dynava
          </p>
        </div>

      </div>
    </section>
  );
}