"use client";

import {
  ArrowRight,
  CheckCircle2,
  Mail,
  MessageCircle,
  Search,
  Users,
} from "lucide-react";

import ContactForm from "./ContactForm";
import { useTalkToDynava } from "@/components/talk-to-dynava";

export default function ContactPage() {
  const { openChat } = useTalkToDynava();

  return (
    <div className="bg-white text-slate-900">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden px-6 pb-20 pt-36 sm:px-8 sm:pt-44 lg:px-12 lg:pb-28">
        {/* Ambient background */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-32 top-20 h-[420px] w-[420px] rounded-full bg-blue-100/50 blur-3xl" />
          <div className="absolute right-1/4 top-40 h-[260px] w-[260px] rounded-full bg-emerald-100/40 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-[1400px]">
          <div className="max-w-4xl">

            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
              Contact Dynava
            </p>

            <h1 className="text-5xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              Let&apos;s start
              <br />
              a{" "}
              <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-emerald-500 bg-clip-text text-transparent">
                conversation.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Whether you&apos;re looking to improve a workflow, explore an AI
              opportunity, or rethink how technology supports your business,
              we&apos;d like to hear from you.
            </p>

          </div>
        </div>
      </section>


      {/* =====================================================
          CONTACT / FORM
      ====================================================== */}
      <section className="px-6 pb-24 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1400px] gap-6 lg:grid-cols-[1.55fr_0.85fr]">

          {/* FORM CARD */}
          <div className="rounded-[30px] border border-slate-200 bg-white p-7 shadow-[0_20px_70px_rgba(15,23,42,0.06)] sm:p-10 lg:p-12">

            <div className="mb-9">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Start here
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
                Tell us what you&apos;re working on.
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
                A challenge, an inefficient process, an idea you&apos;re
                exploring — start wherever makes sense.
              </p>
            </div>

            <ContactForm />

          </div>


          {/* DIRECT CONTACT CARD */}
          <div className="flex flex-col rounded-[30px] border border-slate-200 bg-slate-50/70 p-7 sm:p-10 lg:p-12">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Direct contact
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
                Prefer to reach us directly?
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-500 sm:text-base">
                You can also get in touch with the Dynava team by email.
              </p>
            </div>


            {/* EMAILS */}
            <div className="mt-10 space-y-8">

              <a
                href="mailto:hello@dynava.in"
                className="group flex items-start gap-4"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-transform duration-200 group-hover:scale-105">
                  <Mail size={19} />
                </span>

                <span>
                  <span className="block text-xs font-medium uppercase tracking-[0.14em] text-slate-400">
                    General enquiries
                  </span>

                  <span className="mt-1 block text-base font-medium text-slate-800 transition-colors group-hover:text-blue-600">
                    hello@dynava.in
                  </span>
                </span>
              </a>


              <a
                href="mailto:business@dynava.in"
                className="group flex items-start gap-4"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 transition-transform duration-200 group-hover:scale-105">
                  <Mail size={19} />
                </span>

                <span>
                  <span className="block text-xs font-medium uppercase tracking-[0.14em] text-slate-400">
                    Business &amp; partnerships
                  </span>

                  <span className="mt-1 block text-base font-medium text-slate-800 transition-colors group-hover:text-blue-600">
                    business@dynava.in
                  </span>
                </span>
              </a>

            </div>


            {/* CHAT */}
            <div className="my-10 h-px bg-slate-200" />

            <div className="mt-auto">

              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-blue-600 shadow-sm ring-1 ring-slate-200">
                <MessageCircle size={19} />
              </span>

              <h3 className="mt-5 text-xl font-semibold tracking-[-0.02em]">
                Not sure where to begin?
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Talk with Dynava and explore where AI, data, or digital
                technology could create practical value in your business.
              </p>

              <button
                type="button"
                onClick={openChat}
                className="mt-6 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-emerald-500 px-5 py-3 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              >
                Talk to Dynava
                <ArrowRight size={16} />
              </button>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          WHAT HAPPENS NEXT
      ====================================================== */}
      <section className="border-y border-slate-100 bg-slate-50/60 px-6 py-24 sm:px-8 lg:px-12">

        <div className="mx-auto max-w-[1200px]">

          <div className="text-center">

            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
              What happens next
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
              From conversation to possibility.
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
              A simple, focused process to help you move forward.
            </p>

          </div>


          <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-0">

            <Step
              number="01"
              icon={<Users size={19} />}
              title="Understand"
              text="We learn about your business, workflow, and the challenge you’re facing."
            />

            <Step
              number="02"
              icon={<Search size={19} />}
              title="Explore"
              text="We identify where AI, data, or digital technology could genuinely create value."
            />

            <Step
              number="03"
              icon={<CheckCircle2 size={19} />}
              title="Recommend"
              text="We outline a practical next step based on what we’ve learned."
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <section className="px-6 py-20 sm:px-8 lg:px-12">

        <div className="relative mx-auto flex max-w-[1400px] flex-col gap-8 overflow-hidden rounded-[30px] border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-emerald-50 p-8 sm:p-12 lg:flex-row lg:items-center lg:justify-between">

          <div className="relative">

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Start anywhere
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
              You don&apos;t need to have the answer yet.
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
              Start with the problem. We&apos;ll help you explore the
              possibilities.
            </p>

          </div>


          <button
            type="button"
            onClick={openChat}
            className="relative inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-slate-900 px-6 py-3.5 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
          >
            Talk to Dynava
            <ArrowRight size={17} />
          </button>

        </div>

      </section>

    </div>
  );
}


/* =========================================================
   STEP COMPONENT
========================================================= */

type StepProps = {
  number: string;
  icon: React.ReactNode;
  title: string;
  text: string;
};

function Step({
  number,
  icon,
  title,
  text,
}: StepProps) {
  return (
    <div className="relative px-0 md:px-10">

      <div className="flex items-start gap-5">

        <span className="text-5xl font-light tracking-[-0.05em] text-slate-300">
          {number}
        </span>

        <div>

          <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-blue-600 shadow-sm ring-1 ring-slate-100">
            {icon}
          </span>

          <h3 className="text-lg font-semibold">
            {title}
          </h3>

          <p className="mt-2 max-w-xs text-sm leading-6 text-slate-500">
            {text}
          </p>

        </div>

      </div>

    </div>
  );
}