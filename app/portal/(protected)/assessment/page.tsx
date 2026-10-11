import { getPortalContext } from "@/lib/portal/getPortalContext";
import AssessmentClient from "./AssessmentClient";

export default async function AssessmentPage() {
  const { supabase, organization } = await getPortalContext();

  // ------------------------------------------------------------
  // Organization check
  // ------------------------------------------------------------

  if (!organization) {
    return (
      <section aria-labelledby="assessment-access-heading">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#126BFF]">
          AI READINESS ASSESSMENT
        </p>

        <h1
          id="assessment-access-heading"
          className="mt-5 text-4xl font-medium tracking-[-0.04em] text-slate-950 sm:text-5xl"
        >
          Assessment access is not configured.
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
          Your account is authenticated, but it is not currently connected to
          an organization. Please contact your Dynava representative.
        </p>
      </section>
    );
  }

  // ------------------------------------------------------------
  // Load latest assessment for the organization
  // ------------------------------------------------------------

  const { data: assessment, error: assessmentError } = await supabase
    .from("assessments")
    .select("id, version, status, created_at")
    .eq("organization_id", organization.id)
    .order("created_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  if (assessmentError) {
    console.error("Assessment lookup error:", assessmentError);

    return (
      <section aria-labelledby="assessment-error-heading">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#126BFF]">
          AI READINESS ASSESSMENT
        </p>

        <h1
          id="assessment-error-heading"
          className="mt-5 text-4xl font-medium tracking-[-0.04em] text-slate-950 sm:text-5xl"
        >
          We couldn't load your assessment.
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
          Please try again shortly. If the problem continues, contact your
          Dynava representative.
        </p>
      </section>
    );
  }

  // ------------------------------------------------------------
  // No assessment assigned
  // ------------------------------------------------------------

  if (!assessment) {
    return (
      <section aria-labelledby="assessment-empty-heading">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#126BFF]">
          AI READINESS ASSESSMENT
        </p>

        <h1
          id="assessment-empty-heading"
          className="mt-5 text-4xl font-medium tracking-[-0.04em] text-slate-950 sm:text-5xl"
        >
          Your assessment is not ready yet.
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
          Dynava has not assigned an AI readiness assessment to{" "}
          <span className="font-medium text-slate-800">
            {organization.name}
          </span>{" "}
          yet.
        </p>

        <div className="mt-10 max-w-2xl rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium text-slate-950">
            What happens next?
          </p>

          <p className="mt-3 text-sm leading-6 text-slate-500">
            Once your assessment is assigned, it will appear here with the
            sections and questions required to complete it.
          </p>

          <div className="mt-6 inline-flex rounded-full bg-slate-100 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-slate-500">
            Awaiting assessment
          </div>
        </div>
      </section>
    );
  }

  // ------------------------------------------------------------
  // Normalize assessment ID
  // ------------------------------------------------------------

  const assessmentId = String(assessment.id);

  // ------------------------------------------------------------
  // Load assessment sections and questions
  // ------------------------------------------------------------

  const { data: sections, error: sectionsError } = await supabase
    .from("assessment_sections")
    .select(
      `
        id,
        key,
        title,
        description,
        sort_order,
        assessment_questions (
          id,
          question_key,
          question_text,
          question_type,
          options,
          sort_order,
          required
        )
      `
    )
    .eq("assessment_id", assessmentId)
    .order("sort_order", { ascending: true });

  if (sectionsError) {
    console.error("Assessment sections lookup error:", sectionsError);

    return (
      <section aria-labelledby="assessment-questions-error-heading">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#126BFF]">
          AI READINESS ASSESSMENT
        </p>

        <h1
          id="assessment-questions-error-heading"
          className="mt-5 text-4xl font-medium tracking-[-0.04em] text-slate-950 sm:text-5xl"
        >
          We couldn't load the assessment questions.
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
          Please try again shortly. If the problem continues, contact your
          Dynava representative.
        </p>
      </section>
    );
  }

  // ------------------------------------------------------------
  // Normalize sections
  // ------------------------------------------------------------

  const normalizedSections = (sections ?? []).map((section) => ({
    id: String(section.id),
    key: String(section.key),
    title: String(section.title),
    description: section.description
      ? String(section.description)
      : null,
    sort_order: Number(section.sort_order),
    questions: [...(section.assessment_questions ?? [])]
      .map((question) => ({
        id: String(question.id),
        question_key: String(question.question_key),
        question_text: String(question.question_text),
        question_type: question.question_type as
          | "text"
          | "textarea"
          | "single_choice"
          | "multiple_choice"
          | "number"
          | "boolean"
          | "scale",
        options: Array.isArray(question.options)
          ? question.options.filter(
              (option): option is string => typeof option === "string"
            )
          : null,
        sort_order: Number(question.sort_order),
        required: Boolean(question.required),
      }))
      .sort((a, b) => a.sort_order - b.sort_order),
  }));

  // ------------------------------------------------------------
  // Load existing responses
  // ------------------------------------------------------------

  const { data: existingResponses, error: responsesError } = await supabase
    .from("assessment_responses")
    .select("question_id, response")
    .eq("assessment_id", assessmentId);

  if (responsesError) {
    console.error(
      "Assessment responses lookup error:",
      responsesError
    );

    return (
      <section aria-labelledby="assessment-responses-error-heading">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#126BFF]">
          AI READINESS ASSESSMENT
        </p>

        <h1
          id="assessment-responses-error-heading"
          className="mt-5 text-4xl font-medium tracking-[-0.04em] text-slate-950 sm:text-5xl"
        >
          We couldn't load your saved answers.
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
          Please try again shortly. If the problem continues, contact your
          Dynava representative.
        </p>
      </section>
    );
  }

  // ------------------------------------------------------------
  // Normalize existing responses
  // ------------------------------------------------------------

  const normalizedResponses = (existingResponses ?? []).map(
    (response) => ({
      question_id: String(response.question_id),
      response: response.response,
    })
  );

  // ------------------------------------------------------------
  // Render questionnaire
  // ------------------------------------------------------------

return (
  <>


    <AssessmentClient
      assessmentId={assessmentId}
      sections={normalizedSections}
      existingResponses={normalizedResponses}
    />
  </>
);
}
