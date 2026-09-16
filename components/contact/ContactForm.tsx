"use client";

import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  company: string;
  topic: string;
  message: string;
  privacy: boolean;
};

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    topic: "",
    message: "",
    privacy: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const updateField = (
    field: keyof FormData,
    value: string | boolean
  ) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.privacy) return;

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex min-h-[420px] items-center justify-center rounded-[28px] border border-slate-200 bg-white p-8 text-center shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
        <div className="max-w-md">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-xl text-emerald-600">
            ✓
          </div>

          <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
            Thanks for reaching out.
          </h3>

          <p className="mt-3 text-sm leading-6 text-slate-500">
            Your enquiry has been received. We’ll review the details and
            get back to you soon.
          </p>

          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="mt-7 text-sm font-medium text-slate-950 underline underline-offset-4 transition hover:text-[#126BFF]"
          >
            Send another enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] sm:p-8 lg:p-10"
    >
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
          Start here
        </p>

        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
          Tell us what you’re working on.
        </h2>

        <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
          A few details will help us understand the context before we
          speak.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {/* Name */}
        <Field label="Full name" htmlFor="name">
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={(e) => updateField("name", e.target.value)}
            placeholder="Your name"
            className="contact-input"
          />
        </Field>

        {/* Email */}
        <Field label="Work email" htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => updateField("email", e.target.value)}
            placeholder="you@company.com"
            className="contact-input"
          />
        </Field>

        {/* Company */}
        <Field label="Company" htmlFor="company">
          <input
            id="company"
            name="company"
            type="text"
            value={form.company}
            onChange={(e) => updateField("company", e.target.value)}
            placeholder="Company name"
            className="contact-input"
          />
        </Field>

        {/* Topic */}
        <Field label="What would you like to discuss?" htmlFor="topic">
          <select
            id="topic"
            name="topic"
            required
            value={form.topic}
            onChange={(e) => updateField("topic", e.target.value)}
            className="contact-input appearance-none"
          >
            <option value="">Select an option</option>
            <option value="ai-workflow">
              AI workflow transformation
            </option>
            <option value="ai-assessment">
              AI workflow assessment
            </option>
            <option value="automation">
              Automation & digital transformation
            </option>
            <option value="data">
              Data & intelligence
            </option>
            <option value="other">Something else</option>
          </select>
        </Field>

        {/* Message — full width */}
        <Field
          label="Message"
          htmlFor="message"
          className="sm:col-span-2"
        >
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            value={form.message}
            onChange={(e) => updateField("message", e.target.value)}
            placeholder="Tell us a little about the challenge, workflow, or opportunity..."
            className="contact-input min-h-[150px] resize-y"
          />
        </Field>
      </div>

      {/* Bottom area */}
      <div className="mt-7 border-t border-slate-100 pt-6">
        <label
          htmlFor="privacy"
          className="flex cursor-pointer items-start gap-3"
        >
          <input
            id="privacy"
            name="privacy"
            type="checkbox"
            checked={form.privacy}
            onChange={(e) =>
              updateField("privacy", e.target.checked)
            }
            className="mt-1 h-4 w-4 shrink-0 accent-[#126BFF]"
          />

          <span className="text-xs leading-5 text-slate-500">
            I consent to Dynava using the information provided to
            evaluate my enquiry and contact me regarding relevant
            services.
          </span>
        </label>

        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-400">
            Please review our privacy policy before submitting.
          </p>

          <button
            type="submit"
            disabled={!form.privacy}
            className="
              group
              inline-flex
              items-center
              justify-center
              gap-3
              rounded-full
              bg-slate-950
              px-6
              py-3.5
              text-sm
              font-medium
              text-white
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#126BFF]
              disabled:cursor-not-allowed
              disabled:opacity-40
              disabled:hover:translate-y-0
              disabled:hover:bg-slate-950
            "
          >
            Send enquiry

            <span
              aria-hidden="true"
              className="text-base transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </button>
        </div>
      </div>
    </form>
  );
}

type FieldProps = {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
  className?: string;
};

function Field({
  label,
  htmlFor,
  children,
  className = "",
}: FieldProps) {
  return (
    <div className={className}>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-sm font-medium text-slate-700"
      >
        {label}
      </label>

      {children}
    </div>
  );
}