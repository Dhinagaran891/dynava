
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPortalContext } from "@/lib/portal/getPortalContext";

interface ReportPageProps {
  params: Promise<{
    reportId: string;
  }>;
}

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
  diagnostic_questions?: string[];
};

export default async function ReportPage({
  params,
}: ReportPageProps) {
   const routeParams = await params;

  console.log(
    "🔥 REPORT DETAIL PAGE EXECUTED",
    routeParams
  );

  const { reportId } = routeParams;
  const { supabase, isDynavaStaff } =
    await getPortalContext();

  // ------------------------------------------------------------
  // Dynava staff access
  // ------------------------------------------------------------

  if (!isDynavaStaff) {
    return (
      <section>
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#126BFF]">
          CONSULTANT REVIEW
        </p>

        <h1 className="mt-5 text-4xl font-medium tracking-[-0.04em] text-slate-950 sm:text-5xl">
          Access restricted.
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
          This workspace is available to authorized Dynava staff only.
        </p>
      </section>
    );
  }

  // ------------------------------------------------------------
  // Load report
  // ------------------------------------------------------------

  const {
    data: report,
    error: reportError,
  } = await supabase
    .from("assessment_reports")
    .select(
      `
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
          submitted_at,
          organizations (
            id,
            name
          )
        )
      `
    )
    .eq("id", reportId)
    .maybeSingle();

  // ------------------------------------------------------------
  // Report lookup error
  // ------------------------------------------------------------

  if (reportError) {
    console.error(
      "Consultant report lookup error:",
      reportError
    );

    return (
      <section>
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#126BFF]">
          CONSULTANT REVIEW
        </p>

        <h1 className="mt-5 text-4xl font-medium tracking-[-0.04em] text-slate-950 sm:text-5xl">
          We couldn't load this report.
        </h1>

        <div className="mt-6 max-w-3xl rounded-2xl border border-red-200 bg-red-50 p-6">
          <p className="text-sm font-medium text-red-900">
            Supabase report error
          </p>

          <pre className="mt-4 whitespace-pre-wrap text-xs leading-6 text-red-800">
            {JSON.stringify(reportError, null, 2)}
          </pre>
        </div>
      </section>
    );
  }

  // ------------------------------------------------------------
  // Report not found
  // ------------------------------------------------------------

  if (!report) {
    notFound();
  }

  // ------------------------------------------------------------
  // Normalize assessment
  // ------------------------------------------------------------

  const assessment = Array.isArray(report.assessments)
    ? report.assessments[0]
    : report.assessments;

  // ------------------------------------------------------------
  // Normalize organization
  // ------------------------------------------------------------

  const organization = Array.isArray(
    assessment?.organizations
  )
    ? assessment.organizations[0]
    : assessment?.organizations;

  // ------------------------------------------------------------
  // Normalize automated analysis
  // ------------------------------------------------------------

  const analysis =
    report.analysis &&
    typeof report.analysis === "object" &&
    !Array.isArray(report.analysis)
      ? (report.analysis as ReportAnalysis)
      : {};

  const sectionScores =
    analysis.section_scores ?? {};

  // ------------------------------------------------------------
  // Load consultant review
  // ------------------------------------------------------------

  const {
    data: review,
    error: reviewError,
  } = await supabase
    .from("assessment_reviews")
    .select(
      `
        id,
        reviewer_id,
        status,
        observations,
        risk_areas,
        opportunities,
        consultant_assessment,
        created_at,
        updated_at,
        reviewed_at,
        approved_at,
        approved_by
      `
    )
    .eq("assessment_report_id", report.id)
    .maybeSingle();

  // ------------------------------------------------------------
  // Consultant review lookup error
  // ------------------------------------------------------------

  if (reviewError) {
    console.error(
      "Assessment review lookup error:",
      reviewError
    );

    return (
      <section>
        <Link
          href="/portal/reports"
          className="inline-flex items-center text-sm text-slate-500 transition hover:text-slate-950"
        >
          ← Back to reports
        </Link>

        <p className="mt-8 text-[11px] font-medium uppercase tracking-[0.3em] text-[#126BFF]">
          CONSULTANT REVIEW
        </p>

        <h1 className="mt-5 text-4xl font-medium tracking-[-0.04em] text-slate-950 sm:text-5xl">
          We couldn't load the consultant review.
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
          The automated report loaded successfully, but the consultant review
          could not be retrieved.
        </p>

        <div className="mt-8 max-w-4xl rounded-2xl border border-red-200 bg-red-50 p-6">
          <p className="text-sm font-medium text-red-900">
            Supabase review error
          </p>

          <pre className="mt-4 overflow-x-auto whitespace-pre-wrap text-xs leading-6 text-red-800">
            {JSON.stringify(reviewError, null, 2)}
          </pre>
        </div>
      </section>
    );
  }

  // ------------------------------------------------------------
  // Render consultant review workspace
  // ------------------------------------------------------------

  return (
    <section>
      {/* --------------------------------------------------------
          Back navigation
      -------------------------------------------------------- */}

      <Link
        href="/portal/reports"
        className="inline-flex items-center text-sm text-slate-500 transition hover:text-slate-950"
      >
        ← Back to reports
      </Link>

      {/* --------------------------------------------------------
          Header
      -------------------------------------------------------- */}

      <div className="mt-8">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#126BFF]">
          CONSULTANT REVIEW
        </p>

        <div className="mt-4 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h1 className="text-4xl font-medium tracking-[-0.04em] text-slate-950 sm:text-5xl">
              {organization?.name ?? "Organization"}
            </h1>

            <p className="mt-4 text-base leading-7 text-slate-600">
              AI Readiness Assessment · Version{" "}
              {assessment?.version ?? "—"}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-slate-100 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.12em] text-slate-600">
              {assessment?.status ?? "—"}
            </span>

            <span className="rounded-full bg-amber-50 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.12em] text-amber-700">
              Automated Report
            </span>

            {review && (
              <span className="rounded-full bg-blue-50 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.12em] text-[#126BFF]">
                Review {review.status}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* --------------------------------------------------------
          Automated score
      -------------------------------------------------------- */}

      <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <div className="grid md:grid-cols-2">
          <div className="border-b border-slate-200 p-7 md:border-b-0 md:border-r sm:p-8">
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-400">
              AI Readiness Score
            </p>

            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-5xl font-medium tracking-[-0.05em] text-slate-950 sm:text-6xl">
                {report.overall_score !== null
                  ? Number(report.overall_score).toFixed(2)
                  : "—"}
              </span>

              <span className="text-sm text-slate-400">
                / 100
              </span>
            </div>
          </div>

          <div className="p-7 sm:p-8">
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-400">
              Maturity Level
            </p>

            <p className="mt-4 text-4xl font-medium tracking-[-0.04em] text-[#126BFF] sm:text-5xl">
              {analysis.maturity_level ?? "—"}
            </p>
          </div>
        </div>

        {report.summary && (
          <div className="border-t border-slate-200 p-7 sm:p-8">
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-400">
              Automated Summary
            </p>

            <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-600">
              {report.summary}
            </p>
          </div>
        )}
      </div>

      {/* --------------------------------------------------------
          Section scores
      -------------------------------------------------------- */}

      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-7 sm:p-8">
        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-400">
          Section Scores
        </p>

        <p className="mt-2 text-sm leading-6 text-slate-500">
          Automated readiness scores generated from the submitted assessment.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Score
            label="Business & Strategy"
            value={sectionScores.business_strategy}
          />

          <Score
            label="Data & Analytics"
            value={sectionScores.data_analytics}
          />

          <Score
            label="Technology & Infrastructure"
            value={sectionScores.technology_infrastructure}
          />

          <Score
            label="Processes & Automation"
            value={sectionScores.processes_automation}
          />

          <Score
            label="People & Skills"
            value={sectionScores.people_skills}
          />

          <Score
            label="Governance & Risk"
            value={sectionScores.governance_risk}
          />

          <Score
            label="AI Adoption & Readiness"
            value={sectionScores.ai_adoption_readiness}
          />
        </div>
      </div>

      {/* --------------------------------------------------------
          Consultant review
      -------------------------------------------------------- */}

      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-7 sm:p-8">
        <div>
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#126BFF]">
            CONSULTANT REVIEW
          </p>

          <h2 className="mt-3 text-2xl font-medium tracking-[-0.03em] text-slate-950">
            Professional assessment
          </h2>

          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-500">
            Review the automated assessment and add Dynava's professional
            observations, risk interpretation, opportunities, and overall
            assessment.
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <ReviewField
            label="Consultant observations"
            value={review?.observations}
          />

          <ReviewField
            label="Risk areas"
            value={review?.risk_areas}
          />

          <ReviewField
            label="Key opportunities"
            value={review?.opportunities}
          />

          <ReviewField
            label="Consultant assessment"
            value={review?.consultant_assessment}
          />
        </div>

        <div className="mt-8 border-t border-slate-200 pt-6">
          <p className="text-xs leading-5 text-slate-500">
            {review
              ? `Review status: ${review.status}`
              : "No consultant review has been created yet."}
          </p>
        </div>
      </div>
    </section>
  );
}

// ------------------------------------------------------------------
// Score
// ------------------------------------------------------------------

function Score({
  label,
  value,
}: {
  label: string;
  value?: number;
}) {
  return (
    <div className="rounded-xl border border-slate-200 p-5">
      <p className="text-sm leading-6 text-slate-600">
        {label}
      </p>

      <p className="mt-4 text-2xl font-medium tracking-[-0.03em] text-slate-950">
        {typeof value === "number"
          ? value.toFixed(2)
          : "—"}
      </p>
    </div>
  );
}

// ------------------------------------------------------------------
// Review field
// ------------------------------------------------------------------

function ReviewField({
  label,
  value,
}: {
  label: string;
  value?: string | null;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
      <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-slate-400">
        {label}
      </p>

      <p className="mt-3 min-h-20 whitespace-pre-wrap text-sm leading-6 text-slate-600">
        {value?.trim() || "Not provided yet."}
      </p>
    </div>
  );
}
