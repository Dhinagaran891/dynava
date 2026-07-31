import { Container } from "@/components/ui";

import BackgroundEffects from "./BackgroundEffects";
import QuoteCard from "./QuoteCard";
import ScrollScene from "./ScrollScene";

const WhyDynava = () => {
  return (
    <section
      id="why-dynava"
      className="relative overflow-hidden bg-white py-36"
    >
      <BackgroundEffects />

      <Container className="relative z-10">

        {/* Section Header */}

        <div className="max-w-3xl">

          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-600">
            Why Dynava
          </span>

          <h2 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight text-slate-950 xl:text-6xl">

            Business-first AI
            <br />

            for enterprises
            <br />

            that expect results.

          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">

            We help organizations transform complex business challenges into measurable outcomes through practical, enterprise-ready artificial intelligence.

          </p>

        </div>

        <ScrollScene />

        <QuoteCard />

      </Container>
    </section>
  );
};

export default WhyDynava;