"use client";

import { BlueprintStage } from "./types";

interface BlueprintRailProps {
  stages: BlueprintStage[];
  activeId: string;
  onChange: (id: string) => void;
}

export default function BlueprintRail({
  stages,
  activeId,
  onChange,
}: BlueprintRailProps) {
  return (
    <nav
      aria-label="Dynava Blueprint"
      className="relative mt-16 mb-14"
    >
      {/* Blueprint Line */}
      <div className="absolute left-0 right-0 top-8 h-px bg-slate-200" />

      <div className="relative grid grid-cols-2 gap-8 md:grid-cols-4">
        {stages.map((stage) => {
          const active = activeId === stage.id;

          return (
            <button
              key={stage.id}
              onClick={() => onChange(stage.id)}
              className="group relative text-left"
            >
              {/* Node */}
              <div
                className={`mb-6 h-4 w-4 rounded-full border-2 transition-all duration-300 ${
                  active
                    ? "border-blue-600 bg-blue-600"
                    : "border-slate-300 bg-white group-hover:border-blue-500"
                }`}
              />

              {/* Blueprint Code */}
              <p
                className={`text-xs font-semibold tracking-[0.25em] uppercase transition-colors ${
                  active
                    ? "text-blue-600"
                    : "text-slate-400"
                }`}
              >
                {stage.code}
              </p>

              {/* Title */}
              <h3
                className={`mt-2 text-xl font-semibold transition-colors ${
                  active
                    ? "text-slate-950"
                    : "text-slate-700 group-hover:text-slate-950"
                }`}
              >
                {stage.title}
              </h3>

              {/* Underline */}
              <div
                className={`mt-4 h-[2px] rounded-full transition-all duration-300 ${
                  active
                    ? "w-full bg-blue-600"
                    : "w-0 bg-blue-600 group-hover:w-full"
                }`}
              />
            </button>
          );
        })}
      </div>
    </nav>
  );
}