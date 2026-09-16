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

      <Footer />
    </TalkToDynavaProvider>
  );
}