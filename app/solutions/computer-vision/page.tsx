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
} from "@/components/solutions/computer-vision";

export const metadata: Metadata = {
  title: "Computer Vision Solutions",
  description:
    "Dynava helps businesses use computer vision, OCR, image analysis, and video intelligence to automate visual processes and turn visual data into actionable insights.",
  alternates: {
    canonical: "https://dynava.in/solutions/computer-vision",
  },
  openGraph: {
    title: "Computer Vision Solutions | Dynava",
    description:
      "Turn visual data into business intelligence with computer vision, OCR, image analysis, and video intelligence.",
    url: "https://dynava.in/solutions/computer-vision",
    siteName: "Dynava",
    type: "website",
  },
};

export default function ComputerVisionPage() {
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