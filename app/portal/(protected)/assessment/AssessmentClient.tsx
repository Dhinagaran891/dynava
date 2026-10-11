"use client";

import { useMemo, useState } from "react";
import { createClient } from "@/lib/supabase/client";

type QuestionType =
  | "text"
  | "textarea"
  | "single_choice"
  | "multiple_choice"
  | "number"
  | "boolean"
  | "scale";

type Question = {
  id: string;
  question_key: string;
  question_text: string;
  question_type: QuestionType;
  options: string[] | null;
  sort_order: number;
  required: boolean;
};

type Section = {
  id: string;
  key: string;
  title: string;
  description: string | null;
  sort_order: number;
  questions: Question[];
};

type ExistingResponse = {
  question_id: string;
  response: unknown;
};

type AssessmentClientProps = {
  assessmentId: string;
  sections: Section[];
  existingResponses: ExistingResponse[];
};

export default function AssessmentClient({
  assessmentId,
  sections,
  existingResponses,
}: AssessmentClientProps) {
  const supabase = useMemo(() => createClient(), []);

  const [currentSectionIndex, setCurrentSectionIndex] =
    useState(0);

  const [answers, setAnswers] = useState<
    Record<string, unknown>
  >(() => {
    const initialAnswers: Record<string, unknown> = {};

    existingResponses.forEach((item) => {
      initialAnswers[item.question_id] =
        item.response;
    });

    return initialAnswers;
  });

  const [saving, setSaving] = useState(false);
  const [reviewMode, setReviewMode] =
    useState(false);
  const [submitted, setSubmitted] =
    useState(false);
  const [error, setError] =
    useState<string | null>(null);

  const currentSection =
    sections[currentSectionIndex];

  if (!currentSection) {
    return (
      <section>
        <p className="text-sm text-slate-600">
          No assessment sections are available.
        </p>
      </section>
    );
  }

  const updateAnswer = (
    questionId: string,
    value: unknown
  ) => {
    setAnswers((current) => ({
      ...current,
      [questionId]: value,
    }));

    setError(null);
  };

  const isAnswered = (
    question: Question
  ): boolean => {
    const value = answers[question.id];

    if (
      value === undefined ||
      value === null
    ) {
      return false;
    }

    if (typeof value === "string") {
      return value.trim().length > 0;
    }

    if (Array.isArray(value)) {
      return value.length > 0;
    }

    return true;
  };

  const getSectionCompletion = (
    section: Section
  ) => {
    const total = section.questions.length;

    const answered = section.questions.filter(
      (question) => isAnswered(question)
    ).length;

    return {
      total,
      answered,
    };
  };

  const allRequiredQuestionsAnswered =
    sections.every((section) =>
      section.questions.every(
        (question) =>
          !question.required ||
          isAnswered(question)
      )
    );

  const saveCurrentSection =
    async (): Promise<boolean> => {
      setSaving(true);
      setError(null);

      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();

        if (!user) {
          throw new Error(
            "Your session has expired. Please sign in again."
          );
        }

        for (const question of currentSection.questions) {
          const value = answers[question.id];

          if (value === undefined) {
            continue;
          }

          const { error: saveError } =
            await supabase
              .from("assessment_responses")
              .upsert(
                {
                  assessment_id:
                    assessmentId,
                  question_id:
                    question.id,
                  user_id: user.id,
                  response: value,
                  updated_at:
                    new Date().toISOString(),
                },
                {
                  onConflict:
                    "assessment_id,question_id",
                }
              );

          if (saveError) {
            console.error(
              "Assessment response save error:",
              saveError
            );

            throw new Error(
              "We couldn't save your answers. Please try again."
            );
          }
        }

        return true;
      } catch (err) {
        console.error(
          "Assessment save error:",
          err
        );

        setError(
          err instanceof Error
            ? err.message
            : "Something went wrong while saving your answers."
        );

        return false;
      } finally {
        setSaving(false);
      }
    };

  const saveAllAnswers =
    async (): Promise<boolean> => {
      setSaving(true);
      setError(null);

      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();

        if (!user) {
          throw new Error(
            "Your session has expired. Please sign in again."
          );
        }

        for (const section of sections) {
          for (const question of section.questions) {
            const value =
              answers[question.id];

            if (value === undefined) {
              continue;
            }

            const { error: saveError } =
              await supabase
                .from(
                  "assessment_responses"
                )
                .upsert(
                  {
                    assessment_id:
                      assessmentId,
                    question_id:
                      question.id,
                    user_id: user.id,
                    response: value,
                    updated_at:
                      new Date().toISOString(),
                  },
                  {
                    onConflict:
                      "assessment_id,question_id",
                  }
                );

            if (saveError) {
              console.error(
                "Assessment response save error:",
                saveError
              );

              throw new Error(
                "We couldn't save all of your answers. Please try again."
              );
            }
          }
        }

        return true;
      } catch (err) {
        console.error(
          "Assessment save-all error:",
          err
        );

        setError(
          err instanceof Error
            ? err.message
            : "Something went wrong while saving your answers."
        );

        return false;
      } finally {
        setSaving(false);
      }
    };

  const handleNext = async () => {
    const unansweredRequired =
      currentSection.questions.filter(
        (question) =>
          question.required &&
          !isAnswered(question)
      );

    if (unansweredRequired.length > 0) {
      setError(
        "Please answer all required questions before continuing."
      );

      return;
    }

    const saved =
      await saveCurrentSection();

    if (!saved) {
      return;
    }

    if (
      currentSectionIndex <
      sections.length - 1
    ) {
      setCurrentSectionIndex(
        (current) => current + 1
      );

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    const savedAll =
      await saveAllAnswers();

    if (!savedAll) {
      return;
    }

    setReviewMode(true);
    setError(null);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleBack = () => {
    if (currentSectionIndex === 0) {
      return;
    }

    setCurrentSectionIndex(
      (current) => current - 1
    );

    setError(null);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleEditSection = (
    sectionIndex: number
  ) => {
    setReviewMode(false);
    setCurrentSectionIndex(
      sectionIndex
    );
    setError(null);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleSubmit = async () => {
    setError(null);

    if (!allRequiredQuestionsAnswered) {
      setError(
        "Please complete all required questions before submitting the assessment."
      );

      return;
    }

    const saved =
      await saveAllAnswers();

    if (!saved) {
      return;
    }

    setSaving(true);

    try {
      const { error: submitError } =
  await supabase.rpc(
    "submit_assessment",
    {
      p_assessment_id: assessmentId,
    }
  );

if (submitError) {
  const rpcError = submitError as {
    message?: string;
    code?: string;
    details?: string;
    hint?: string;
  };

  const errorMessage = [
    rpcError.message,
    rpcError.code
      ? `Code: ${rpcError.code}`
      : null,
    rpcError.details
      ? `Details: ${rpcError.details}`
      : null,
    rpcError.hint
      ? `Hint: ${rpcError.hint}`
      : null,
  ]
    .filter(Boolean)
    .join(" | ");

  throw new Error(
    errorMessage ||
      "The assessment submission function returned an unknown error."
  );
}

    if (submitError) {
  console.error(
    "Assessment submission error:",
    submitError
  );

 throw new Error(
  `Submission failed: ${JSON.stringify(submitError)}`
);
}

      setSubmitted(true);
      setError(null);
    } catch (err) {
      console.error(
        "Assessment submission error:",
        err
      );

     setError(String(err));
    } finally {
      setSaving(false);
    }
  };

  // ------------------------------------------------------------
  // Submitted state
  // ------------------------------------------------------------

  if (submitted) {
    return (
      <section
        aria-labelledby="assessment-submitted-heading"
        className="max-w-3xl"
      >
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#126BFF]">
          ASSESSMENT SUBMITTED
        </p>

        <h1
          id="assessment-submitted-heading"
          className="mt-5 text-4xl font-medium tracking-[-0.04em] text-slate-950 sm:text-5xl"
        >
          Your assessment has been submitted.
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
          Thank you for completing the Dynava AI
          Readiness Assessment. Your responses have
          been submitted for review.
        </p>

        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium text-slate-950">
            What happens next?
          </p>

          <p className="mt-3 text-sm leading-6 text-slate-500">
            Dynava will review your assessment and
            prepare the next stage of your AI
            readiness analysis.
          </p>

          <div className="mt-6 inline-flex rounded-full bg-slate-100 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-slate-600">
            Submitted
          </div>
        </div>
      </section>
    );
  }

  // ------------------------------------------------------------
  // Review mode
  // ------------------------------------------------------------

  if (reviewMode) {
    return (
      <ReviewView
        sections={sections}
        answers={answers}
        saving={saving}
        error={error}
        onEditSection={
          handleEditSection
        }
        onSubmit={handleSubmit}
      />
    );
  }

  // ------------------------------------------------------------
  // Questionnaire mode
  // ------------------------------------------------------------

  const progress = Math.round(
    ((currentSectionIndex + 1) /
      sections.length) *
      100
  );

  return (
    <section aria-labelledby="assessment-heading">
      {/* Progress */}

      <div className="mb-10">
        <div className="flex items-center justify-between">
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-slate-500">
            Section{" "}
            {currentSectionIndex + 1} of{" "}
            {sections.length}
          </p>

          <p className="text-sm font-medium text-slate-500">
            {progress}%
          </p>
        </div>

        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-[#126BFF] transition-all duration-300"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>
      </div>

      {/* Section heading */}

      <div className="mb-10">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#126BFF]">
          AI READINESS ASSESSMENT
        </p>

        <h1
          id="assessment-heading"
          className="mt-4 text-4xl font-medium tracking-[-0.04em] text-slate-950 sm:text-5xl"
        >
          {currentSection.title}
        </h1>

        {currentSection.description && (
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
            {currentSection.description}
          </p>
        )}
      </div>

      {/* Questions */}

      <div className="space-y-6">
        {currentSection.questions.map(
          (question, index) => (
            <QuestionCard
              key={question.id}
              question={question}
              number={index + 1}
              value={answers[question.id]}
              onChange={(value) =>
                updateAnswer(
                  question.id,
                  value
                )
              }
            />
          )
        )}
      </div>

      {/* Error */}

      {error && (
        <div className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      {/* Navigation */}

      <div className="mt-10 flex items-center justify-between border-t border-slate-200 pt-6">
        <button
          type="button"
          onClick={handleBack}
          disabled={
            currentSectionIndex === 0 ||
            saving
          }
          className="rounded-full border border-slate-200 px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Back
        </button>

        <button
          type="button"
          onClick={handleNext}
          disabled={saving}
          className="rounded-full bg-slate-950 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {saving
            ? "Saving..."
            : currentSectionIndex ===
                sections.length - 1
              ? "Save & Review"
              : "Save & Continue"}
        </button>
      </div>
    </section>
  );
}

// ============================================================
// Review View
// ============================================================

function ReviewView({
  sections,
  answers,
  saving,
  error,
  onEditSection,
  onSubmit,
}: {
  sections: Section[];
  answers: Record<string, unknown>;
  saving: boolean;
  error: string | null;
  onEditSection: (
    sectionIndex: number
  ) => void;
  onSubmit: () => void;
}) {
  const totalQuestions =
    sections.reduce(
      (total, section) =>
        total + section.questions.length,
      0
    );

  const answeredQuestions =
    sections.reduce(
      (total, section) =>
        total +
        section.questions.filter(
          (question) =>
            isAnswerPresent(
              answers[question.id]
            )
        ).length,
      0
    );

  return (
    <section
      aria-labelledby="assessment-review-heading"
      className="max-w-4xl"
    >
      {/* Header */}

      <div className="mb-10">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#126BFF]">
          REVIEW ASSESSMENT
        </p>

        <h1
          id="assessment-review-heading"
          className="mt-4 text-4xl font-medium tracking-[-0.04em] text-slate-950 sm:text-5xl"
        >
          Review your responses
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
          Review your answers before submitting
          your AI Readiness Assessment. You can
          return to any section and make changes.
        </p>
      </div>

      {/* Completion summary */}

      <div className="mb-8 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500">
              COMPLETION
            </p>

            <p className="mt-2 text-2xl font-medium tracking-[-0.03em] text-slate-950">
              {answeredQuestions} of{" "}
              {totalQuestions} answered
            </p>
          </div>

          <div className="inline-flex w-fit rounded-full bg-slate-100 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-slate-600">
            Ready for review
          </div>
        </div>
      </div>

      {/* Sections */}

      <div className="space-y-6">
        {sections.map(
          (section, sectionIndex) => {
            const answered =
              section.questions.filter(
                (question) =>
                  isAnswerPresent(
                    answers[
                      question.id
                    ]
                  )
              ).length;

            return (
              <div
                key={section.id}
                className="rounded-2xl border border-slate-200 bg-white"
              >
                {/* Section header */}

                <div className="flex flex-col gap-4 border-b border-slate-100 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500">
                      SECTION{" "}
                      {sectionIndex + 1}
                    </p>

                    <h2 className="mt-2 text-2xl font-medium tracking-[-0.03em] text-slate-950">
                      {section.title}
                    </h2>

                    <p className="mt-2 text-sm text-slate-500">
                      {answered} of{" "}
                      {section.questions.length}{" "}
                      answered
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      onEditSection(
                        sectionIndex
                      )
                    }
                    className="w-fit rounded-full border border-slate-200 px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
                  >
                    Edit section
                  </button>
                </div>

                {/* Questions */}

                <div className="divide-y divide-slate-100">
                  {section.questions.map(
                    (question, questionIndex) => (
                      <div
                        key={question.id}
                        className="p-6 sm:p-8"
                      >
                        <div className="flex gap-4">
                          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-medium text-slate-600">
                            {questionIndex +
                              1}
                          </div>

                          <div className="min-w-0 flex-1">
                            <p className="text-sm font-medium leading-6 text-slate-900">
                              {
                                question.question_text
                              }
                            </p>

                            <div className="mt-3 text-sm leading-6 text-slate-600">
                              {formatAnswer(
                                answers[
                                  question.id
                                ]
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            );
          }
        )}
      </div>

      {/* Error */}

      {error && (
        <div className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      {/* Submit */}

      <div className="mt-10 border-t border-slate-200 pt-6">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium text-slate-950">
            Ready to submit?
          </p>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
            Once submitted, your assessment will
            be sent to Dynava for review.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="button"
              onClick={() =>
                onEditSection(0)
              }
              disabled={saving}
              className="w-fit rounded-full border border-slate-200 px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 disabled:opacity-50"
            >
              Return to assessment
            </button>

            <button
              type="button"
              onClick={onSubmit}
              disabled={saving}
              className="rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {saving
                ? "Submitting..."
                : "Submit Assessment"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Answer helpers
// ============================================================

function isAnswerPresent(
  value: unknown
): boolean {
  if (
    value === undefined ||
    value === null
  ) {
    return false;
  }

  if (typeof value === "string") {
    return value.trim().length > 0;
  }

  if (Array.isArray(value)) {
    return value.length > 0;
  }

  return true;
}

function formatAnswer(
  value: unknown
): string {
  if (
    value === undefined ||
    value === null
  ) {
    return "Not answered";
  }

  if (Array.isArray(value)) {
    if (value.length === 0) {
      return "Not answered";
    }

    return value.join(", ");
  }

  if (typeof value === "boolean") {
    return value ? "Yes" : "No";
  }

  return String(value);
}

// ============================================================
// Question Card
// ============================================================

function QuestionCard({
  question,
  number,
  value,
  onChange,
}: {
  question: Question;
  number: number;
  value: unknown;
  onChange: (value: unknown) => void;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
      <div className="flex gap-4">
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-medium text-slate-600">
          {number}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-start gap-2">
            <h2 className="text-base font-medium leading-7 text-slate-950">
              {question.question_text}
            </h2>

            {question.required && (
              <span className="text-xs font-medium text-[#126BFF]">
                Required
              </span>
            )}
          </div>

          <div className="mt-6">
            <QuestionInput
              question={question}
              value={value}
              onChange={onChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// Question Input
// ============================================================

function QuestionInput({
  question,
  value,
  onChange,
}: {
  question: Question;
  value: unknown;
  onChange: (value: unknown) => void;
}) {
  switch (question.question_type) {
    case "single_choice":
      return (
        <div className="space-y-3">
          {(question.options ?? []).map(
            (option) => (
              <label
                key={option}
                className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 transition ${
                  value === option
                    ? "border-[#126BFF] bg-blue-50"
                    : "border-slate-200 hover:border-slate-300"
                }`}
              >
                <input
                  type="radio"
                  name={question.id}
                  value={option}
                  checked={
                    value === option
                  }
                  onChange={() =>
                    onChange(option)
                  }
                  className="h-4 w-4 accent-[#126BFF]"
                />

                <span className="text-sm leading-6 text-slate-700">
                  {option}
                </span>
              </label>
            )
          )}
        </div>
      );

    case "multiple_choice": {
      const selected: string[] =
        Array.isArray(value)
          ? value.filter(
              (item): item is string =>
                typeof item ===
                "string"
            )
          : [];

      return (
        <div className="space-y-3">
          {(question.options ?? []).map(
            (option) => {
              const checked =
                selected.includes(option);

              return (
                <label
                  key={option}
                  className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 transition ${
                    checked
                      ? "border-[#126BFF] bg-blue-50"
                      : "border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => {
                      const next =
                        checked
                          ? selected.filter(
                              (item) =>
                                item !==
                                option
                            )
                          : [
                              ...selected,
                              option,
                            ];

                      onChange(next);
                    }}
                    className="h-4 w-4 rounded accent-[#126BFF]"
                  />

                  <span className="text-sm leading-6 text-slate-700">
                    {option}
                  </span>
                </label>
              );
            }
          )}
        </div>
      );
    }

    case "scale":
      return (
        <div>
          <div className="grid grid-cols-5 gap-2">
            {[1, 2, 3, 4, 5].map(
              (number) => (
                <button
                  key={number}
                  type="button"
                  onClick={() =>
                    onChange(number)
                  }
                  className={`rounded-xl border px-3 py-3 text-sm font-medium transition ${
                    value === number
                      ? "border-[#126BFF] bg-[#126BFF] text-white"
                      : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
                  }`}
                >
                  {number}
                </button>
              )
            )}
          </div>

          <div className="mt-3 flex justify-between text-xs text-slate-400">
            <span>Low</span>
            <span>High</span>
          </div>
        </div>
      );

    case "textarea":
      return (
        <textarea
          value={
            typeof value === "string"
              ? value
              : ""
          }
          onChange={(event) =>
            onChange(
              event.target.value
            )
          }
          rows={5}
          placeholder="Type your answer..."
          className="w-full resize-y rounded-xl border border-slate-200 px-4 py-3 text-sm leading-6 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#126BFF] focus:ring-2 focus:ring-blue-100"
        />
      );

    case "text":
      return (
        <input
          type="text"
          value={
            typeof value === "string"
              ? value
              : ""
          }
          onChange={(event) =>
            onChange(
              event.target.value
            )
          }
          placeholder="Type your answer..."
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#126BFF] focus:ring-2 focus:ring-blue-100"
        />
      );

    case "number":
      return (
        <input
          type="number"
          value={
            typeof value === "number"
              ? value
              : ""
          }
          onChange={(event) =>
            onChange(
              event.target.value === ""
                ? undefined
                : Number(
                    event.target.value
                  )
            )
          }
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-[#126BFF] focus:ring-2 focus:ring-blue-100"
        />
      );

    case "boolean":
      return (
        <div className="flex gap-3">
          {[true, false].map(
            (option) => (
              <button
                key={String(option)}
                type="button"
                onClick={() =>
                  onChange(option)
                }
                className={`rounded-xl border px-6 py-3 text-sm font-medium transition ${
                  value === option
                    ? "border-[#126BFF] bg-[#126BFF] text-white"
                    : "border-slate-200 text-slate-700 hover:border-slate-300"
                }`}
              >
                {option
                  ? "Yes"
                  : "No"}
              </button>
            )
          )}
        </div>
      );

    default:
      return null;
  }
}