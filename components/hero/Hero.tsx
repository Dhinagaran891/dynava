<div
  className="
    relative
    z-10
    mx-auto
    flex
    min-h-screen
    max-w-7xl
    flex-col
    items-center
    justify-center
    px-6
    pt-24
    lg:pt-28
    text-center
  "
></div>
import HeroBackground from "./HeroBackground";
import HeroLogo from "./HeroLogo";
import HeroContent from "./HeroContent";
import HeroButtons from "./HeroButtons";
import ScrollIndicator from "./ScrollIndicator";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <HeroBackground />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
        <HeroLogo />
        <HeroContent />
        <HeroButtons />
        <ScrollIndicator />
      </div>
    </section>
  );
}