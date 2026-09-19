import type { Metadata } from "next";

import Navigation from "@/components/layout/Navigation";
import InnerPageFooter from "@/components/footer/InnerPageFooter";

import {
  Hero,
  Opportunity,
  Capabilities,
  Approach,
  Integrations,
  Outcomes,
  CTA,
} from "@/components/solutions/ai-agents";

export const metadata: Metadata = {
  title: "AI Agents for Business",
  description:
    "Dynava designs AI agents that understand tasks, work with business information, use connected systems, and help automate multi-step business workflows.",
  alternates: {
    canonical: "https://dynava.in/solutions/ai-agents",
  },
  openGraph: {
    title: "AI Agents for Business | Dynava",
    description:
      "AI agents designed to understand tasks, work with business information, connect with systems, and help automate multi-step workflows.",
    url: "https://dynava.in/solutions/ai-agents",
    siteName: "Dynava",
    type: "website",
  },
};

export default function AIAgentsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <Hero />
      <Opportunity />
      <Capabilities />
      <Approach />
      <Integrations />
      <Outcomes />
      <CTA />

      <InnerPageFooter />
    </main>
  );
}