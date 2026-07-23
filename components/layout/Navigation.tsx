import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
       {/* Logo */}
<Link href="/" className="flex items-center">
  <Image
  src="/images/logo/dynava-navbar.png"
  alt="Dynava Logo"
  width={260}
  height={60}
  priority
  className="h-12 w-auto"
/>
</Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 text-sm font-medium text-gray-700 md:flex">
          <Link
            href="#"
            className="transition-colors hover:text-[#2563EB]"
          >
            Solutions
          </Link>

          <Link
            href="#"
            className="transition-colors hover:text-[#2563EB]"
          >
            Industries
          </Link>

          <Link
            href="#"
            className="transition-colors hover:text-[#2563EB]"
          >
            Technology
          </Link>

          <Link
            href="#"
            className="transition-colors hover:text-[#2563EB]"
          >
            About
          </Link>

          <Link
            href="#"
            className="transition-colors hover:text-[#2563EB]"
          >
            Contact
          </Link>
        </nav>

        {/* CTA Button */}
        <button className="rounded-xl bg-[#2563EB] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg">
          Book Consultation
        </button>
      </div>
    </header>
  );
}