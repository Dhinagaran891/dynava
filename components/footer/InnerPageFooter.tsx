import Link from "next/link";

export default function InnerPageFooter() {
  return (
    <footer className="px-4 pb-5 pt-8 sm:px-6 lg:px-8">
      <div
        className="
          relative
          mx-auto
          max-w-[1400px]
          overflow-hidden
          rounded-[26px]
          bg-slate-950
          px-6
          py-7
          text-white
          shadow-[0_20px_60px_rgba(15,23,42,0.12)]
          sm:px-8
          lg:px-10
        "
      >
        {/* Ambient sunlight */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -right-24
            -top-28
            h-64
            w-64
            rounded-full
            bg-emerald-400/20
            blur-3xl
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            bottom-[-110px]
            right-24
            h-56
            w-56
            rounded-full
            bg-blue-500/20
            blur-3xl
          "
        />

        <div className="relative">
          {/* Main row */}
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            {/* Logo */}
            <Link
              href="/"
              aria-label="Dynava home"
              className="shrink-0"
            >
              <img
                src="/images/logo/dynava-transparent.png"
                alt="Dynava"
                className="h-6 w-auto brightness-0 invert"
              />
            </Link>

            {/* Navigation */}
            <nav
              aria-label="Footer navigation"
              className="
                flex
                flex-wrap
                items-center
                gap-x-6
                gap-y-3
                text-sm
                text-slate-300
              "
            >
              <Link
                href="/"
                className="transition-colors hover:text-white"
              >
                Home
              </Link>

              <Link
                href="/about"
                className="transition-colors hover:text-white"
              >
                About
              </Link>

              <Link
                href="/contact"
                className="transition-colors hover:text-white"
              >
                Contact
              </Link>

              <Link
                href="/careers"
                className="transition-colors hover:text-white"
              >
                Careers
              </Link>
              <Link
  href="/terms"
  className="transition-colors hover:text-white"
>
  Terms
</Link>
              <Link
  href="/privacy"
  className="transition-colors hover:text-white"
>
  Privacy
</Link>
            </nav>

            {/* Copyright */}
            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} Dynava
            </p>
          </div>

          {/* Bottom line */}
          <div className="mt-6 border-t border-white/10 pt-4">
            <div className="flex flex-col gap-2 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
              <span>
                AI · Data · Digital Transformation
              </span>

              <span>
                Built for practical transformation.
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}