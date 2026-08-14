"use client";

import Link from "next/link";

const exploreLinks = [
  {
    label: "Solutions",
    href: "/#solutions",
  },
  {
    label: "Industries",
    href: "/#industries",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "AI Readiness",
    href: "/ai-readiness",
  },
];

const companyLinks = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Our Approach",
    href: "/#process",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-[#080A0D] text-white">
      <div className="mx-auto max-w-[1400px] px-6 pb-8 pt-20 sm:px-8 sm:pb-9 sm:pt-24 md:px-12 md:pt-28 lg:px-20 lg:pb-10 lg:pt-32">
        
        {/* Main Footer */}
        <div
          className="
            grid
            grid-cols-1
            gap-14

            sm:gap-16

            md:grid-cols-[1.4fr_0.6fr_0.6fr]
            md:gap-12

            lg:grid-cols-[1.7fr_0.65fr_0.65fr]
            lg:gap-20
          "
        >
          {/* Brand */}
          <div className="max-w-[420px]">
            
            {/* Logo */}
            <Link
              href="/"
              aria-label="Dynava home"
              className="inline-flex items-center"
            >
              <img
                src="/images/logo/dynava-navbar.png"
                alt="Dynava"
                className="h-9 w-auto"
              />
            </Link>

            {/* Tagline */}
            <p
              className="
                mt-7
                max-w-[330px]
                text-[15px]
                leading-[1.7]
                text-white/60

                sm:text-[16px]
              "
            >
              Intelligence for every enterprise.
            </p>

            {/* Brand statement */}
            <p
              className="
                mt-4
                max-w-[390px]
                text-[14px]
                leading-[1.75]
                text-white/35

                sm:text-[15px]
              "
            >
              Helping businesses understand opportunities, build better
              systems and turn technology into meaningful progress.
            </p>
          </div>

          {/* Explore */}
          <div>
            <p
              className="
                mb-6
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.32em]
                text-white/35

                sm:text-[12px]
              "
            >
              Explore
            </p>

            <nav
              aria-label="Explore"
              className="flex flex-col items-start gap-4"
            >
              {exploreLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="
                    text-[14px]
                    text-white/65
                    transition-colors
                    duration-200
                    hover:text-white

                    sm:text-[15px]
                  "
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Company */}
          <div>
            <p
              className="
                mb-6
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.32em]
                text-white/35

                sm:text-[12px]
              "
            >
              Company
            </p>

            <nav
              aria-label="Company"
              className="flex flex-col items-start gap-4"
            >
              {companyLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="
                    text-[14px]
                    text-white/65
                    transition-colors
                    duration-200
                    hover:text-white

                    sm:text-[15px]
                  "
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 h-px w-full bg-white/10 sm:mt-20 lg:mt-24" />

        {/* Bottom Row */}
        <div
          className="
            flex
            flex-col
            gap-5
            pt-7

            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:pt-8
          "
        >
          {/* Copyright */}
          <p className="text-[12px] text-white/35 sm:text-[13px]">
            © 2026 Dynava. All rights reserved.
          </p>

          {/* Legal */}
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="
                text-[12px]
                text-white/35
                transition-colors
                duration-200
                hover:text-white/70

                sm:text-[13px]
              "
            >
              Privacy
            </Link>

            <Link
              href="/terms"
              className="
                text-[12px]
                text-white/35
                transition-colors
                duration-200
                hover:text-white/70

                sm:text-[13px]
              "
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}