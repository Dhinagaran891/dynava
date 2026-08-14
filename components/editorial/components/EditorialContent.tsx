"use client";

import { motion } from "framer-motion";
import type { EditorialStage } from "../types";

interface EditorialContentProps {
  stage: EditorialStage;
}

export default function EditorialContent({
  stage,
}: EditorialContentProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        relative z-20
        w-full
        max-w-[1100px]

        px-6
        sm:px-8
        md:px-10
        lg:px-0
      "
    >
      {/* Eyebrow */}
      <p
        className="
          mb-7
          whitespace-nowrap
          text-[12px]
          font-semibold
          uppercase
          tracking-[0.38em]
          text-[#18D89B]

          sm:text-[13px]
          sm:tracking-[0.4em]

          md:mb-8
          md:text-[14px]

          lg:mb-9
          lg:text-[15px]
          lg:tracking-[0.42em]
        "
      >
        {stage.eyebrow}
      </p>

      {/* Editorial Heading */}
      <h1
        className="
          font-medium
          leading-[0.96]
          tracking-[-0.045em]
          whitespace-normal

          text-[46px]

          sm:text-[52px]

          md:text-[64px]

          lg:whitespace-nowrap
          lg:text-[76px]

          xl:text-[86px]
        "
      >
        <span className="block text-white">
          {stage.lineOne}
        </span>

        <span
          className="
            mt-1
            block
            bg-gradient-to-r
            from-[#18A8FF]
            via-[#18CDEB]
            to-[#15D6A0]
            bg-clip-text
            text-transparent
          "
        >
          {stage.lineTwo}
        </span>
      </h1>

      {/* Description */}
      <p
        className="
          mt-8
          w-full
          max-w-[430px]
          text-[16px]
          leading-[1.7]
          text-slate-200

          sm:mt-9
          sm:max-w-[500px]
          sm:text-[17px]

          md:mt-10
          md:max-w-[540px]
          md:text-[18px]

          lg:mt-12
          lg:max-w-[560px]
          lg:text-[18px]
          lg:leading-[1.85]
        "
      >
        {stage.description}
      </p>

      {/* CTA */}
      {stage.cta && (
        <motion.a
          href={stage.cta.href}
          whileHover={{ x: 6 }}
          transition={{ duration: 0.2 }}
          className="
            mt-8
            inline-flex
            items-center
            gap-3
            text-sm
            font-medium
            text-white

            sm:mt-9
            sm:text-base

            lg:mt-12
          "
        >
          {stage.cta.label}

          <span className="text-[#18D89B]">
            →
          </span>
        </motion.a>
      )}
    </motion.div>
  );
}