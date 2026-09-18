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