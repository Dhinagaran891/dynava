export default function CareersHero() {
  return (
    <section
      aria-labelledby="careers-hero-heading"
      className="
        relative
        flex
        min-h-[78vh]
        items-center
        justify-center
        overflow-hidden
        px-6
        pb-20
        pt-32
        sm:px-8
        sm:pb-24
        sm:pt-36
        lg:min-h-[82vh]
        lg:px-12
        lg:pb-28
        lg:pt-40
      "
    >
      {/* Subtle Dynava background atmosphere */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          bg-[radial-gradient(circle_at_50%_42%,rgba(18,107,255,0.045),transparent_32%),radial-gradient(circle_at_75%_70%,rgba(0,184,137,0.025),transparent_28%)]
        "
      />

      {/* Very faint technical grid */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          opacity-[0.28]
          [background-image:linear-gradient(rgba(15,23,42,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.025)_1px,transparent_1px)]
          [background-size:72px_72px]
          [mask-image:radial-gradient(ellipse_at_center,black_0%,transparent_68%)]
        "
      />

      <div className="mx-auto flex w-full max-w-7xl justify-center">
        <div className="w-full max-w-5xl text-center">

          {/* Label */}
          <p
            className="
              mb-7
              text-[11px]
              font-medium
              uppercase
              tracking-[0.3em]
              text-[#126BFF]
              sm:text-xs
            "
          >
            Careers at Dynava 
          </p>

          {/* Heading */}
          <h1
            id="careers-hero-heading"
            className="
              mx-auto
              max-w-5xl
              text-5xl
              font-medium
              leading-[0.94]
              tracking-[-0.05em]
              text-slate-950
              sm:text-6xl
              md:text-7xl
              lg:text-8xl
              xl:text-9xl
            "
          >
          Build What
            <br />
          Comes Next
            <span className="text-[#126BFF]">.</span>
          </h1>

          {/* Supporting copy */}
          <p
            className="
              mx-auto
              mt-9
              max-w-2xl
              text-base
              leading-7
              text-slate-600
              sm:text-lg
              sm:leading-8
              lg:mt-10
            "
          >
            At Dynava, technology is shaped around meaningful business
            outcomes. We bring together AI, data and digital technology
            to solve complex problems and create intelligent solutions.
          </p>

        </div>
      </div>
    </section>
  );
}