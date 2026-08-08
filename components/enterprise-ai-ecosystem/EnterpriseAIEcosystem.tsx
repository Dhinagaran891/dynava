"use client";

import { useMemo, useState } from "react";

import { Container } from "@/components/ui";

import ArchitectureCanvas from "./ArchitectureCanvas";
import EcosystemBackground from "./EcosystemBackground";
import EcosystemHeader from "./EcosystemHeader";
import { ecosystemLayers } from "./data";

export default function EnterpriseAIEcosystem() {
  const [activeId, setActiveId] = useState("foundation");

  const activeLayer = useMemo(
    () =>
      ecosystemLayers.find((layer) => layer.id === activeId) ??
      ecosystemLayers[0],
    [activeId]
  );

  return (
    <section
      id="enterprise-ai-ecosystem"
      className="relative overflow-hidden bg-white py-32 lg:py-40"
    >
      <EcosystemBackground />

      <Container className="relative z-10">

        <EcosystemHeader />

        <div className="mt-20">

          <ArchitectureCanvas
            activeId={activeId}
            onSelect={setActiveId}
          />

        </div>

        {/* CapabilityPanel comes here in next iteration */}

      </Container>
    </section>
  );
}