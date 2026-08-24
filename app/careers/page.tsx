import CareersHero from "@/components/careers/CareersHero";
import CareersValues from "@/components/careers/CareersValue";
import CareersApplication from "@/components/careers/CareersApplication";

export const metadata = {
  title: "Careers | Dynava",
  description:
    "Explore opportunities at Dynava across AI, machine learning, data, software engineering, product, and digital technology.",
};

export default function CareersPage() {
  return (
    <main>
      <CareersHero />
      <CareersValues />
      <CareersApplication />
    </main>
  );
}