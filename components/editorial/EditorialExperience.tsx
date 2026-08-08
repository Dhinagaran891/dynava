"use client";

import { useRef, useState } from "react";
import {
  AnimatePresence,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";

import EditorialCanvas from "./components/EditorialCanvas";
import EditorialContent from "./components/EditorialContent";
import ProgressTimeline from "./components/ProgressTimeline";

import { editorialStages } from "./data";

export default function EditorialExperience() {
  const sectionRef = useRef<HTMLElement>(null);

  const [currentStage, setCurrentStage] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    let nextStage = 0;

    /*
     * Four stages across the Editorial scroll track.
     *
     * 0.00 ───────── 0.20
     * Understanding
     *
     * 0.20 ───────── 0.50
     * Opportunity
     *
     * 0.50 ───────── 0.80
     * Transformation
     *
     * 0.80 ───────── 1.00
     * Value
     */

    if (progress < 0.2) {
      nextStage = 0;
    } else if (progress < 0.5) {
      nextStage = 1;
    } else if (progress < 0.8) {
      nextStage = 2;
    } else {
      nextStage = 3;
    }

    setCurrentStage((previousStage) => {
      if (previousStage === nextStage) {
        return previousStage;
      }

      return nextStage;
    });
  });

  const activeStage = editorialStages[currentStage];

  return (
    <section
      ref={sectionRef}
      className="relative h-[500vh] w-full"
    >
      {/* 
        This is the viewport.
        It remains pinned while the 500vh parent is being scrolled.
      */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <EditorialCanvas>
          {/* Editorial story */}
          <AnimatePresence mode="wait">
            <EditorialContent
              key={activeStage.id}
              stage={activeStage}
            />
          </AnimatePresence>

          {/* Story timeline */}
          <ProgressTimeline
            stages={editorialStages}
            currentStage={currentStage}
          />
        </EditorialCanvas>
      </div>
    </section>
  );
}