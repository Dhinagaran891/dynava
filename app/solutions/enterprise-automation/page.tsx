import type { Metadata } from "next";

import Navigation from "@/components/layout/Navigation";
import InnerPageFooter from "@/components/footer/InnerPageFooter";

import {
  Hero,
  Workflow,
  Capabilities,
  UseCases,
  Approach,
  Integrations,
  Outcomes,
  CTA,
} from "@/components/solutions/enterprise-automation";

export const metadata: Metadata = {
  title: "Enterprise Workflow Automation",
  description:
    "Dynava helps businesses automate workflows between people, systems, and processes through intelligent automation, AI-powered processing, integrations, and workflow orchestration.",
  alternates: {
    canonical: "https://dynava.in/solutions/enterprise-automation",
  },
  openGraph: {
    title: "Enterprise Workflow Automation | Dynava",
    description:
      "Automate workflows between people, systems, and processes with intelligent automation, AI-powered processing, integrations, and workflow orchestration.",
    url: "https://dynava.in/solutions/enterprise-automation",
    siteName: "Dynava",
    type: "website",
  },
};

export default function EnterpriseAutomationPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <Hero />

      <Workflow />

      <Capabilities />

      <UseCases />

      <Approach />

      <Integrations />

      <Outcomes />

      <CTA />

      <InnerPageFooter />
    </main>
  );
}