"use client";

import CapabilityNode from "./CapabilityNode";
import { ecosystemLayers } from "./data";

const positions = {
  top: "left-1/2 top-0 -translate-x-1/2",

  topLeft: "left-12 top-36",

  topRight: "right-12 top-36",

  bottomLeft: "left-20 bottom-24",

  bottomRight: "right-20 bottom-24",

  bottom: "left-1/2 bottom-0 -translate-x-1/2",
};

interface ArchitectureCanvasProps {
  activeId: string;
  onSelect: (id: string) => void;
}

export default function ArchitectureCanvas({
  activeId,
  onSelect,
}: ArchitectureCanvasProps) {
  return (
    <div className="relative mx-auto h-[620px] w-full max-w-2xl">

      {/* Dynava Intelligence Core */}

      <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">

        <div className="relative flex h-40 w-40 items-center justify-center rounded-full border border-slate-200 bg-white shadow-lg">

          <div className="absolute inset-2 rounded-full border border-slate-100" />

          <div className="absolute inset-5 rounded-full border border-slate-100" />

          <div className="relative text-center">

            <h3 className="text-lg font-semibold text-slate-950">
              Dynava
            </h3>

            <p className="text-sm text-slate-500">
              Intelligence
            </p>

            <p className="text-sm text-slate-500">
              Core
            </p>

          </div>

        </div>

      </div>

      {ecosystemLayers.map((layer) => (
        <CapabilityNode
          key={layer.id}
          title={layer.shortTitle}
          position={positions[layer.position]}
          active={activeId === layer.id}
          onClick={() => onSelect(layer.id)}
        />
      ))}

    </div>
  );
}