import type { Metadata } from "next";

import Navigation from "@/components/layout/Navigation";
import InnerPageFooter from "@/components/footer/InnerPageFooter";

import {
  Hero,
  Intelligence,
  Capabilities,
  UseCases,
  Approach,
  DataSources,
  Outcomes,
  CTA,
} from "@/components/solutions/custom-ai-platforms";

export const metadata: Metadata = {
  title: "Custom AI Platforms",
  description:
    "Dynava designs and builds tailored AI applications that connect business data, knowledge, workflows, users, and existing systems around specific business requirements.",
  alternates: {
    canonical: "https://dynava.in/solutions/custom-ai-platforms",
  },
  openGraph: {
    title: "Custom AI Platforms | Dynava",
    description:
      "Build tailored AI applications that connect business data, knowledge, workflows, users, and existing systems around real business needs.",
    url: "https://dynava.in/solutions/custom-ai-platforms",
    siteName: "Dynava",
    type: "website",
  },
};

export default function CustomAIPlatformsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <Hero />

      <Intelligence />

      <Capabilities />

      <UseCases />

      <Approach />

      <DataSources />

      <Outcomes />

      <CTA />

      <InnerPageFooter />
    </main>
  );
}