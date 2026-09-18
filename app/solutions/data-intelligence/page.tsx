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