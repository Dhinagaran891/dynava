export default function HeroContent() {
  return (
    <div
      className="
        mt-14
        w-full
        max-w-[1050px]
        px-5
        sm:mt-16
        sm:px-8
        md:mt-18
        lg:mt-20
      "
    >
      {/* Category */}
      <p
        className="
          mb-5
          text-[11px]
          font-medium
          uppercase
          tracking-[0.25em]
          text-slate-500
          sm:text-xs
        "
      >
        AI · DATA · DIGITAL
      </p>

      {/* Heading */}
      <h1
        className="
          max-w-[950px]
          text-[clamp(3rem,6vw,5.7rem)]
          font-normal
          leading-[0.96]
          tracking-[-0.045em]
          text-slate-950
        "
      >
        Intelligence that moves
        <br className="hidden sm:block" />
        business forward.
      </h1>

      {/* Supporting Copy */}
      <p
        className="
          mt-7
          max-w-[720px]
          text-base
          leading-7
          text-slate-500
          sm:mt-8
          sm:text-lg
          sm:leading-8
        "
      >
        We help organizations turn AI, data, and digital technology into
        practical solutions that improve operations, strengthen decisions,
        and create measurable business value.
      </p>
    </div>
  );
}