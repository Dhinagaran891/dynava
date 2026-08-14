import HeroBackground from "./HeroBackground";
import HeroLogo from "./HeroLogo";
import HeroContent from "./HeroContent";
import HeroButtons from "./HeroButtons";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <HeroBackground />

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          w-full
          max-w-[1440px]
          flex-col
          items-center
          px-5
          pb-16
          pt-36
          sm:px-8
          sm:pt-40
          md:pt-44
          lg:pb-20
          lg:pt-48
        "
      >
        <HeroLogo />

        <HeroContent />

        {/* Centered Hero CTAs */}
        <div className="mt-10 flex w-full justify-center sm:mt-8">
          <HeroButtons />
        </div>
      </div>
    </section>
  );
}