import Navigation from "@/components/layout/Navigation";
import Hero from "@/components/hero/Hero";
import { Solutions } from "@/components/solutions";
import Industries from "@/components/industries";
import { WhyDynava } from "@/components/why-dynava";
import { OurApproach } from "@/components/our-approach";
import EditorialExperience from "@/components/editorial";

export default function Page() {
  return (
    <>
      <Navigation />

      <main className="overflow-x-clip">
        <Hero />
        <Solutions />
        <Industries />
        <WhyDynava />
        <OurApproach />
        <EditorialExperience />
      </main>
    </>
  );
}