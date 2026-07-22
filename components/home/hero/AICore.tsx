export default function AICore() {
  return (
    <div className="relative flex h-48 w-48 items-center justify-center">

      {/* Glow */}
      <div className="absolute h-40 w-40 rounded-full bg-blue-500/15 blur-2xl" />

      {/* Outer Ring */}
      <div className="absolute h-36 w-36 rounded-full border border-blue-300" />

      {/* Middle Ring */}
      <div className="absolute h-28 w-28 rounded-full border border-blue-400" />

      {/* Inner Ring */}
      <div className="absolute h-20 w-20 rounded-full border border-blue-500" />

      {/* Core */}
      <div className="absolute h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 shadow-2xl" />

    </div>
  );
}