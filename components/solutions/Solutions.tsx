"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container, SectionHeader } from "@/components/ui";

import SolutionCard from "./SolutionCard";
import { solutions } from "./solutionsData";

export default function Solutions() {
  return (
    <section
      id="solutions"
      aria-labelledby="solutions-heading"
      className="relative bg-white py-24 sm:py-28"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            badge="OUR EXPERTISE"
            title="Enterprise AI Solutions"
            description="From conversational AI to intelligent automation, we build scalable AI solutions that solve real business challenges and deliver measurable impact."
          />
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
              }}
            >
              <SolutionCard {...solution} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16 flex justify-center"
        >
          <Link
            href="/solutions"
            className="group inline-flex items-center gap-2 text-lg font-semibold text-slate-900 transition-colors duration-300 hover:text-emerald-600"
          >
            <span>Explore All Solutions</span>

            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}