export default function HeroContent() {
  return (
    <div className="mt-2 flex flex-col items-center text-center">

      {/* Tagline */}
      <p
        className="
          mb-6
          text-xs
          font-semibold
          uppercase
          tracking-[0.18em]
          text-slate-600
        "
      >
        Intelligence for Every Enterprise
      </p>

      {/* Heading */}
      <h1
        className="
          text-5xl
          font-extrabold
          leading-[0.92]
          tracking-tight
          text-slate-900
          md:text-6xl
          lg:text-7xl
        "
      >
        Enterprise AI
        <br />
        Built Around
        <br />
        Your Business.
      </h1>

      {/* Description */}
      <p
        className="
          mt-8
          max-w-2xl
          text-lg
          leading-8
          text-slate-500
        "
      >
        Helping organizations automate workflows, build intelligent software,
        and deploy AI that delivers measurable business value.
      </p>

    </div>
  );
}