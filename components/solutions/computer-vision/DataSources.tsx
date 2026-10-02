const dataSources = [
  {
    number: "01",
    title: "Images & Visual Files",
    description:
      "Work with photographs, scanned images, product images, inspection records, and other visual files already used across the business.",
    items: ["Images", "Scans", "Photos", "Visual Records"],
  },
  {
    number: "02",
    title: "Documents & Forms",
    description:
      "Extract information from documents, forms, reports, and other image-based content where manual processing may be required.",
    items: ["PDFs", "Forms", "Reports", "Scanned Documents"],
  },
  {
    number: "03",
    title: "Video & Camera Feeds",
    description:
      "Analyse video and camera-based visual information to identify relevant events, objects, patterns, and conditions.",
    items: ["Video", "CCTV", "Camera Feeds", "Live Streams"],
  },
  {
    number: "04",
    title: "Business Systems & APIs",
    description:
      "Connect visual intelligence with the systems and workflows your organisation already uses to turn analysis into practical action.",
    items: ["REST APIs", "Webhooks", "CRM", "Business Systems"],
  },
];

export default function DataSources() {
  return (
    <section className="bg-slate-50 px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-600">
              Your visual ecosystem
            </p>

            <h2 className="mt-5 max-w-xl text-4xl font-semibold tracking-[-0.045em] text-slate-950 sm:text-5xl">
              Your visual data already exists. We help make it useful.
            </h2>

            <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
              Computer vision does not have to start with replacing existing
              systems. Dynava can work with the visual data, technology, and
              workflows your organisation already relies on.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {dataSources.map((source) => (
              <article
                key={source.number}
                className="rounded-[1.75rem] border border-slate-200 bg-white p-7 sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-blue-600">
                    {source.number}
                  </span>

                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </div>

                <h3 className="mt-9 text-xl font-semibold tracking-tight text-slate-950">
                  {source.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {source.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {source.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-500"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 rounded-[1.5rem] border border-slate-200 bg-white px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p className="text-sm font-medium text-slate-700">
            Connect what matters.
          </p>

          <p className="text-sm text-slate-500">
            Existing visual sources can become part of a stronger intelligence
            ecosystem.
          </p>
        </div>
      </div>
    </section>
  );
}