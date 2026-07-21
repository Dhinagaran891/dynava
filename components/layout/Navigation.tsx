import Link from "next/link";

export default function Navigation() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-tight">
            <span className="text-[#2563EB]">Dyn</span>
            <span className="text-[#22C55E]">ava</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 text-sm font-medium text-gray-700 md:flex">
          <Link href="#">Solutions</Link>
          <Link href="#">Industries</Link>
          <Link href="#">Technology</Link>
          <Link href="#">About</Link>
          <Link href="#">Contact</Link>
        </nav>

        {/* CTA */}
        <button className="rounded-xl bg-[#2563EB] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700">
          Book Consultation
        </button>
      </div>
    </header>
  );
}