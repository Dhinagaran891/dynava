"use client";

import Link from "next/link";

const sections = [
  {
    number: "01",
    title: "Acceptance of these terms",
    paragraphs: [
      "By accessing or using the Dynava website, you agree to be bound by these Terms & Conditions. If you do not agree with these terms, please do not use the website.",
      "These terms apply to visitors, prospective clients, business partners, and other users of the website.",
    ],
  },
  {
    number: "02",
    title: "About Dynava",
    paragraphs: [
      "Dynava provides information about AI, data, digital technology, workflow improvement, and related consulting or transformation services.",
      "The information presented on this website is intended to help visitors understand our capabilities and explore potential business discussions.",
    ],
  },
  {
    number: "03",
    title: "Use of the website",
    paragraphs: [
      "You agree to use this website only for lawful purposes and in a way that does not interfere with its operation, security, or availability.",
      "You must not attempt to gain unauthorised access to the website, its systems, connected services, or any information that is not intended for you.",
    ],
  },
  {
    number: "04",
    title: "Information and content",
    paragraphs: [
      "We aim to keep the information on this website accurate and useful. However, website content may contain errors, omissions, or information that becomes outdated.",
      "Website content is provided for general informational purposes and should not be treated as professional, legal, financial, technical, or other specialised advice.",
    ],
  },
  {
    number: "05",
    title: "Services and proposals",
    paragraphs: [
      "Descriptions of Dynava’s services do not constitute a binding offer or guarantee that a particular service will be available to every visitor.",
      "Any actual engagement, project, deliverable, fee, timeline, responsibility, or obligation will be governed by a separate written agreement or proposal accepted by the relevant parties.",
    ],
  },
  {
    number: "06",
    title: "Intellectual property",
    paragraphs: [
      "Unless otherwise stated, the website design, branding, logos, text, graphics, and other content are owned by or licensed to Dynava.",
      "You may view and use the website for personal or legitimate business evaluation purposes. You must not copy, reproduce, modify, distribute, or commercially exploit website content without appropriate permission.",
    ],
  },
  {
    number: "07",
    title: "Third-party links and services",
    paragraphs: [
      "The website may contain links to third-party websites, platforms, or services. These links are provided for convenience and do not necessarily represent endorsement by Dynava.",
      "Dynava is not responsible for the availability, content, security, or practices of third-party websites or services.",
    ],
  },
  {
    number: "08",
    title: "Disclaimers",
    paragraphs: [
      "The website is provided on an “as available” and “as is” basis, to the extent permitted by applicable law.",
      "We do not guarantee that the website will always be uninterrupted, error-free, secure, or free from harmful components.",
      "Any decision you make based on website content is your responsibility.",
    ],
  },
  {
    number: "09",
    title: "Limitation of liability",
    paragraphs: [
      "To the extent permitted by applicable law, Dynava will not be responsible for indirect, incidental, special, consequential, or loss-of-profit damages arising from or connected with your use of the website.",
      "Nothing in these terms excludes or limits liability that cannot legally be excluded or limited.",
    ],
  },
  {
    number: "10",
    title: "Changes to these terms",
    paragraphs: [
      "We may update these Terms & Conditions from time to time to reflect changes to our website, services, business practices, or legal requirements.",
      "The updated version will be published on this page with a revised effective date. Your continued use of the website after an update may constitute acceptance of the revised terms.",
    ],
  },
  {
    number: "11",
    title: "Governing law",
    paragraphs: [
      "These terms will be interpreted in accordance with the laws applicable to Dynava’s relevant legal structure and operating jurisdiction, subject to any mandatory legal rights that may apply to you.",
      "The appropriate governing law and jurisdiction for a specific client engagement will be stated in the relevant written agreement.",
    ],
  },
];

export default function TermsPage() {
  return (
    <section className="relative bg-white pb-24 pt-36 sm:pb-28 sm:pt-44">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-140px] top-20 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-160px] top-72 h-96 w-96 rounded-full bg-emerald-100/40 blur-3xl"
      />

      <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-5 text-xs font-semibold tracking-[0.24em] text-blue-600">
            LEGAL · TERMS
          </p>

          <h1 className="text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-6xl">
            Clear terms.
            <span className="block bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
              Better understanding.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            These Terms & Conditions explain the general rules for accessing
            and using the Dynava website.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3 text-xs text-slate-500">
            <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2">
              Effective date: 14 September 2026
            </span>

            <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2">
              Version 1.0
            </span>
          </div>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-20">
          <aside className="h-fit lg:sticky lg:top-32">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              On this page
            </p>

            <nav className="mt-5 space-y-3">
              {sections.map((section) => (
                <a
                  key={section.number}
                  href={`#terms-${section.number}`}
                  className="block text-sm text-slate-500 transition-colors hover:text-blue-600"
                >
                  {section.number}. {section.title}
                </a>
              ))}
            </nav>
          </aside>

          <div className="min-w-0">
            <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 sm:p-8">
              <p className="text-sm leading-7 text-slate-600">
                These terms provide general guidance for using the Dynava
                website. Specific services, projects, and client relationships
                may be subject to separate written agreements.
              </p>
            </div>

            <div className="mt-12 space-y-12">
              {sections.map((section) => (
                <section
                  key={section.number}
                  id={`terms-${section.number}`}
                  className="scroll-mt-32 border-b border-slate-200 pb-10 last:border-b-0"
                >
                  <div className="flex gap-5">
                    <span className="pt-1 text-xs font-semibold tracking-[0.18em] text-blue-600">
                      {section.number}
                    </span>

                    <div className="min-w-0 flex-1">
                      <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">
                        {section.title}
                      </h2>

                      <div className="mt-5 space-y-4 text-sm leading-8 text-slate-600">
                        {section.paragraphs.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>
              ))}
            </div>

            <section className="mt-4 rounded-[28px] bg-slate-950 p-7 text-white sm:p-9">
              <p className="text-xs font-semibold tracking-[0.2em] text-emerald-300">
                QUESTIONS ABOUT THESE TERMS?
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em]">
                Need clarification?
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-300">
                If you have questions about these Terms & Conditions, contact
                the Dynava team.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="mailto:hello@dynava.in"
                  className="rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-950 transition hover:bg-emerald-100"
                >
                  hello@dynava.in
                </a>

                <Link
                  href="/contact"
                  className="rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-white transition hover:border-white/50"
                >
                  Contact Dynava
                </Link>
              </div>
            </section>

            <p className="mt-8 text-xs leading-6 text-slate-400">
              This page is a general starting draft and should be reviewed
              against Dynava’s actual legal structure, services, contracts,
              operating jurisdictions, and applicable legal requirements
              before public launch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}