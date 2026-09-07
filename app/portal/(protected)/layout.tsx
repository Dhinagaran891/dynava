import type { ReactNode } from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import PortalSidebar from "@/components/portal/PortalSidebar";

export default async function PortalLayout({
  children,
}: {
  children: ReactNode;
}) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/portal/login");
  }

  const { data: membership } = await supabase
    .from("organization_members")
    .select("role, organizations(id, name)")
    .eq("user_id", user.id)
    .limit(1)
    .maybeSingle();

  if (!membership) {
    return children;
  }

  const organization = Array.isArray(membership.organizations)
    ? membership.organizations[0]
    : membership.organizations;

  const isDynavaStaff =
    membership.role === "dynava_admin" ||
    membership.role === "dynava_consultant";

  return (
    <div className="min-h-screen bg-[#F8FAFE] text-slate-950">
      <header className="border-b border-slate-200/80 bg-white">
        <div className="mx-auto flex min-h-20 max-w-[1440px] items-center justify-between px-6 sm:px-8 lg:px-12">
          <div className="flex items-center gap-4">
            <Link
             href="/portal/login"
              aria-label="Back to Dynava website"
              className="group flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:border-[#126BFF] hover:text-[#126BFF]"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                fill="none"
                className="h-4 w-4 transition-transform group-hover:-translate-x-0.5"
              >
                <path
                  d="M12.5 4.5L7 10L12.5 15.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

            <Link
              href="/portal"
              className="text-sm font-semibold tracking-[0.12em] text-slate-950"
            >
              DYNAVA
            </Link>
          </div>

          <div className="text-right">
            <p className="text-xs font-medium text-slate-950">
              {organization?.name ?? "Workspace"}
            </p>

            <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-slate-500">
              {isDynavaStaff ? "Dynava workspace" : "Client workspace"}
            </p>
          </div>
        </div>
      </header>

      <div className="mx-auto flex w-full max-w-[1440px]">
        <PortalSidebar isDynavaStaff={isDynavaStaff} />

        <main className="min-w-0 flex-1 px-6 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14">
          {children}
        </main>
      </div>
    </div>
  );
}