"use client";

import { motion } from "framer-motion";

export default function ApproachHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-3xl"
    >
      <span className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-600">
        OUR APPROACH
      </span>

      <h2 className="mt-6 text-5xl font-semibold leading-[0.98] tracking-tight text-slate-950 xl:text-6xl">
        Architecting
        <br />
        Enterprise
        <br />
        Intelligence.
      </h2>

      <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">
        Every successful AI transformation begins with understanding your
        business before architecting intelligent systems that create measurable
        outcomes.
      </p>
    </motion.div>
  );
}