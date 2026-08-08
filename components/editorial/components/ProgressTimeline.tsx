"use client";

import { motion } from "framer-motion";
import type { EditorialStage } from "../types";

interface ProgressTimelineProps {
  stages: EditorialStage[];
  currentStage: number;
}

export default function ProgressTimeline({
  stages,
  currentStage,
}: ProgressTimelineProps) {
  return (
    <div className="hidden h-full lg:flex items-start pt-[220px]">

      <div className="space-y-14">

        {stages.map((stage, index) => {
          const active = index === currentStage;

          return (
            <div
              key={stage.id}
              className="flex items-center gap-8"
            >
              {/* Timeline Label */}

              <motion.span
                animate={{
                  color: active
                    ? "#FFFFFF"
                    : "#6B7280",
                  opacity: active ? 1 : 0.55,
                }}
                transition={{
                  duration: 0.45,
                }}
                className="w-48 text-xs font-medium uppercase tracking-[0.35em]"
              >
                {stage.timeline}
              </motion.span>

              {/* Progress Line */}

              <div className="relative h-px w-24 overflow-hidden rounded-full bg-slate-700">

                <motion.div
                  animate={{
                    width: active ? "100%" : "0%",
                  }}
                  transition={{
                    duration: 0.45,
                    ease: "easeOut",
                  }}
                  className="absolute left-0 top-0 h-full bg-gradient-to-r from-sky-400 to-emerald-400"
                />

              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
}