"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface PortalNavItem {
  label: string;
  href: string;
}

interface PortalNavProps {
  items: PortalNavItem[];
}

export default function PortalNav({ items }: PortalNavProps) {
  const pathname = usePathname();

  return (
    <nav aria-label="Portal navigation">
      <ul className="space-y-1">
        {items.map((item) => {
          const isActive =
            item.href === "/portal"
              ? pathname === "/portal"
              : pathname === item.href ||
                pathname.startsWith(`${item.href}/`);

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`block border-l-2 px-3 py-2.5 text-sm transition-colors ${
                  isActive
                    ? "border-[#126BFF] bg-[#F5F9FF] font-medium text-slate-950"
                    : "border-transparent text-slate-600 hover:bg-slate-50 hover:text-slate-950"
                }`}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}