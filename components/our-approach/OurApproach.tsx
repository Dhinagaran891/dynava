"use client";

import { useMemo, useState } from "react";

import { Container } from "@/components/ui";

import ApproachHeader from "./ApproachHeader";
import BlueprintBackground from "./BlueprintBackground";
import BlueprintPanel from "./BlueprintPanel";
import BlueprintRail from "./BlueprintRail";
import { blueprintStages } from "./data";

export default function OurApproach() {
  const [activeId, setActiveId] = useState("discover");

  const activeStage = useMemo(
    () =>
      blueprintStages.find((stage) => stage.id === activeId) ??
      blueprintStages[0],
    [activeId]
  );

  return (
    <section
      id="our-approach"
      className="relative overflow-hidden bg-slate-50 py-32 lg:py-40"
    >
      <BlueprintBackground />

      <Container className="relative z-10">

        <ApproachHeader />

        <BlueprintRail
          stages={blueprintStages}
          activeId={activeId}
          onChange={setActiveId}
        />

        <BlueprintPanel stage={activeStage} />

      </Container>
    </section>
  );
}