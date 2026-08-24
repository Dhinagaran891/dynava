import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import AboutPrism from "@/components/about/AboutPrism";
import AboutCapabilities from "@/components/about/AboutCapabilities";
import AboutDirection from "@/components/about/AboutDirection";
import AboutCTA from "@/components/about/AboutCTA";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutStory />
      <AboutPrism />
      <AboutCapabilities />
      <AboutDirection />
      <AboutCTA />
    </main>
  );
}