import HeroContent from "./HeroContent";
import HeroScene from "./HeroScene";

export default function HeroSection() {
  return (
    <section className="min-h-[calc(100vh-80px)] bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-16 px-6 pt-20 pb-16 lg:flex-row lg:px-8 lg:pt-28 lg:pb-24">

        {/* Left Side */}
        <div className="w-full lg:w-1/2">
          <HeroContent />
        </div>

        {/* Right Side */}
        <div className="flex w-full justify-center lg:w-1/2">
          <HeroScene />
        </div>

      </div>
    </section>
  );
}