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

      {/* Actions */}
      <div className="flex items-center gap-3">
        <a
          href="/portal/login"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-slate-200
            bg-white/70
            px-5
            py-3
            text-sm
            font-semibold
            text-slate-700
            shadow-sm
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:border-blue-200
            hover:text-slate-950
            hover:shadow-md
          "
        >
          Client Portal
        </a>

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
    </div>
  );
}