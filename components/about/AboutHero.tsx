export default function AboutHero() {
  return (
    <section
      aria-labelledby="about-hero-heading"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-white
        px-6
        pb-20
        pt-32
        sm:px-8
        sm:pb-24
        sm:pt-36
        lg:px-12
        lg:pb-28
        lg:pt-40
      "
    >
      {/* =========================================================
          BACKGROUND ATMOSPHERE
          ========================================================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          -z-20
          bg-[radial-gradient(circle_at_75%_45%,rgba(18,107,255,0.035),transparent_32%),radial-gradient(circle_at_88%_65%,rgba(0,184,137,0.035),transparent_40%)]
        "
      />

      {/* Soft blue glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-32
          top-1/2
          -z-10
          h-[520px]
          w-[520px]
          -translate-y-1/2
          rounded-full
          bg-blue-500/[0.070]
          blur-[120px]
        "
      />

      {/* Soft green glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[5%]
          top-[62%]
          -z-10
          h-[360px]
          w-[360px]
          rounded-full
          bg-emerald-400/[0.06]
          blur-[100px]
        "
      />

      {/* =========================================================
          DY NAVA INTELLIGENCE FIELD
          CSS / HTML ONLY — NO IMAGE
          ========================================================= */}

      <div
  aria-hidden="true"
  className="
    pointer-events-none
    absolute
    right-[-30px]
    top-1/2
    hidden
    h-[560px]
    w-[560px]
    -translate-y-1/2
    lg:block
    animate-about-visual
  "
>
        {/* Dot matrix */}
        <div
          className="
            absolute
            inset-0
            opacity-40
          "
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(18,107,255,0.28) 1px, transparent 1px)",
            backgroundSize: "18px 18px",
            maskImage:
              "radial-gradient(circle at center, black 0%, transparent 67%)",
            WebkitMaskImage:
              "radial-gradient(circle at center, black 0%, transparent 67%)",
          }}
        />

        {/* Outer ring */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[500px]
            w-[500px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-blue-500/[0.14]
          "
        />

        {/* Middle ring */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[370px]
            w-[370px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-slate-300/80
          "
        />

        {/* Inner ring */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[220px]
            w-[220px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-emerald-500/[0.18]
          "
        />

        {/* Horizontal signal line */}
        <div
          className="
            absolute
            left-[8%]
            right-[5%]
            top-1/2
            h-px
            bg-gradient-to-r
            from-transparent
            via-blue-500/30
            to-emerald-400/40
          "
        />

        {/* Diagonal signal line */}
        <div
          className="
            absolute
            left-[18%]
            top-[30%]
            h-px
            w-[75%]
            rotate-[28deg]
            bg-gradient-to-r
            from-transparent
            via-blue-500/20
            to-emerald-400/40
          "
        />

        {/* Central glow */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-20
            w-20
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-blue-500/[0.12]
            blur-2xl
          "
        />

        {/* Central node */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-3
            w-3
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-gradient-to-br
            from-[#126BFF]
            to-[#00B889]
            shadow-[0_0_20px_rgba(18,107,255,0.18)]
          "
        />

        {/* Signal points */}
        <span
          className="
            absolute
            left-[22%]
            top-[37%]
            h-1.5
            w-1.5
            rounded-full
            bg-[#126BFF]/50
          "
        />

        <span
          className="
            absolute
            right-[17%]
            top-[39%]
            h-1.5
            w-1.5
            rounded-full
            bg-[#00B889]/50
          "
        />

        <span
          className="
            absolute
            bottom-[25%]
            left-[35%]
            h-1
            w-1
            rounded-full
            bg-slate-400/120
          "
        />

        {/* Small brand notation */}
        <div
          className="
            absolute
            bottom-[12%]
            right-[15%]
            text-[9px]
            font-medium
            uppercase
            tracking-[0.28em]
            text-slate-400/140
          "
        >
          AI · DATA · DIGITAL
        </div>
      </div>

      {/* =========================================================
          HERO CONTENT
          ========================================================= */}

      <div
        className="
          relative
          mx-auto
          flex
          min-h-[72vh]
          max-w-7xl
          items-center
        "
      >
        <div className="relative z-10 max-w-5xl">

          {/* Section label */}
          <p
            className="
              mb-7
              text-xs
              font-medium
              uppercase
              tracking-[0.28em]
              text-[#126BFF]
            "
          >
            About Dynava
          </p>

          {/* Main heading */}
          <h1
            id="about-hero-heading"
            className="
              max-w-5xl
              text-5xl
              font-medium
              leading-[0.94]
              tracking-[-0.045em]
              text-slate-950
              sm:text-6xl
              md:text-7xl
              lg:text-8xl
              xl:text-9xl
            "
          >
            Technology
            <br />
            with a direction.
          </h1>

          {/* Supporting copy */}
          <p
            className="
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
            Dynava is an AI, data and digital technology company
            building practical solutions for organizations navigating
            a rapidly changing technological landscape.
          </p>

        </div>
      </div>

      {/* =========================================================
          MOBILE BRAND ELEMENT
          ========================================================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-8
          right-6
          flex
          items-center
          gap-3
          lg:hidden
        "
      >
        <span
          className="
            h-px
            w-8
            bg-gradient-to-r
            from-[#126BFF]/40
            to-[#00B889]/40
          "
        />

        <span
          className="
            text-[9px]
            font-medium
            uppercase
            tracking-[0.22em]
            text-slate-400
          "
        >
          AI · DATA · DIGITAL
        </span>
      </div>
    </section>
  );
}