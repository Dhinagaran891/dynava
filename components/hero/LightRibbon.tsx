type LightRibbonProps = {
  top: string;
  left?: string;
  right?: string;
  rotate: number;
  width: number;
  color?: "blue" | "green";
};

export default function LightRibbon({
  top,
  left,
  right,
  rotate,
  width,
  color = "blue",
}: LightRibbonProps) {
  const glow =
    color === "blue"
      ? "rgba(59,130,246,0.18)"
      : "rgba(16,185,129,0.18)";

  return (
    <div
      className="absolute"
      style={{
        top,
        left,
        right,
        width,
        transform: `rotate(${rotate}deg)`,
      }}
    >
      {/* Soft ribbon body */}
      <div
        style={{
          height: 14,
          borderRadius: 999,
          background: `linear-gradient(
            90deg,
            transparent 0%,
            ${glow} 20%,
            ${glow} 50%,
            transparent 100%
          )`,
          filter: "blur(12px)",
        }}
      />

      {/* Bright center */}
      <div
        style={{
          marginTop: -8,
          marginLeft: 60,
          width: width * 0.75,
          height: 4,
          borderRadius: 999,
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,.95), transparent)",
          filter: "blur(1px)",
        }}
      />
    </div>
  );
}