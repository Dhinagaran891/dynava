export default function FloatingDots() {
  return (
    <>
      <div className="absolute left-20 top-16 h-3 w-3 rounded-full bg-blue-300" />
      <div className="absolute right-24 top-24 h-2 w-2 rounded-full bg-green-300" />
      <div className="absolute bottom-20 left-28 h-2 w-2 rounded-full bg-blue-400" />
      <div className="absolute bottom-24 right-20 h-3 w-3 rounded-full bg-cyan-300" />
    </>
  );
}