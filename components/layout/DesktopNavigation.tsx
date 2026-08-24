"use client";

const navItems = [
  { label: "Solutions", href: "#solutions" },
  { label: "Industries", href: "#industries" },
  { label: "Process", href: "#process" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
];

export default function DesktopNavigation() {
  return (
    <div className="hidden flex-1 items-center justify-between md:flex">
      {/* Navigation Links */}
      <nav className="ml-30 flex items-center gap-8">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="
              text-[15px]
              font-medium
              text-slate-700
              transition-colors
              duration-200
              hover:text-slate-950
            "
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* CTA */}
      <a
        href="#contact"
        className="
          group
          inline-flex
          items-center
          gap-2
          rounded-full
          bg-gradient-to-r
          from-blue-600
          to-emerald-500
          px-6
          py-3
          text-sm
          font-semibold
          text-white
          shadow-lg
          transition-all
          duration-300
          hover:-translate-y-0.5
          hover:shadow-xl
        "
      >
        Book Consultation

        <span className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </a>
    </div>
  );
}