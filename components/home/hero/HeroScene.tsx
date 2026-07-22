import OrbitRings from "./OrbitRings";
import AICore from "./AICore";
import FloatingDots from "./FloatingDots";
import GlowBackground from "./GlowBackground";

export default function HeroScene() {
  return (
    <div className="relative flex h-[400px] items-center justify-center overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-blue-50 shadow-xl lg:h-[500px]">

      <GlowBackground />

      <FloatingDots />

      <AICore />

      <div className="absolute bottom-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
          Dynava AI Engine
        </p>

        <p className="mt-2 text-sm text-slate-600">
          Enterprise Intelligence Platform
        </p>
      </div>

    </div>
  );
}