export default function NeuralNetwork() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Left Cluster */}
        <g
          stroke="#14b8a6"
          strokeWidth="1"
          strokeOpacity="0.08"
          fill="none"
        >
          <line x1="120" y1="220" x2="220" y2="180" />
          <line x1="220" y1="180" x2="310" y2="290" />
          <line x1="120" y1="220" x2="180" y2="360" />
          <line x1="180" y1="360" x2="320" y2="410" />
          <line x1="310" y1="290" x2="320" y2="410" />
        </g>

        {/* Right Cluster */}
        <g
          stroke="#14b8a6"
          strokeWidth="1"
          strokeOpacity="0.08"
          fill="none"
        >
          <line x1="1280" y1="220" x2="1390" y2="290" />
          <line x1="1390" y1="290" x2="1480" y2="180" />
          <line x1="1280" y1="220" x2="1240" y2="420" />
          <line x1="1240" y1="420" x2="1420" y2="500" />
          <line x1="1390" y1="290" x2="1420" y2="500" />
        </g>

        {/* Bottom Left */}
        <g
          stroke="#14b8a6"
          strokeWidth="1"
          strokeOpacity="0.06"
          fill="none"
        >
          <line x1="380" y1="700" x2="520" y2="620" />
          <line x1="520" y1="620" x2="640" y2="720" />
        </g>

        {/* Bottom Right */}
        <g
          stroke="#14b8a6"
          strokeWidth="1"
          strokeOpacity="0.06"
          fill="none"
        >
          <line x1="980" y1="700" x2="1100" y2="610" />
          <line x1="1100" y1="610" x2="1280" y2="700" />
        </g>

        {/* Nodes */}
        <g fill="#2dd4bf" opacity="0.45">
          <circle cx="120" cy="220" r="3" />
          <circle cx="220" cy="180" r="3" />
          <circle cx="310" cy="290" r="4" />
          <circle cx="180" cy="360" r="3" />
          <circle cx="320" cy="410" r="3" />

          <circle cx="1280" cy="220" r="3" />
          <circle cx="1390" cy="290" r="4" />
          <circle cx="1480" cy="180" r="3" />
          <circle cx="1240" cy="420" r="3" />
          <circle cx="1420" cy="500" r="3" />

          <circle cx="380" cy="700" r="3" />
          <circle cx="520" cy="620" r="3" />
          <circle cx="640" cy="720" r="3" />

          <circle cx="980" cy="700" r="3" />
          <circle cx="1100" cy="610" r="3" />
          <circle cx="1280" cy="700" r="3" />
        </g>
      </svg>
    </div>
  );
}