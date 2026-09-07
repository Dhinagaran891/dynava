import PortalNav from "@/components/portal/PortalNav";
import PortalAccount from "./PortalAccount";

interface PortalSidebarProps {
  isDynavaStaff: boolean;
  email: string;
}

export default function PortalSidebar({
  isDynavaStaff,
  email,
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
      <div className="flex min-h-[calc(100vh-5rem)] flex-col px-6 py-8">
        <div>
          <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.25em] text-[#126BFF]">
            Workspace
          </p>

          <PortalNav items={navigation} />
        </div>

        <div className="mt-auto pt-10">
          <PortalAccount email={email} />
        </div>
      </div>
    </aside>
  );
}