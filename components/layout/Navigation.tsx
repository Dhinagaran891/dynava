"use client";
import Image from "next/image";
import DesktopNavigation from "./DesktopNavigation";
import MobileMenu from "./MobileMenu";

export default function Navigation() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
         className="
  mt-5
  flex
  h-[72px]
  items-center
  justify-between
  rounded-[28px]
  border
  border-white/60
  bg-white/70
  px-8
  backdrop-blur-2xl
  shadow-[0_8px_40px_rgba(15,23,42,0.08)]
  transition-all
  duration-300
"
        >
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/images/logo/dynava-navbar.png"
              alt="Dynava"
              className="h-9 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <DesktopNavigation />

          {/* Mobile Navigation */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}