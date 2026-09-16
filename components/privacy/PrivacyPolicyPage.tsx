"use client";

import Link from "next/link";

const sections = [
  {
    number: "01",
    title: "Information we collect",
    content: (
      <>
        <p>
          We may collect information that you voluntarily provide when you
          contact Dynava, submit an enquiry, request information, or interact
          with our website.
        </p>

        <p>This may include:</p>

        <ul>
          <li>Your name and work email address</li>
          <li>Your company or organisation name</li>
          <li>Information included in your enquiry or message</li>
          <li>Any other information you choose to provide</li>
        </ul>

        <p>
          We may also collect limited technical information, such as browser
          type, device information, and website usage data, where relevant to
          operating, securing, and improving our website.
        </p>
      </>
    ),
  },
  {
    number: "02",
    title: "How we use information",
    content: (
      <>
        <p>We may use the information we collect to:</p>

        <ul>
          <li>Respond to enquiries and requests</li>
          <li>Understand your business needs</li>
          <li>Discuss potential services or collaborations</li>
          <li>Improve our website, content, and services</li>
          <li>Maintain website security and prevent misuse</li>
          <li>Meet applicable legal or regulatory obligations</li>
        </ul>

        <p>
          We do not use personal information for purposes unrelated to the
          reason it was provided without an appropriate legal basis or
          additional notice where required.
        </p>
      </>
    ),
  },
  {
    number: "03",
    title: "Contact-form information",
    content: (
      <>
        <p>
          If you submit the contact form on our website, the information you
          provide may be used by Dynava to respond to your enquiry and
          understand the context of your request.
        </p>

        <p>
          Please avoid submitting confidential, sensitive, or commercially
          restricted information through a general website enquiry form.
        </p>
      </>
    ),
  },
  {
    number: "04",
    title: "Cookies and analytics",
    content: (
      <>
        <p>
          Our website may use cookies or similar technologies where necessary
          for functionality, security, performance, or analytics.
        </p>

        <p>
          Where third-party analytics or other tracking services are used, the
          relevant information and choices will depend on the services enabled
          on the website and the applicable settings.
        </p>

        <p>
          You can generally manage cookies through your browser settings.
        </p>
      </>
    ),
  },
  {
    number: "05",
    title: "Sharing information",
    content: (
      <>
        <p>
          We do not sell your personal information. We may share information
          with trusted service providers where reasonably necessary to operate
          our website, manage communications, provide services, maintain
          security, or comply with legal obligations.
        </p>

        <p>
          Service providers are expected to handle information appropriately
          and only for the purposes for which it is shared.
        </p>
      </>
    ),
  },
  {
    number: "06",
    title: "Data retention and security",
    content: (
      <>
        <p>
          We retain personal information only for as long as reasonably
          necessary for the purposes described in this policy, unless a longer
          retention period is required by law.
        </p>

        <p>
          We take reasonable technical and organisational measures to protect
          information against unauthorised access, loss, misuse, alteration,
          or disclosure. However, no online system can be guaranteed to be
          completely secure.
        </p>
      </>
    ),
  },
  {
    number: "07",
    title: "International users",
    content: (
      <>
        <p>
          Dynava may work with clients, partners, and service providers in
          different countries. Depending on the services used and where
          information is processed, personal information may be transferred
          across national borders.
        </p>

        <p>
          Where required, we will take appropriate steps to support lawful
          international data transfers.
        </p>
      </>
    ),
  },
  {
    number: "08",
    title: "Your rights",
    content: (
      <>
        <p>
          Depending on your location and applicable law, you may have rights
          relating to your personal information, including the right to:
        </p>

        <ul>
          <li>Request access to personal information we hold about you</li>
          <li>Ask us to correct inaccurate information</li>
          <li>Request deletion of information where legally applicable</li>
          <li>Object to or restrict certain processing</li>
          <li>Withdraw consent where processing relies on consent</li>
        </ul>

        <p>
          To make a privacy-related request, contact us using the details
          below. We may need to verify your identity before responding.
        </p>
      </>
    ),
  },
  {
    number: "09",
    title: "Third-party websites and services",
    content: (
      <>
        <p>
          Our website may contain links to third-party websites, platforms, or
          services. Dynava is not responsible for the privacy practices,
          content, or security of those third parties.
        </p>

        <p>
          We recommend reviewing the privacy policies of any external service
          you choose to visit or use.
        </p>
      </>
    ),
  },
  {
    number: "10",
    title: "Changes to this policy",
    content: (
      <p>
        We may update this Privacy Policy from time to time to reflect changes
        to our services, technology, legal requirements, or data practices.
        Any updated version will be published on this page with a revised
        effective date.
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <section className="relative bg-white pb-24 pt-36 sm:pb-28 sm:pt-44">
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-[-140px]
          top-20
          h-72
          w-72
          rounded-full
          bg-blue-100/50
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[-160px]
          top-72
          h-96
          w-96
          rounded-full
          bg-emerald-100/40
          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-5 text-xs font-semibold tracking-[0.24em] text-blue-600">
            LEGAL · PRIVACY
          </p>

          <h1 className="text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-6xl">
            Privacy, handled
            <span className="block bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
              with care.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            This Privacy Policy explains how Dynava may collect, use, and
            protect information when you visit our website or contact us.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3 text-xs text-slate-500">
            <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2">
              Effective date: 13 September 2026
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
                  href={`#privacy-${section.number}`}
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
                Dynava aims to handle personal information responsibly and
                transparently. This policy provides general information about
                our website and communications practices.
              </p>
            </div>

            <div className="mt-12 space-y-12">
              {sections.map((section) => (
                <section
                  key={section.number}
                  id={`privacy-${section.number}`}
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
                        {section.content}
                      </div>
                    </div>
                  </div>
                </section>
              ))}
            </div>

            <section className="mt-4 rounded-[28px] bg-slate-950 p-7 text-white sm:p-9">
              <p className="text-xs font-semibold tracking-[0.2em] text-emerald-300">
                PRIVACY QUESTIONS
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em]">
                Need more information?
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-300">
                If you have a question about this Privacy Policy or how Dynava
                handles information, contact our team.
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
              This page is provided for general informational purposes and
              should be reviewed and adapted to Dynava’s actual data practices,
              service providers, legal structure, and applicable obligations
              before being treated as final legal advice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}