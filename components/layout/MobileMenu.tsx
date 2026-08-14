"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

const navItems = [
  {
    label: "Solutions",
    href: "#solutions",
  },
  {
    label: "Industries",
    href: "#industries",
  },
  {
    label: "Process",
    href: "#process",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Careers",
    href: "/careers",
  },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Hamburger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="
          rounded-xl
          p-2
          transition-all
          duration-300
          hover:bg-slate-100
          md:hidden
        "
        aria-label="Open Menu"
        aria-expanded={isOpen}
      >
        <Menu className="h-7 w-7 text-slate-800" />
      </button>

      {/* Background Overlay */}
      {isOpen && (
        <div
          className="
            fixed
            inset-0
            z-40
            bg-black/20
            backdrop-blur-sm
            md:hidden
          "
          onClick={closeMenu}
          aria-hidden="true"
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
          bg-white/90
          shadow-2xl
          backdrop-blur-2xl
          transition-all
          duration-300
          md:hidden

          ${
            isOpen
              ? "translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-4 opacity-0"
          }
        `}
      >
        {/* Header */}
        <div
          className="
            flex
            items-center
            justify-between
            border-b
            border-slate-200/70
            p-6
          "
        >
          <a
            href="/"
            onClick={closeMenu}
            aria-label="Dynava home"
          >
            <Image
              src="/images/logo/dynava-navbar.png"
              alt="Dynava"
              width={140}
              height={36}
              className="h-8 w-auto"
            />
          </a>

          <button
            type="button"
            onClick={closeMenu}
            className="
              rounded-lg
              p-2
              transition
              hover:bg-slate-100
            "
            aria-label="Close Menu"
          >
            <X className="h-6 w-6 text-slate-700" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col px-6 py-5">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={closeMenu}
              className="
                rounded-xl
                px-3
                py-4
                text-lg
                font-medium
                text-slate-700
                transition
                hover:bg-slate-100
                hover:text-slate-950
              "
            >
              {item.label}
            </a>
          ))}

          {/* CTA */}
          <a
            href="#contact"
            onClick={closeMenu}
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
          </a>
        </nav>
      </div>
    </>
  );
}