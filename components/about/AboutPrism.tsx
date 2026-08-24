import Image from "next/image";

export default function AboutPrism() {
  return (
    <section
      aria-labelledby="about-prism-heading"
      className="
        relative
        overflow-hidden
        border-t
        border-slate-200/70
        px-6
        py-24
        sm:px-8
        sm:py-28
        lg:px-12
        lg:py-36
      "
    >
      {/* Subtle atmosphere */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          -z-10
          h-[600px]
          w-[600px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-blue-500/[0.035]
          blur-[120px]
        "
      />

      <div
        className="
          mx-auto
          grid
          max-w-7xl
          items-center
          gap-16
          lg:grid-cols-2
          lg:gap-24
        "
      >
        {/* Content */}
        <div className="max-w-xl">
          <p
            className="
              mb-7
              text-[11px]
              font-medium
              uppercase
              tracking-[0.28em]
              text-slate-500
              sm:text-xs
            "
          >
            AI · Data · Digital
          </p>

          <h2
            id="about-prism-heading"
            className="
              text-4xl
              font-medium
              leading-[1.04]
              tracking-[-0.04em]
              text-slate-950
              sm:text-5xl
              lg:text-6xl
            "
          >
            Many capabilities.
            <br />
            One direction.
          </h2>

          <p
            className="
              mt-8
              max-w-lg
              text-base
              leading-7
              text-slate-600
              sm:text-lg
              sm:leading-8
            "
          >
            AI, data and digital technology are increasingly
            interconnected. Dynava brings these disciplines together
            as a foundation for building technology that can evolve
            with the organizations it serves.
          </p>
        </div>

        {/* Prism */}
        <div className="relative flex justify-center lg:justify-end">
          <div
            className="
              relative
              w-full
              max-w-[520px]
              overflow-hidden
              rounded-[2rem]
            "
          >
            <Image
              src="/images/about/dynava-prism.png"
              alt="Glass prism representing the connection between AI, data and digital technology"
              width={900}
              height={1100}
              sizes="(max-width: 1024px) 90vw, 520px"
              loading="lazy"
              className="
                h-auto
                w-full
                object-cover
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}