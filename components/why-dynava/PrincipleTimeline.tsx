import { principles } from "./data";

const PrincipleTimeline = () => {
  return (
    <div className="space-y-14">

      {principles.map((item) => (

        <div
          key={item.id}
          className="group border-b border-slate-200 pb-12 last:border-none"
        >

          {/* Number */}

          <div className="mb-5">

            <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-6xl font-bold text-transparent opacity-20 transition-all duration-500 group-hover:opacity-100">

              {String(item.id).padStart(2, "0")}

            </span>

          </div>

          {/* Title */}

          <h3 className="max-w-md text-2xl font-semibold tracking-tight text-slate-900">

            {item.title}

          </h3>

          {/* Description */}

          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">

            {item.description}

          </p>

        </div>

      ))}

    </div>
  );
};

export default PrincipleTimeline;