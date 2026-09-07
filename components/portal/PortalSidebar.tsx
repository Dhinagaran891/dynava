import PortalNav from "@/components/portal/PortalNav";

interface PortalSidebarProps {
  isDynavaStaff: boolean;
}

export default function PortalSidebar({
  isDynavaStaff,
}: PortalSidebarProps) {
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
    <aside className="hidden w-64 shrink-0 border-r border-slate-200/80 bg-white lg:block">
      <nav
        aria-label="Portal navigation"
        className="sticky top-0 px-6 py-8"
      >
        <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.25em] text-[#126BFF]">
          Workspace
        </p>

        <PortalNav items={navigation} />
      </nav>
    </aside>
  );
}