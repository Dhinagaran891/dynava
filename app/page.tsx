import type { Metadata } from "next";

import Navigation from "@/components/layout/Navigation";
import Hero from "@/components/hero/Hero";
import { Solutions } from "@/components/solutions";
import Industries from "@/components/industries";
import { WhyDynava } from "@/components/why-dynava";
import { OurApproach } from "@/components/our-approach";
import EditorialExperience from "@/components/editorial";
import FinalCTA from "@/components/final-cta/FinalCTA";
import Footer from "@/components/footer/Footer";
import {
  TalkToDynava,
  TalkToDynavaProvider,
} from "@/components/talk-to-dynava";
import { DynavaIntro } from "@/components/brand-intro";

export const metadata: Metadata = {
  title: "Practical AI, Data & Digital Transformation",
  description:
    "Dynava helps businesses unlock practical value from AI, data, and digital technology through smarter workflows, better decisions, and tailored solutions.",
  alternates: {
    canonical: "https://dynava.in/",
  },
  openGraph: {
    title: "Practical AI, Data & Digital Transformation | Dynava",
    description:
      "Dynava helps businesses unlock practical value from AI, data, and digital technology through smarter workflows, better decisions, and tailored solutions.",
    url: "https://dynava.in/",
    siteName: "Dynava",
    type: "website",
  },
};

export default function Page() {
  return (
    <TalkToDynavaProvider>
      <Navigation />

      <main className="overflow-x-clip">
        <Hero />
        <Solutions />
        <Industries />
        <WhyDynava />
        <OurApproach />
        <EditorialExperience />
        <FinalCTA />
      </main>

      <TalkToDynava />
      <DynavaIntro />

      <Footer />
    </TalkToDynavaProvider>
  );
}