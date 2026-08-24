export default function AboutDirection() {
  return (
    <section
      aria-labelledby="about-direction-heading"
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
      {/* Subtle background atmosphere */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[-180px]
          top-1/2
          -z-10
          h-[520px]
          w-[520px]
          -translate-y-1/2
          rounded-full
          bg-emerald-500/[0.035]
          blur-[120px]
        "
      />

      <div className="mx-auto max-w-7xl">
        <div
          className="
            grid
            gap-14
            lg:grid-cols-[0.75fr_1.5fr]
            lg:gap-24
          "
        >
          {/* LEFT COLUMN */}
          <div>
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

            {/* AI / Mathematics / Data visual */}
            <div
              aria-hidden="true"
              className="
                direction-visual
                mt-10
                flex
                h-[210px]
                w-[210px]
                items-center
                justify-center
              "
            >
              <svg
                viewBox="0 0 240 240"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-full w-full"
              >
                <defs>
                  <linearGradient
                    id="dynava-direction-gradient"
                    x1="70"
                    y1="170"
                    x2="175"
                    y2="65"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#126BFF" />
                    <stop offset="1" stopColor="#00B889" />
                  </linearGradient>
                </defs>

                {/* Mathematical coordinate field */}
                <path
                  d="M32 120H208"
                  stroke="#0F172A"
                  strokeOpacity="0.10"
                  strokeWidth="1"
                />

                <path
                  d="M120 32V208"
                  stroke="#0F172A"
                  strokeOpacity="0.10"
                  strokeWidth="1"
                />

                {/* Grid */}
                <path
                  d="M55 55H185M55 85H185M55 155H185M55 185H185"
                  stroke="#126BFF"
                  strokeOpacity="0.07"
                  strokeWidth="1"
                />

                <path
                  d="M55 55V185M85 55V185M155 55V185M185 55V185"
                  stroke="#126BFF"
                  strokeOpacity="0.07"
                  strokeWidth="1"
                />

                {/* Outer mathematical orbit */}
                <circle
                  cx="120"
                  cy="120"
                  r="82"
                  stroke="#0F172A"
                  strokeOpacity="0.14"
                  strokeWidth="1"
                />

                <circle
                  cx="120"
                  cy="120"
                  r="54"
                  stroke="#00B889"
                  strokeOpacity="0.16"
                  strokeWidth="1"
                />

                {/* Mathematical curve */}
                <path
                  d="
                    M42 157
                    C66 157 72 131 91 131
                    C111 131 114 88 136 88
                    C157 88 160 108 181 108
                    C194 108 199 94 203 81
                  "
                  stroke="#126BFF"
                  strokeOpacity="0.65"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />

                {/* Neural network / AI connections */}
                <path
                  d="M61 82L96 105L120 120L153 101L184 137"
                  stroke="#0F172A"
                  strokeOpacity="0.48"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />

                <path
                  d="M61 82L88 153L120 120L153 101L184 137"
                  stroke="url(#dynava-direction-gradient)"
                  strokeOpacity="0.55"
                  strokeWidth="1"
                  strokeLinecap="round"
                />

                <path
                  d="M96 105L88 153"
                  stroke="#0F172A"
                  strokeOpacity="0.25"
                  strokeWidth="1"
                />

                {/* Outer data nodes */}
                <circle
                  cx="61"
                  cy="82"
                  r="4"
                  fill="#0F172A"
                  fillOpacity="0.72"
                />

                <circle
                  cx="88"
                  cy="153"
                  r="3.5"
                  fill="#126BFF"
                  fillOpacity="0.8"
                />

                <circle
                  cx="184"
                  cy="137"
                  r="4"
                  fill="#00B889"
                  fillOpacity="0.9"
                />

                <circle
                  cx="203"
                  cy="81"
                  r="3"
                  fill="#126BFF"
                  fillOpacity="0.65"
                />

                {/* Inner AI nodes */}
                <circle
                  cx="96"
                  cy="105"
                  r="4"
                  fill="#126BFF"
                />

                <circle
                  cx="153"
                  cy="101"
                  r="4"
                  fill="#00B889"
                />

                {/* Central intelligence node */}
                <circle
                  cx="120"
                  cy="120"
                  r="15"
                  fill="white"
                  stroke="#126BFF"
                  strokeOpacity="0.28"
                  strokeWidth="1"
                />

                <circle
                  cx="120"
                  cy="120"
                  r="7"
                  fill="url(#dynava-direction-gradient)"
                />

                <circle
                  cx="120"
                  cy="120"
                  r="3"
                  fill="white"
                  fillOpacity="0.9"
                />

                {/* Small mathematical points */}
                <circle
                  cx="45"
                  cy="120"
                  r="2"
                  fill="#0F172A"
                  fillOpacity="0.35"
                />

                <circle
                  cx="195"
                  cy="120"
                  r="2"
                  fill="#00B889"
                  fillOpacity="0.55"
                />

                <circle
                  cx="120"
                  cy="45"
                  r="2"
                  fill="#126BFF"
                  fillOpacity="0.45"
                />

                <circle
                  cx="120"
                  cy="195"
                  r="2"
                  fill="#0F172A"
                  fillOpacity="0.3"
                />
              </svg>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="max-w-4xl">
            <h2
              id="about-direction-heading"
              className="
                max-w-4xl
                text-4xl
                font-medium
                leading-[1.04]
                tracking-[-0.04em]
                text-slate-950
                sm:text-5xl
                lg:text-6xl
              "
            >
              Technology will keep changing.
              <br />
              The way businesses use it will too.
            </h2>

            <p
              className="
                mt-9
                max-w-3xl
                text-base
                leading-7
                text-slate-500
                sm:text-lg
                sm:leading-8
              "
            >
              Dynava is being built to evolve with that change —
              developing capabilities across AI, data and digital
              technology while staying focused on practical outcomes.
            </p>

            {/* Direction marker */}
            <div
              className="
                mt-16
                border-t
                border-slate-200
                pt-7
                sm:mt-20
                sm:flex
                sm:items-end
                sm:justify-between
              "
            >
              <div>
                <p
                  className="
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-[0.25em]
                    text-slate-400
                  "
                >
                  The journey
                </p>

                <p
                  className="
                    mt-3
                    text-xl
                    font-medium
                    tracking-[-0.02em]
                    text-slate-950
                  "
                >
                  Building the foundation.
                </p>
              </div>

              <span
                className="
                  mt-6
                  text-sm
                  font-medium
                  tracking-[0.12em]
                  text-slate-400
                  sm:mt-0
                "
              >
                2026 →
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}