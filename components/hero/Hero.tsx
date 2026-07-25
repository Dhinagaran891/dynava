import NeuralNetwork from "./NeuralNetwork";
import HeroBackground from "./HeroBackground";
import HeroLogo from "./HeroLogo";
import HeroContent from "./HeroContent";
import HeroButtons from "./HeroButtons";
import ScrollIndicator from "./ScrollIndicator";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-8 lg:pt-10">
      <HeroBackground />

      <NeuralNetwork />

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
    justify-start
    px-6
    pt-12
    lg:pt-14
    text-center
  "
>
  <HeroLogo />
  <HeroContent />
  <HeroButtons />
  <ScrollIndicator />
</div>
    </section>
  );
}