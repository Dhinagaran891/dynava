import { createClient } from "@/lib/supabase/server";

type ClientWelcomeProps = {
  organizationId: string;
  organizationName: string;
};

export default async function ClientWelcome({
  organizationId,
  organizationName,
}: ClientWelcomeProps) {
  const supabase = await createClient();

  const [
    { count: assessmentCount },
    { count: recommendationCount },
    { count: documentCount },
  ] = await Promise.all([
    supabase
      .from("assessments")
      .select("*", { count: "exact", head: true })
      .eq("organization_id", organizationId),

    supabase
      .from("recommendations")
      .select("*", { count: "exact", head: true })
      .eq(
        "assessment_id",
        (
          await supabase
            .from("assessments")
            .select("id")
            .eq("organization_id", organizationId)
        ).data?.map((assessment) => assessment.id) ?? []
      ),

    supabase
      .from("documents")
      .select("*", { count: "exact", head: true })
      .eq("organization_id", organizationId),
  ]);

  return (
    <section aria-labelledby="client-welcome-heading">
      <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#126BFF]">
        DYNAVA CLIENT PORTAL
      </p>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1
            id="client-welcome-heading"
            className="text-4xl font-medium tracking-[-0.04em] text-slate-950 sm:text-5xl"
          >
            Welcome to {organizationName}
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Your Dynava workspace gives you access to assessments,
            recommendations, documents, and other resources shared with your
            organization.
          </p>
        </div>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500">
            Assessments
          </p>

          <p className="mt-4 text-3xl font-medium tracking-[-0.03em] text-slate-950">
            {assessmentCount ?? 0}
          </p>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            Assessments associated with your organization.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500">
            Recommendations
          </p>

          <p className="mt-4 text-3xl font-medium tracking-[-0.03em] text-slate-950">
            {recommendationCount ?? 0}
          </p>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            Opportunities and recommendations available to your organization.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500">
            Documents
          </p>

          <p className="mt-4 text-3xl font-medium tracking-[-0.03em] text-slate-950">
            {documentCount ?? 0}
          </p>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            Documents shared through your Dynava workspace.
          </p>
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium text-slate-950">
              AI Readiness Assessment
            </p>

            <p className="mt-1 text-sm leading-6 text-slate-500">
              Your assessment workspace will appear here when an assessment is
              assigned to your organization.
            </p>
          </div>

          <span className="inline-flex w-fit rounded-full bg-slate-100 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-slate-500">
            No active assessment
          </span>
        </div>
      </div>
    </section>
  );
}