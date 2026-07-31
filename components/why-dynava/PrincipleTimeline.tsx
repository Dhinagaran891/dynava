import { principles } from "./data";

const PrincipleTimeline = () => {
  return (
    <div className="relative space-y-10">

      <div className="absolute left-[18px] top-3 bottom-3 w-px bg-slate-200" />

      {principles.map((principle) => {
        const Icon = principle.icon;

        return (
          <div key={principle.id} className="relative flex gap-6">

            <div className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white border border-slate-200 shadow-sm">
              <Icon className="h-4 w-4 text-blue-600" />
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900">
                {principle.title}
              </h3>

              <p className="mt-2 max-w-lg leading-7 text-slate-600">
                {principle.description}
              </p>
            </div>

          </div>
        );
      })}
    </div>
  );
};

export default PrincipleTimeline;