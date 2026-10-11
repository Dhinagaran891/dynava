
import { getPortalContext } from "@/lib/portal/getPortalContext";
import ReportsClient from "./ReportsClient";

type SectionScores = {
  business_strategy?: number;
  data_analytics?: number;
  technology_infrastructure?: number;
  processes_automation?: number;
  people_skills?: number;
  governance_risk?: number;
  ai_adoption_readiness?: number;
};

type ReportAnalysis = {
  maturity_level?: string;
  section_scores?: SectionScores;
};

export default async function ReportsPage() {
  const { supabase, isDynavaStaff } = await getPortalContext();

  if (!isDynavaStaff) {
    return (
      <section>
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#126BFF]">
          REPORTS
        </p>
        <h1 className="mt-5 text-4xl font-medium text-slate-950">
          Access restricted.
        </h1>
        <p className="mt-5 text-base leading-7 text-slate-600">
          This workspace is available to authorized Dynava staff only.
        </p>
      </section>
    );
  }

  const { data: rows, error } = await supabase
    .from("assessment_reports")
    .select(`
      id,
      assessment_id,
      overall_score,
      summary,
      analysis,
      generated_at,
      assessments (
        id,
        version,
        status,
        organizations (
          id,
          name
        )
      )
    `)
    .order("generated_at", { ascending: false });

  if (error) {
    console.error("Reports list lookup error:", error);

    return (
      <section>
        <h1 className="text-3xl font-medium text-slate-950">
          We couldn't load the reports.
        </h1>
        <p className="mt-4 text-sm text-slate-600">
          Please try again shortly. If the issue continues, contact your Dynava administrator.
        </p>
      </section>
    );
  }

  const reports = (rows ?? []).map((row) => {
    const assessment = Array.isArray(row.assessments)
      ? row.assessments[0]
      : row.assessments;

    const organization = Array.isArray(assessment?.organizations)
      ? assessment.organizations[0]
      : assessment?.organizations;

    const analysis =
      row.analysis &&
      typeof row.analysis === "object" &&
      !Array.isArray(row.analysis)
        ? (row.analysis as ReportAnalysis)
        : {};

    return {
      id: row.id,
      assessmentId: row.assessment_id,
      overallScore:
        typeof row.overall_score === "number"
          ? row.overall_score
          : row.overall_score === null
            ? null
            : Number(row.overall_score),
      summary: row.summary,
      generatedAt: row.generated_at,
      maturityLevel: analysis.maturity_level ?? "Not classified",
      sectionScores: analysis.section_scores ?? {},
      organizationName: organization?.name ?? "Unknown organization",
      version: String(assessment?.version ?? "1"),
      assessmentStatus: String(assessment?.status ?? "unknown"),
    };
  });

  return <ReportsClient reports={reports} />;
}
