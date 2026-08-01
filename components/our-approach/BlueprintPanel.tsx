"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";

import { BlueprintStage } from "./types";

interface BlueprintPanelProps {
  stage: BlueprintStage;
}

export default function BlueprintPanel({
  stage,
}: BlueprintPanelProps) {
  return (
    <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

      <AnimatePresence mode="wait">

        <motion.div
          key={stage.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.35 }}
          className="grid gap-12 p-10 lg:grid-cols-[1.2fr_0.8fr]"
        >
          {/* Left */}

          <div>

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
              {stage.code}
            </p>

            <h3 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950">
              {stage.title}
            </h3>

            <p className="mt-4 text-lg font-medium text-slate-500">
              {stage.tagline}
            </p>

            <div className="mt-10">

              <h4 className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                Overview
              </h4>

              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
                {stage.overview}
              </p>

            </div>

          </div>

          {/* Right */}

          <div className="rounded-2xl bg-slate-50 p-8">

            <h4 className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              Key Outcomes
            </h4>

            <div className="mt-8 space-y-5">

              {stage.outcomes.map((item) => (

                <div
                  key={item}
                  className="flex items-start gap-4"
                >
                  <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-emerald-500">

                    <Check className="h-3.5 w-3.5 text-white" />

                  </div>

                  <span className="leading-7 text-slate-700">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </motion.div>

      </AnimatePresence>

    </div>
  );
}