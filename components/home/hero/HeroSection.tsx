import HeroContent from "./HeroContent";
import HeroScene from "./HeroScene";

export default function HeroSection() {
  return (
    <section className="min-h-[calc(100vh-80px)]">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 py-16 lg:flex-row lg:px-8 lg:py-24">
        
        {/* Left Side */}
        <div className="w-full lg:w-1/2">
          <HeroContent />
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-1/2">
          <HeroScene />
        </div>

      </div>
    </section>
  );
}