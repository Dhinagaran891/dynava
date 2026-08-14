"use client";

import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-[#F4F5F7]"
    >
      {/* Subtle atmosphere */}
      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-1/2
          h-[360px]
          w-[360px]
          -translate-y-1/2
          rounded-full
          bg-[#18CDEB]/10
          blur-[110px]

          sm:h-[420px]
          sm:w-[420px]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1400px]
          px-6
          py-20

          sm:px-8
          sm:py-24

          md:px-12
          md:py-28

          lg:px-20
          lg:py-32
        "
      >
        <div
          className="
            grid
            grid-cols-1
            gap-12

            sm:gap-14

            lg:grid-cols-[1fr_400px]
            lg:items-end
            lg:gap-20
          "
        >
          {/* ─────────────────────────
              LEFT CONTENT
          ───────────────────────── */}
          <div>
            <p
              className="
                mb-6
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.38em]
                text-[#08B98A]

                sm:mb-7
                sm:text-[12px]

                lg:text-[13px]
              "
            >
              LET'S TALK
            </p>

            <h2
              className="
                max-w-[820px]
                text-[42px]
                font-medium
                leading-[1.04]
                tracking-[-0.04em]
                text-[#111827]

                sm:text-[50px]

                md:text-[58px]

                lg:text-[68px]
              "
            >
              Have an AI opportunity
              <br className="hidden sm:block" />
              worth exploring?
            </h2>

            <p
              className="
                mt-6
                max-w-[520px]
                text-[15px]
                leading-[1.7]
                text-[#4B5563]

                sm:mt-7
                sm:text-[16px]

                md:max-w-[560px]
                md:text-[17px]

                lg:mt-8
                lg:text-[18px]
              "
            >
              Tell us where your business is today. We'll help you
              identify where intelligence can create meaningful value
              next.
            </p>
          </div>

          {/* ─────────────────────────
              CTA CARD
          ───────────────────────── */}
          <div className="w-full lg:flex lg:justify-end">
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.025 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="
                group
                flex
                min-h-[170px]
                w-full
                max-w-[420px]
                flex-col
                justify-between
                rounded-[26px]
                bg-gradient-to-br
                from-[#087BFF]
                to-[#08C995]
                p-6
                text-white
                shadow-[0_20px_60px_rgba(0,0,0,0.12)]

                sm:min-h-[180px]
                sm:rounded-[28px]
                sm:p-7

                md:min-h-[190px]
                md:p-8

                lg:min-h-[205px]
                lg:max-w-[400px]
                lg:p-9
              "
            >
              <span
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.3em]
                  text-white/75

                  sm:text-[11px]
                "
              >
                NEXT STEP
              </span>

              <div className="mt-10 flex items-end justify-between gap-5 sm:mt-12">
                <span
                  className="
                    max-w-[210px]
                    text-[23px]
                    font-medium
                    leading-[1.1]
                    tracking-[-0.025em]

                    sm:text-[25px]

                    md:text-[27px]
                  "
                >
                  Start a Conversation
                </span>

                <span
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-white/15
                    text-[20px]
                    transition-transform
                    duration-300
                    group-hover:translate-x-1

                    sm:h-12
                    sm:w-12
                    sm:text-[22px]
                  "
                >
                  →
                </span>
              </div>
            </motion.a>
          </div>
        </div>

        {/* Divider */}
        <div
          className="
            mt-16
            h-px
            w-full
            bg-[#111827]/10

            sm:mt-20

            md:mt-24

            lg:mt-28
          "
        />
      </div>
    </section>
  );
}