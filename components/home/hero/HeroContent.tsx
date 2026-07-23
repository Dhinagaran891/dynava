import {
  Bot,
  Workflow,
  MessageSquare,
  BarChart3,
  Brain,
  Blocks,
} from "lucide-react";

const capabilities = [
  { icon: Bot, label: "AI Agents" },
  { icon: Workflow, label: "Automation" },
  { icon: MessageSquare, label: "AI Chatbots" },
  { icon: BarChart3, label: "Analytics" },
  { icon: Brain, label: "Custom AI" },
  { icon: Blocks, label: "Integrations" },
];

export default function HeroContent() {
  return (
    <div className="space-y-8">
      {/* Badge */}
      <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
        Enterprise AI Consulting
      </span>

      {/* Heading */}
      <h1 className="text-5xl font-bold leading-tight tracking-tight text-gray-900 md:text-6xl lg:text-7xl">
        Enterprise AI
        <br />
        Built for Growth.
      </h1>

      {/* Description */}
      <p className="max-w-xl text-lg leading-8 text-gray-600">
        Helping businesses automate operations, deploy AI, and build intelligent software.
      </p>

      {/* Capabilities */}
      <div>
        <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500">
          Capabilities
        </p>

        <div className="flex flex-wrap gap-3">
          {capabilities.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-all duration-300 hover:border-[#2563EB] hover:text-[#2563EB] hover:shadow-md"
            >
              <Icon size={16} />
              {label}
            </div>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4 pt-2">
        <button className="rounded-xl bg-[#2563EB] px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl">
          Book Consultation
        </button>

        <button className="rounded-xl border border-gray-300 bg-white px-8 py-4 font-semibold text-gray-800 transition-all duration-300 hover:border-[#2563EB] hover:text-[#2563EB] hover:shadow-md">
          Explore Services
        </button>
      </div>
    </div>
  );
}