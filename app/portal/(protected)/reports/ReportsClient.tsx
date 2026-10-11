"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type SectionScores = {
  business_strategy?: number;
  data_analytics?: number;
  technology_infrastructure?: number;
  processes_automation?: number;
  people_skills?: number;
  governance_risk?: number;
  ai_adoption_readiness?: number;
};

interface Report {
  id: string;
  assessmentId: string;
  overallScore: number | null;
  summary: string | null;
  generatedAt: string | null;
  maturityLevel: string;
  sectionScores: SectionScores;
  organizationName: string;
  version: string;
  assessmentStatus: string;
}

interface ReportsClientProps {
  reports: Report[];
}

export default function ReportsClient({
  reports,
}: ReportsClientProps) {
  const [search, setSearch] = useState("");

  // ------------------------------------------------------------
  // Search
  // ------------------------------------------------------------

  const filteredReports = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return reports;
    }

    return reports.filter((report) => {
      return (
        report.organizationName
          .toLowerCase()
          .includes(query) ||
        report.version.toLowerCase().includes(query) ||
        report.maturityLevel
          .toLowerCase()
          .includes(query)
      );
    });
  }, [reports, search]);

  // ------------------------------------------------------------
  // Render
  // ------------------------------------------------------------

  return (
    <section aria-labelledby="reports-heading">
      {/* --------------------------------------------------------
          Header
      -------------------------------------------------------- */}

      <div className="flex flex-col gap-6">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#126BFF]">
            DYNAVA WORKSPACE
          </p>

          <h1
            id="reports-heading"
            className="mt-4 text-4xl font-medium tracking-[-0.04em] text-slate-950 sm:text-5xl"
          >
            Reports
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
            Review generated AI readiness reports before consultant review,
            recommendations, and publication.
          </p>
        </div>

        {/* ------------------------------------------------------
            Search + count
        ------------------------------------------------------ */}

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full sm:max-w-md">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-4 w-4"
              >
                <circle cx="11" cy="11" r="6.5" />
                <path d="m16 16 4.5 4.5" />
              </svg>
            </span>

            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search reports..."
              aria-label="Search reports"
              className="w-full rounded-full border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#126BFF] focus:ring-4 focus:ring-blue-50"
            />
          </div>

          <div className="self-start rounded-full bg-slate-100 px-4 py-2 text-xs font-medium text-slate-600 sm:self-auto">
            {filteredReports.length}{" "}
            {filteredReports.length === 1 ? "report" : "reports"}
          </div>
        </div>
      </div>

      {/* --------------------------------------------------------
          Reports
      -------------------------------------------------------- */}

      <div className="mt-8 space-y-8">
        {filteredReports.length > 0 ? (
          filteredReports.map((report) => (
            <article
              key={report.id}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
            >
              {/* ------------------------------------------------
                  Report identity
              ------------------------------------------------ */}

              <div className="flex flex-col gap-5 border-b border-slate-200 p-6 sm:p-8 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <p className="text-xl font-medium tracking-[-0.02em] text-slate-950">
                    {report.organizationName}
                  </p>

                  <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-500">
                    <span>
                      AI Readiness Assessment · Version {report.version}
                    </span>

                    {report.generatedAt && (
                      <span>
                        Generated{" "}
                        {new Date(
                          report.generatedAt
                        ).toLocaleDateString()}
                      </span>
                    )}
                  </div>
                </div>

                <span className="w-fit rounded-full bg-amber-50 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.14em] text-amber-700">
                  Automated Report
                </span>
              </div>

              {/* ------------------------------------------------
                  Score hero
              ------------------------------------------------ */}

              <div className="grid border-b border-slate-200 md:grid-cols-2">
                <div className="border-b border-slate-200 p-7 md:border-b-0 md:border-r sm:p-8">
                  <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-400">
                    AI Readiness Score
                  </p>

                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-5xl font-medium tracking-[-0.05em] text-slate-950 sm:text-6xl">
                      {report.overallScore !== null
                        ? report.overallScore.toFixed(2)
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
                    {report.maturityLevel}
                  </p>
                </div>
              </div>

              {/* ------------------------------------------------
                  Automated summary
              ------------------------------------------------ */}

              {report.summary && (
                <div className="border-b border-slate-200 p-7 sm:p-8">
                  <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-400">
                    Automated Summary
                  </p>

                  <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-600">
                    {report.summary}
                  </p>
                </div>
              )}

              {/* ------------------------------------------------
                  Section scores
              ------------------------------------------------ */}

              <div className="p-7 sm:p-8">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-400">
                      Section Scores
                    </p>

                    <p className="mt-2 text-sm text-slate-500">
                      Automated readiness scores across the seven assessment
                      dimensions.
                    </p>
                  </div>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  <ScoreCard
                    label="Business & Strategy"
                    score={report.sectionScores.business_strategy}
                  />

                  <ScoreCard
                    label="Data & Analytics"
                    score={report.sectionScores.data_analytics}
                  />

                  <ScoreCard
                    label="Technology & Infrastructure"
                    score={
                      report.sectionScores
                        .technology_infrastructure
                    }
                  />

                  <ScoreCard
                    label="Processes & Automation"
                    score={
                      report.sectionScores.processes_automation
                    }
                  />

                  <ScoreCard
                    label="People & Skills"
                    score={report.sectionScores.people_skills}
                  />

                  <ScoreCard
                    label="Governance & Risk"
                    score={report.sectionScores.governance_risk}
                  />

                  <ScoreCard
                    label="AI Adoption & Readiness"
                    score={
                      report.sectionScores
                        .ai_adoption_readiness
                    }
                  />
                </div>
              </div>

              {/* ------------------------------------------------
                  Review action
              ------------------------------------------------ */}

              <div className="flex flex-col gap-5 border-t border-slate-200 bg-slate-50 p-7 sm:flex-row sm:items-center sm:justify-between sm:p-8">
                <div>
                  <p className="text-sm font-medium text-slate-950">
                    Ready for consultant review
                  </p>

                  <p className="mt-1 max-w-2xl text-xs leading-5 text-slate-500">
                    Automated scoring is complete. Consultant observations,
                    risk interpretation, and recommendations can now be added.
                  </p>
                </div>

                <Link
                href={`/portal/reports/${report.id}`}
                 prefetch={false}
                 className="inline-flex w-full items-center justify-center rounded-full bg-[#126BFF] px-6 py-3 text-[11px] font-medium uppercase tracking-[0.12em] text-white transition hover:bg-[#0f5de0] sm:w-auto"
>
                  Open Consultant Review
                </Link>
              </div>
            </article>
          ))
        ) : (
          <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center">
            <p className="text-sm font-medium text-slate-950">
              No matching reports
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Try searching by organization name, assessment version, or
              maturity level.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

// ------------------------------------------------------------------
// Score Card
// ------------------------------------------------------------------

function ScoreCard({
  label,
  score,
}: {
  label: string;
  score?: number;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <p className="text-sm leading-6 text-slate-600">
        {label}
      </p>

      <div className="mt-4 flex items-baseline gap-1.5">
        <span className="text-2xl font-medium tracking-[-0.03em] text-slate-950">
          {typeof score === "number"
            ? score.toFixed(2)
            : "—"}
        </span>

        {typeof score === "number" && (
          <span className="text-xs text-slate-400">
            / 100
          </span>
        )}
      </div>
    </div>
  );
}