import HeroBackground from "./HeroBackground";
import HeroLogo from "./HeroLogo";
import HeroContent from "./HeroContent";
import HeroButtons from "./HeroButtons";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
      <HeroBackground />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center">
        <HeroLogo />
        <HeroContent />
        <HeroButtons />
      </div>
    </section>
  );
}