"use client";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="rounded-xl p-2 transition-all duration-300 hover:bg-slate-100 lg:hidden"
        aria-label="Open Menu"
      >
        <Menu className="h-7 w-7 text-slate-800" />
      </button>

      {/* Background Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`
          fixed
          left-4
          right-4
          top-24
          z-50
          rounded-[28px]
          border
          border-white/60
          bg-white/85
          backdrop-blur-2xl
          shadow-2xl
          transition-all
          duration-300
          lg:hidden

          ${
            isOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-4 pointer-events-none opacity-0"
          }
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200/70 p-6">
         <Image
  src="/images/logo/dynava-navbar.png"
  alt="Dynava"
  width={140}
  height={36}
  className="h-8 w-auto"
/>

          <button
            onClick={() => setIsOpen(false)}
            className="rounded-lg p-2 transition hover:bg-slate-100"
          >
            <X className="h-6 w-6 text-slate-700" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col px-6 py-5">

          <a
            href="#solutions"
            onClick={() => setIsOpen(false)}
            className="rounded-xl px-3 py-4 text-lg font-medium text-slate-700 transition hover:bg-slate-100"
          >
            Solutions
          </a>

          <a
            href="#industries"
            onClick={() => setIsOpen(false)}
            className="rounded-xl px-3 py-4 text-lg font-medium text-slate-700 transition hover:bg-slate-100"
          >
            Industries
          </a>

          <a
            href="#process"
            onClick={() => setIsOpen(false)}
            className="rounded-xl px-3 py-4 text-lg font-medium text-slate-700 transition hover:bg-slate-100"
          >
            Process
          </a>

          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="rounded-xl px-3 py-4 text-lg font-medium text-slate-700 transition hover:bg-slate-100"
          >
            About
          </a>

          {/* CTA */}
          <button
            className="
              mt-6
              flex
              items-center
              justify-center
              gap-2
              rounded-full
              bg-gradient-to-r
              from-blue-600
              to-emerald-500
              px-6
              py-4
              font-semibold
              text-white
              shadow-xl
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-2xl
            "
          >
            Book Consultation
            <ArrowRight className="h-5 w-5" />
          </button>
        </nav>
      </div>
    </>
  );
}