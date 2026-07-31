const BackgroundEffects = () => {
  return (
    <>
      {/* Radial Glow */}
      <div className="absolute left-1/2 top-40 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[140px]" />

      <div className="absolute right-20 top-1/3 h-[320px] w-[320px] rounded-full bg-emerald-400/10 blur-[120px]" />

      {/* Mesh Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.06),transparent_45%)]" />

      {/* Bottom Fade */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-white" />
    </>
  );
};

export default BackgroundEffects;