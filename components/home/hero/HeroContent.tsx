export default function HeroContent() {
  return (
    <div className="space-y-6">
      <span className="rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-sm font-medium text-blue-700">
        AI Solutions for Modern Businesses
      </span>

      <h1 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
        Build Smarter.
        <br />
        Scale Faster.
      </h1>

      <p className="max-w-xl text-lg text-gray-600">
        Dynava helps businesses automate workflows, deploy AI assistants,
        and build intelligent software tailored to their operations.
      </p>

      <div className="flex flex-wrap gap-4">
        <button className="rounded-xl bg-[#2563EB] px-6 py-3 font-semibold text-white hover:bg-blue-700">
          Book Consultation
        </button>

        <button className="rounded-xl border border-gray-300 px-6 py-3 font-semibold hover:bg-gray-50">
          Explore Services
        </button>
      </div>
    </div>
  );
}