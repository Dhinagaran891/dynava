"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function DynavaIntro() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const alreadySeen = sessionStorage.getItem("dynava-intro-seen");

    if (!alreadySeen) {
      setShow(true);
      sessionStorage.setItem("dynava-intro-seen", "true");

      const timer = setTimeout(() => {
        setShow(false);
      }, 2200);

      return () => clearTimeout(timer);
    }
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden bg-white">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100/30 blur-3xl" />

        <div className="absolute right-[-100px] top-[-100px] h-[300px] w-[300px] rounded-full bg-emerald-100/30 blur-3xl" />

        <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(#0f172a_1px,transparent_1px),linear-gradient(90deg,#0f172a_1px,transparent_1px)] [background-size:48px_48px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Dynava mark */}
        <div className="relative flex h-24 w-24 items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-blue-200/70" />

          <div className="absolute inset-1 animate-spin rounded-full border-2 border-transparent border-t-blue-600 border-r-emerald-500" />

          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-950 text-3xl font-bold tracking-tight text-white shadow-xl">
            D<span className="text-emerald-400">.</span>
          </div>
        </div>

        {/* Brand */}
        <h1 className="mt-8 text-2xl font-semibold tracking-[-0.04em] text-slate-950">
          Dynava<span className="text-emerald-500">.</span>
        </h1>

        <p className="mt-3 text-sm text-slate-500">
          Preparing your intelligent experience
        </p>

        {/* Loading line */}
        <div className="mt-8 h-1 w-40 overflow-hidden rounded-full bg-slate-100">
          <div className="h-full w-1/2 animate-[dynava-intro-loading_1.4s_ease-in-out_infinite] rounded-full bg-gradient-to-r from-blue-600 to-emerald-500" />
        </div>

        {/* Client portal */}
        <div className="mt-8">
          <Link
            href="/portal/login"
            onClick={() => setShow(false)}
            className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-xs font-semibold text-slate-600 shadow-sm transition hover:border-emerald-400 hover:text-emerald-700"
          >
            Client Portal
            <span className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        </div>

        <p className="mt-5 text-[10px] uppercase tracking-[0.24em] text-slate-400">
          AI · Data · Digital
        </p>
      </div>

      <style jsx>{`
        @keyframes dynava-intro-loading {
          0% {
            transform: translateX(-120%);
          }

          50% {
            transform: translateX(120%);
          }

          100% {
            transform: translateX(260%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
          }
        }
      `}</style>
    </div>
  );
}