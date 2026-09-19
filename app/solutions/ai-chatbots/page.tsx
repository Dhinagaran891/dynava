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

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Chatbots for Business",
  description:
    "Intelligent AI chatbots and business assistants designed around business workflows, knowledge, and customer interactions.",
  provider: {
    "@type": "Organization",
    name: "Dynava",
    url: "https://dynava.in",
  },
  url: "https://dynava.in/solutions/ai-chatbots",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://dynava.in/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Solutions",
      item: "https://dynava.in/#solutions",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "AI Chatbots",
      item: "https://dynava.in/solutions/ai-chatbots",
    },
  ],
};

export default function AIChatbotsPage() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

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