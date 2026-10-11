import type { ReactNode } from "react";
import Link from "next/link";
import PortalSidebar from "@/components/portal/PortalSidebar";
import PortalMobileNav from "@/components/portal/PortalMobileNav";
import { getPortalContext } from "@/lib/portal/getPortalContext";
import PortalBackButton from "@/components/portal/PortalBackButton";

export default async function PortalLayout({
  children,
}: {
  children: ReactNode;
}) {
  const { user, membership, organization, isDynavaStaff } =
    await getPortalContext();

  if (!membership) {
    return children;
  }

  return (
    <div className="min-h-screen bg-[#F8FAFE] text-slate-950">
      <header className="border-b border-slate-200/80 bg-white">
        <div className="mx-auto flex min-h-20 max-w-[1440px] items-center justify-between px-6 sm:px-8 lg:px-12">
          <div className="flex items-center gap-4">
            <PortalBackButton />
            <Link
              href="/portal"
              className="text-sm font-semibold tracking-[0.12em] text-slate-950"
            >
              DYNAVA
            </Link>
          </div>

          <div className="flex items-center gap-5">
            <div className="hidden text-right sm:block">
              <p className="text-xs font-medium text-slate-950">
                {organization?.name ?? "Workspace"}
              </p>

              <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-slate-500">
                {isDynavaStaff ? "Dynava workspace" : "Client workspace"}
              </p>
            </div>

            <PortalMobileNav
              isDynavaStaff={isDynavaStaff}
              email={user.email ?? ""}
              organizationName={organization?.name ?? "Workspace"}
            />
          </div>
        </div>
      </header>

      <div className="mx-auto flex w-full max-w-[1440px]">
        <PortalSidebar
          isDynavaStaff={isDynavaStaff}
          email={user.email ?? ""}
        />

        <main className="min-w-0 flex-1 px-6 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14">
          {children}
        </main>
      </div>
    </div>
  );
}