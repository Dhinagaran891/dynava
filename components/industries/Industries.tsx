"use client";

import { motion } from "framer-motion";

import { Container, SectionHeader } from "@/components/ui";

import IndustryCard from "./IndustryCard";
import { industries } from "./industriesData";

export default function Industries() {
  return (
    <section
      id="industries"
      aria-labelledby="industries-heading"
      className="relative bg-slate-50 py-28"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            badge="INDUSTRIES WE TRANSFORM"
            title="AI Tailored for Every Industry"
            description="Every industry has unique challenges. We build intelligent AI solutions that address real operational needs, helping organizations innovate, automate, and grow with confidence."
          />
        </motion.div>

        <div className="mt-20 grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
              }}
            >
              <IndustryCard {...industry} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}