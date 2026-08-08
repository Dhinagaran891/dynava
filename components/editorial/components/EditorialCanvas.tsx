"use client";

import type { ReactNode } from "react";

interface EditorialCanvasProps {
  children: ReactNode;
}

export default function EditorialCanvas({
  children,
}: EditorialCanvasProps) {
  return (
    <div className="relative h-screen w-full overflow-hidden">

      {/* ---------------------------------------------------------------- */}
      {/* Base Background                                                   */}
      {/* ---------------------------------------------------------------- */}

      <div className="absolute inset-0 bg-[#090A0F]" />

      {/* ---------------------------------------------------------------- */}
      {/* Editorial Gradient                                                */}
      {/* ---------------------------------------------------------------- */}

      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(
              112deg,
              #090A0F 0%,
              #1C2029 26%,
              #4F5562 58%,
              #9B9FA8 78%,
              #F3F3F5 100%
            )
          `,
        }}
      />

      {/* ---------------------------------------------------------------- */}
      {/* Main Sun Light                                                   */}
      {/* ---------------------------------------------------------------- */}

      <div
        className="absolute rounded-full blur-[180px]"
        style={{
          width: "900px",
          height: "900px",
          top: "-260px",
          right: "-240px",
          background: "rgba(255,255,255,.28)",
        }}
      />

      {/* ---------------------------------------------------------------- */}
      {/* Secondary Atmosphere                                              */}
      {/* ---------------------------------------------------------------- */}

      <div
        className="absolute rounded-full blur-[240px]"
        style={{
          width: "700px",
          height: "700px",
          right: "10%",
          top: "40%",
          background: "rgba(255,255,255,.12)",
        }}
      />

      {/* ---------------------------------------------------------------- */}
      {/* Left Shadow                                                       */}
      {/* ---------------------------------------------------------------- */}

      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(
              90deg,
              rgba(0,0,0,.52),
              rgba(0,0,0,.18) 38%,
              transparent 72%
            )
          `,
        }}
      />

      {/* ---------------------------------------------------------------- */}
      {/* Bottom Fade                                                       */}
      {/* ---------------------------------------------------------------- */}

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,.18), transparent 30%)",
        }}
      />

      {/* ---------------------------------------------------------------- */}
      {/* Soft Vignette                                                     */}
      {/* ---------------------------------------------------------------- */}

      <div
        className="absolute inset-0"
        style={{
          boxShadow:
            "inset 0 0 180px rgba(0,0,0,.20)",
        }}
      />

      {/* ---------------------------------------------------------------- */}
      {/* Content Container                                                 */}
      {/* ---------------------------------------------------------------- */}

      <div className="relative z-20 mx-auto flex h-full max-w-[1600px] items-start justify-between px-20 pt-36">

        {children}

      </div>

    </div>
  );
}