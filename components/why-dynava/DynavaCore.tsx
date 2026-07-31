const DynavaCore = () => {
  return (
    <div className="relative mx-auto flex aspect-square w-full max-w-[540px] items-center justify-center">

      {/* Ambient Glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/10 via-transparent to-emerald-500/10 blur-3xl" />

      {/* Outer Ring */}
      <div className="absolute h-[90%] w-[90%] rounded-full border border-slate-200" />

      {/* Middle Ring */}
      <div className="absolute h-[72%] w-[72%] rounded-full border border-blue-200/60" />

      {/* Inner Ring */}
      <div className="absolute h-[54%] w-[54%] rounded-full border border-emerald-200/60" />

      {/* Core */}
      <div className="relative flex h-40 w-40 items-center justify-center rounded-full border border-slate-200 bg-white shadow-xl">

        <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-7xl font-bold text-transparent">
          D
        </span>

      </div>

    </div>
  );
};

export default DynavaCore;