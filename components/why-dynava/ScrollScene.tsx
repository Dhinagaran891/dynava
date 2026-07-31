import DynavaCore from "./DynavaCore";
import PrincipleTimeline from "./PrincipleTimeline";

const ScrollScene = () => {
  return (
    <div className="mt-24">

      <div className="grid items-center gap-20 lg:grid-cols-[0.9fr_1.1fr]">

        {/* Left */}
        <div className="lg:sticky lg:top-32">

          <DynavaCore />

        </div>

        {/* Right */}

        <div>

          <PrincipleTimeline />

        </div>

      </div>

    </div>
  );
};

export default ScrollScene;