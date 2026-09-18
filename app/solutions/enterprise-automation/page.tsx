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