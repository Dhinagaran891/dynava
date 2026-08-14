"use client";

import DesktopNavigation from "./DesktopNavigation";
import MobileMenu from "./MobileMenu";

export default function Navigation() {
  return (
    <header
      className="
        fixed
        left-0
        right-0
        top-0
        z-[100]
        px-4
        pt-4

        sm:px-6
        sm:pt-5

        lg:px-8
        lg:pt-7
      "
    >
      <div
        className="
          mx-auto
          flex
          h-[72px]
          max-w-[1400px]
          items-center
          justify-between
          rounded-[28px]
          border
          border-white/60
          bg-white/80
          px-5
          shadow-[0_15px_45px_rgba(15,23,42,0.08)]
          backdrop-blur-2xl

          sm:h-[76px]
          sm:px-7

          lg:h-[82px]
          lg:rounded-[30px]
          lg:px-8
        "
      >
        {/* Logo */}
        <a
          href="/"
          aria-label="Dynava home"
          className="flex shrink-0 items-center"
        >
          <img
            src="/images/logo/dynava-navbar.png"
            alt="Dynava"
            className="h-8 w-auto sm:h-9"
          />
        </a>

        {/* Desktop Navigation */}
        <DesktopNavigation />

        {/* Mobile Navigation */}
        <MobileMenu />
      </div>
    </header>
  );
}