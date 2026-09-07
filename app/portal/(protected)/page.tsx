import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import ClientWelcome from "@/components/portal/ClientWelcome";

export default async function PortalPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/portal/login");
  }

  const { data: membership, error } = await supabase
    .from("organization_members")
    .select("role, organizations(id, name)")
    .eq("user_id", user.id)
    .limit(1)
    .maybeSingle();

  if (error || !membership) {
    return (
      <section aria-labelledby="portal-access-heading">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#126BFF]">
          DYNAVA CLIENT PORTAL
        </p>

        <h1
          id="portal-access-heading"
          className="mt-5 text-3xl font-medium tracking-[-0.03em] text-slate-950 sm:text-4xl"
        >
          Access is not configured yet.
        </h1>

        <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
          Your account is authenticated, but it is not currently connected to
          an organization. Please contact your Dynava representative.
        </p>
      </section>
    );
  }

  const organization = Array.isArray(membership.organizations)
    ? membership.organizations[0]
    : membership.organizations;

  const isDynavaStaff =
    membership.role === "dynava_admin" ||
    membership.role === "dynava_consultant";

  if (isDynavaStaff) {
    return (
      <section aria-labelledby="dynava-workspace-heading">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#126BFF]">
          DYNAVA WORKSPACE
        </p>

        <h1
          id="dynava-workspace-heading"
          className="mt-5 text-4xl font-medium tracking-[-0.04em] text-slate-950 sm:text-5xl"
        >
          {organization?.name ?? "Dynava"}
        </h1>

        <p className="mt-4 text-base leading-7 text-slate-600">
          Signed in as {membership.role.replaceAll("_", " ")}.
        </p>
      </section>
    );
  }

  return (
    <ClientWelcome
      organizationName={organization?.name ?? "your organization"}
    />
  );
}