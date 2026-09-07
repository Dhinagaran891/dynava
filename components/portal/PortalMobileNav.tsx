"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import PortalNav from "@/components/portal/PortalNav";
import PortalAccount from "@/components/portal/PortalAccount";

interface PortalMobileNavProps {
  isDynavaStaff: boolean;
  email: string;
  organizationName: string;
}

export default function PortalMobileNav({
  isDynavaStaff,
  email,
  organizationName,
}: PortalMobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = isDynavaStaff
    ? [
        { label: "Overview", href: "/portal" },
        { label: "Organizations", href: "/portal/organizations" },
        { label: "Assessments", href: "/portal/assessments" },
        { label: "Reports", href: "/portal/reports" },
        { label: "Documents", href: "/portal/documents" },
      ]
    : [
        { label: "Overview", href: "/portal" },
        { label: "AI Readiness Assessment", href: "/portal/assessment" },
        { label: "Results", href: "/portal/results" },
        { label: "Recommendations", href: "/portal/recommendations" },
        { label: "Documents", href: "/portal/documents" },
      ];

  return (
    <div className="lg:hidden">
      {/* Mobile menu button */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Open portal navigation"
        aria-expanded={isOpen}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-colors hover:border-[#126BFF] hover:text-[#126BFF]"
      >
        <Menu aria-hidden="true" className="h-5 w-5" />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-950/10 lg:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile navigation drawer */}
      <aside
        aria-label="Portal navigation"
        className={`
          fixed
          right-0
          top-0
          z-50
          flex
          h-full
          w-[min(88vw,380px)]
          flex-col
          border-l
          border-slate-200
          bg-white
          shadow-2xl
          transition-transform
          duration-300
          lg:hidden
          ${
            isOpen
              ? "translate-x-0"
              : "pointer-events-none translate-x-full"
          }
        `}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-6">
          <div>
            <Link
              href="/portal"
              onClick={() => setIsOpen(false)}
              className="text-sm font-semibold tracking-[0.12em] text-slate-950"
            >
              DYNAVA
            </Link>

            <p className="mt-2 max-w-[240px] truncate text-xs text-slate-500">
              {organizationName}
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close portal navigation"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-colors hover:border-[#126BFF] hover:text-[#126BFF]"
          >
            <X aria-hidden="true" className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto px-6 py-8">
          <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.25em] text-[#126BFF]">
            Workspace
          </p>

          <PortalNav items={navigation} />
        </div>

        {/* Account */}
        <div className="border-t border-slate-200 px-6 py-6">
          <PortalAccount email={email} />
        </div>
      </aside>
    </div>
  );
}