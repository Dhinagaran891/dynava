import { getPortalContext } from "@/lib/portal/getPortalContext";
import { AssessmentActions } from "./AssessmentActions";

export default async function AssessmentsPage() {
  const { supabase, isDynavaStaff } = await getPortalContext();

  // ------------------------------------------------------------
  // Dynava staff access check
  // ------------------------------------------------------------

  if (!isDynavaStaff) {
    return (
      <section aria-labelledby="assessment-access-heading">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#126BFF]">
          ASSESSMENTS
        </p>

        <h1
          id="assessment-access-heading"
          className="mt-5 text-4xl font-medium tracking-[-0.04em] text-slate-950 sm:text-5xl"
        >
          Access restricted.
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
          This workspace is available to authorized Dynava staff only.
        </p>
      </section>
    );
  }

  // ------------------------------------------------------------
  // Load assessments across client organizations
  // ------------------------------------------------------------

  const { data: assessments, error: assessmentError } = await supabase
    .from("assessments")
    .select(
      `
        id,
        version,
        status,
        started_at,
        submitted_at,
        completed_at,
        created_at,
        organizations (
          id,
          name
        )
      `
    )
    .order("created_at", { ascending: false });

  // ------------------------------------------------------------
  // Assessment lookup error
  // ------------------------------------------------------------

  if (assessmentError) {
    console.error("Assessments lookup error:", assessmentError);

    return (
      <section aria-labelledby="assessment-error-heading">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#126BFF]">
          ASSESSMENTS
        </p>

        <h1
          id="assessment-error-heading"
          className="mt-5 text-4xl font-medium tracking-[-0.04em] text-slate-950 sm:text-5xl"
        >
          We couldn't load the assessments.
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
          Please try again shortly. If the problem continues, contact your
          Dynava administrator.
        </p>
      </section>
    );
  }

  // ------------------------------------------------------------
  // Render Dynava assessment workspace
  // ------------------------------------------------------------

  return (
    <section aria-labelledby="assessments-heading">
      {/* --------------------------------------------------------
          Header
      -------------------------------------------------------- */}

      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#126BFF]">
            DYNAVA WORKSPACE
          </p>

          <h1
            id="assessments-heading"
            className="mt-4 text-4xl font-medium tracking-[-0.04em] text-slate-950 sm:text-5xl"
          >
            Assessments
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Review client AI readiness assessments and process submitted
            assessments through the Dynava workflow.
          </p>
        </div>

        <div className="shrink-0 self-start rounded-full bg-slate-100 px-4 py-2 text-xs font-medium text-slate-600 sm:self-auto">
          {assessments?.length ?? 0} assessment
          {(assessments?.length ?? 0) === 1 ? "" : "s"}
        </div>
      </div>

      {/* --------------------------------------------------------
          Assessment list
      -------------------------------------------------------- */}

      <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white">
        {assessments && assessments.length > 0 ? (
          <div className="divide-y divide-slate-200">
            {assessments.map((assessment) => {
              const organization = Array.isArray(assessment.organizations)
                ? assessment.organizations[0]
                : assessment.organizations;

              return (
                <div
                  key={assessment.id}
                  className="flex flex-col gap-6 p-6 lg:flex-row lg:items-center lg:justify-between lg:p-7"
                >
                  {/* ------------------------------------------------
                      Assessment information
                  ------------------------------------------------ */}

                  <div className="min-w-0">
                    <p className="text-base font-medium text-slate-950">
                      {organization?.name ?? "Unknown organization"}
                    </p>

                    <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-500">
                      <span>Version {assessment.version}</span>

                      <span>
                        Created{" "}
                        {new Date(
                          assessment.created_at
                        ).toLocaleDateString()}
                      </span>

                      {assessment.submitted_at && (
                        <span>
                          Submitted{" "}
                          {new Date(
                            assessment.submitted_at
                          ).toLocaleDateString()}
                        </span>
                      )}

                      {assessment.completed_at && (
                        <span>
                          Completed{" "}
                          {new Date(
                            assessment.completed_at
                          ).toLocaleDateString()}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* ------------------------------------------------
                      Status + actions
                  ------------------------------------------------ */}

                  <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center lg:items-end">
                    <span
                      className={`rounded-full px-3 py-1 text-[11px] font-medium uppercase tracking-[0.12em] ${
                        assessment.status === "submitted"
                          ? "bg-blue-50 text-[#126BFF]"
                          : assessment.status === "processing"
                            ? "bg-amber-50 text-amber-700"
                            : assessment.status === "completed"
                              ? "bg-emerald-50 text-emerald-700"
                              : assessment.status === "reviewed"
                                ? "bg-violet-50 text-violet-700"
                                : assessment.status === "published"
                                  ? "bg-emerald-50 text-emerald-700"
                                  : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {assessment.status}
                    </span>

                    <AssessmentActions
                      assessmentId={String(assessment.id)}
                      status={String(assessment.status)}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* ------------------------------------------------------
             Empty state
          ------------------------------------------------------ */

          <div className="p-8">
            <p className="text-sm font-medium text-slate-950">
              No assessments yet.
            </p>

            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
              Submitted client assessments will appear here for Dynava
              processing.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}