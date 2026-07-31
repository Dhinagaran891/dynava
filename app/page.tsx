import Navigation from "@/components/layout/Navigation";
import Hero from "@/components/hero/Hero";
import { Solutions } from "@/components/solutions";
import Industries from "@/components/industries";
import { WhyDynava } from "@/components/why-dynava";

export default function Page() {
  return (
    <>
      <Navigation />

      <main className="overflow-x-hidden">
        <Hero />
        <Solutions />
        <Industries />
        <WhyDynava />
      </main>
    </>
  );
}