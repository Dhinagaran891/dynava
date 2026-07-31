import LightRibbon from "./LightRibbon";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* Background */}
      <div className="absolute inset-0 bg-white" />

      {/* Center Spotlight */}
      <div
        className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,.05), transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      {/* Left Glow */}
      <div
        className="absolute
          -left-52
          top-20
          h-[650px]
          w-[650px]
          rounded-full
          bg-blue-500/10
          blur-[180px]"
      />

      {/* Bottom Right Glow */}
      <div
        className="absolute
          -right-48
          bottom-0
          h-[600px]
          w-[600px]
          rounded-full
          bg-emerald-500/10
          blur-[180px]"
      />

      {/* ========================================= */}
      {/* TOP LEFT FLOW */}
      {/* ========================================= */}

      <LightRibbon
        top="20px"
        left="-480px"
        rotate={14}
        width={1500}
      />

      <LightRibbon
        top="90px"
        left="-430px"
        rotate={17}
        width={1300}
      />

      <LightRibbon
        top="170px"
        left="-470px"
        rotate={21}
        width={1200}
      />

      <LightRibbon
        top="250px"
        left="-420px"
        rotate={18}
        width={1000}
        color="green"
      />

      {/* ========================================= */}
      {/* BOTTOM LEFT FLOW */}
      {/* ========================================= */}

      <LightRibbon
        top="720px"
        left="-520px"
        rotate={-18}
        width={1400}
      />

      <LightRibbon
        top="790px"
        left="-450px"
        rotate={-15}
        width={1200}
      />

      <LightRibbon
        top="850px"
        left="-500px"
        rotate={-12}
        width={900}
        color="green"
      />

      {/* ========================================= */}
      {/* TOP RIGHT FLOW */}
      {/* ========================================= */}

      <LightRibbon
        top="40px"
        right="-520px"
        rotate={-16}
        width={1400}
      />

      <LightRibbon
        top="130px"
        right="-470px"
        rotate={-20}
        width={1200}
      />

      <LightRibbon
        top="220px"
        right="-430px"
        rotate={-15}
        width={900}
        color="green"
      />

      {/* ========================================= */}
      {/* BOTTOM RIGHT FLOW */}
      {/* ========================================= */}

      <LightRibbon
        top="700px"
        right="-480px"
        rotate={18}
        width={1500}
      />

      <LightRibbon
        top="790px"
        right="-430px"
        rotate={15}
        width={1200}
      />

      <LightRibbon
        top="870px"
        right="-520px"
        rotate={20}
        width={900}
      />

    </div>
  );
}
{/* Hero Protection Layer */}
<div
  className="
    absolute
    left-1/2
    top-1/2
    h-[700px]
    w-[900px]
    -translate-x-1/2
    -translate-y-1/2
    rounded-full
    bg-white
  "
  style={{
    opacity: 0.92,
    filter: "blur(90px)",
  }}
/>