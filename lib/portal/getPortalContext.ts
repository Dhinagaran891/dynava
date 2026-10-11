import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

type Organization = {
  id: string;
  name: string;
};

type Membership = {
  role:
    | "dynava_admin"
    | "dynava_consultant"
    | "client_admin"
    | "client_member";
  organizations: Organization | Organization[] | null;
};

export async function getPortalContext() {
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

  if (error) {
    console.error("Portal membership lookup error:", error);
  }

  const typedMembership = membership as Membership | null;

  const organization = Array.isArray(typedMembership?.organizations)
    ? typedMembership.organizations[0]
    : typedMembership?.organizations ?? null;

  const isDynavaStaff =
    typedMembership?.role === "dynava_admin" ||
    typedMembership?.role === "dynava_consultant";

  return {
    supabase,
    user,
    membership: typedMembership,
    organization,
    isDynavaStaff,
  };
}