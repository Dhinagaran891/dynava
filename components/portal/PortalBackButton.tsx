"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function PortalBackButton() {
  const pathname = usePathname();
  console.log("PORTAL BACK BUTTON PATH:", pathname);

  const isReportDetail =
    pathname.startsWith("/portal/reports/") &&
    pathname !== "/portal/reports";

  const href = isReportDetail
    ? "/portal/reports"
    : "/portal";

  return (
    <Link
      href={href}
      aria-label={
        isReportDetail
          ? "Back to reports"
          : "Back to portal"
      }
      className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:border-slate-300 hover:text-slate-950"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-4 w-4"
      >
        <path
          d="M15 18 9 12l6-6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
}