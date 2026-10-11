"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

interface AssessmentActionsProps {
  assessmentId: string;
  status: string;
}

export function AssessmentActions({
  assessmentId,
  status,
}: AssessmentActionsProps) {
  const [generating, setGenerating] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateReport = async () => {
    setGenerating(true);
    setMessage(null);
    setError(null);

    try {
      const supabase = createClient();

      const { data, error: rpcError } = await supabase.rpc(
        "generate_assessment_report",
        {
          p_assessment_id: assessmentId,
        }
      );

      if (rpcError) {
        console.error("Report generation error:", rpcError);

        throw new Error(
          rpcError.message ||
            "The assessment report could not be generated."
        );
      }

      if (!data) {
        throw new Error(
          "The report generation completed without returning a report."
        );
      }

      setMessage(
        `Report generated successfully — ${Number(
          data.overall_score
        ).toFixed(2)}/100 · ${data.maturity_level}`
      );
    } catch (err) {
      console.error("Generate report error:", err);

      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong while generating the report."
      );
    } finally {
      setGenerating(false);
    }
  };

  if (status !== "submitted") {
    return null;
  }

  return (
    <div className="flex flex-col items-end gap-2">
      <button
        type="button"
        onClick={handleGenerateReport}
        disabled={generating}
        className="inline-flex items-center justify-center rounded-full bg-[#126BFF] px-4 py-2 text-[11px] font-medium uppercase tracking-[0.12em] text-white transition hover:bg-[#0f5de0] disabled:cursor-not-allowed disabled:opacity-50"
      >
        {generating ? "Generating..." : "Generate Report"}
      </button>

      {message && (
        <p className="max-w-xs text-right text-xs leading-5 text-emerald-700">
          {message}
        </p>
      )}

      {error && (
        <p className="max-w-xs text-right text-xs leading-5 text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}