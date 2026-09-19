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
} from "@/components/solutions/data-intelligence";

export const metadata: Metadata = {
  title: "Data Intelligence Solutions",
  description:
    "Dynava helps businesses turn fragmented data into trusted intelligence through data foundations, business intelligence, advanced analytics, forecasting, and AI-ready data.",
  alternates: {
    canonical: "https://dynava.in/solutions/data-intelligence",
  },
  openGraph: {
    title: "Data Intelligence Solutions | Dynava",
    description:
      "Turn fragmented business data into trusted intelligence with data foundations, business intelligence, advanced analytics, forecasting, and AI-ready data.",
    url: "https://dynava.in/solutions/data-intelligence",
    siteName: "Dynava",
    type: "website",
  },
};

export default function DataIntelligencePage() {
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