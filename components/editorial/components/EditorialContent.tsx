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
      className="relative z-20 w-full max-w-[1100px]"
    >
      {/* Eyebrow */}
      <p className="mb-9 whitespace-nowrap text-[15px] font-semibold uppercase tracking-[0.42em] text-[#18D89B]">
        {stage.eyebrow}
      </p>

      {/* Editorial Heading */}
      <h1 className="whitespace-nowrap font-medium leading-[0.94] tracking-[-0.045em]">
        <span className="block text-[76px] text-white xl:text-[86px]">
          {stage.lineOne}
        </span>

        <span className="mt-1 block bg-gradient-to-r from-[#18A8FF] via-[#18CDEB] to-[#15D6A0] bg-clip-text text-[76px] text-transparent xl:text-[86px]">
          {stage.lineTwo}
        </span>
      </h1>

      {/* Description */}
      <p className="mt-12 max-w-[560px] text-[18px] leading-[1.85] text-slate-200">
        {stage.description}
      </p>

      {/* CTA */}
      {stage.cta && (
        <motion.a
          href={stage.cta.href}
          whileHover={{ x: 6 }}
          transition={{ duration: 0.2 }}
          className="mt-12 inline-flex items-center gap-3 text-base font-medium text-white"
        >
          {stage.cta.label}
          <span className="text-[#18D89B]">→</span>
        </motion.a>
      )}
    </motion.div>
  );
}