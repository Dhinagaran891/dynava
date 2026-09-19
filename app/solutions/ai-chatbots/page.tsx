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
} from "@/components/solutions/ai-chatbots";

export const metadata: Metadata = {
  title: "AI Chatbots for Business",
  description:
    "Dynava designs intelligent AI chatbots and business assistants that help teams answer questions, support customers, access knowledge, and handle enquiries more efficiently.",
  alternates: {
    canonical: "https://dynava.in/solutions/ai-chatbots",
  },
  openGraph: {
    title: "AI Chatbots for Business | Dynava",
    description:
      "Intelligent AI chatbots and business assistants designed around your workflows, knowledge, and customer interactions.",
    url: "https://dynava.in/solutions/ai-chatbots",
    siteName: "Dynava",
    type: "website",
  },
};

export default function AIChatbotsPage() {
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