import guides from "../../data/background-guides.json";

export default function BackgroundGuidesPage() {
  return (
    <section className="section bg-navy-light/70">
      <div className="mx-auto max-w-5xl px-4 md:px-6 lg:px-8">
        <header className="mb-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Resources
          </p>
          <h1 className="mt-2 text-2xl font-semibold uppercase tracking-[0.25em] text-slate-50 md:text-3xl">
            Background Guides
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-200">
            Background guides serve as the academic foundation for debate.
            Delegates are expected to read them thoroughly and conduct
            additional independent research.
          </p>
        </header>

        <div className="space-y-4">
          {guides.map((guide) => (
            <details
              key={guide.committee}
              className="group rounded-xl border border-white/10 bg-slate-900/40 p-4 shadow-lg shadow-slate-900/70"
            >
              <summary className="flex cursor-pointer list-none flex-col gap-1 text-left sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-200">
                    {guide.committee}
                  </p>
                  <p className="mt-1 text-xs font-medium tracking-[0.2em] text-slate-200">
                    {guide.agenda}
                  </p>
                </div>
                <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.22em] text-slate-300 sm:mt-0">
                  <span className="group-open:hidden">Expand</span>
                  <span className="hidden group-open:inline">Collapse</span>
                </span>
              </summary>
              <div className="mt-4 space-y-5 text-sm">
                {guide.description && guide.description.length > 0 && (
                  <div className="border-l-2 border-cyan-400/30 pl-4 py-1 space-y-3">
                    {Array.isArray(guide.description) ? (
                      guide.description.map((paragraph, idx) => (
                        <p key={idx} className="leading-relaxed text-slate-300 font-normal opacity-90">
                          {paragraph}
                        </p>
                      ))
                    ) : (
                      <p className="whitespace-pre-wrap leading-relaxed text-slate-300 font-normal opacity-90">
                        {guide.description}
                      </p>
                    )}
                  </div>
                )}
                <div>
                  <a
                    href={guide.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-cyan-300 px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-900 shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all hover:bg-cyan-200 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]"
                  >
                    Download Background Guide
                  </a>
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}


