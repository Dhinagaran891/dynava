"use client";

import { cn } from "@/lib/utils";

interface CapabilityNodeProps {
  title: string;
  position: string;
  active?: boolean;
  onClick?: () => void;
}

export default function CapabilityNode({
  title,
  position,
  active = false,
  onClick,
}: CapabilityNodeProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "absolute flex flex-col items-center transition-all duration-300 group",
        position
      )}
    >
      <div
        className={cn(
          "flex h-14 w-14 rotate-45 items-center justify-center rounded-2xl border transition-all duration-300",
          active
            ? "border-blue-600 bg-gradient-to-br from-blue-600 to-emerald-500 shadow-lg shadow-blue-500/20"
            : "border-slate-300 bg-white group-hover:border-blue-500"
        )}
      >
        <div className="-rotate-45 h-3 w-3 rounded-full bg-white" />
      </div>

      <span
        className={cn(
          "mt-4 text-center text-sm font-semibold transition-colors",
          active
            ? "text-slate-950"
            : "text-slate-600 group-hover:text-slate-950"
        )}
      >
        {title}
      </span>

      <div
        className={cn(
          "mt-2 h-[2px] rounded-full bg-blue-600 transition-all duration-300",
          active
            ? "w-12"
            : "w-0 group-hover:w-8"
        )}
      />
    </button>
  );
}