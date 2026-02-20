export default function BrochurePage() {
  return (
    <section className="section bg-navy-light/60">
      <div className="mx-auto max-w-5xl px-4 md:px-6 lg:px-8">
        <header className="mb-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Resources
          </p>
          <h1 className="mt-2 text-2xl font-semibold uppercase tracking-[0.25em] text-slate-50 md:text-3xl">
            Conference Brochure
          </h1>
        </header>

        <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] md:items-start">
          <div className="space-y-4 text-sm leading-relaxed text-slate-100/90">
            <p>
              The official CMSMUN 2026 brochure contains essential information
              for schools, delegates and faculty advisors, including conference
              timelines, committee listings, rules of procedure and general
              guidelines for participation.
            </p>
            <p>
              We recommend that all attending delegations review the brochure
              carefully before the conference to familiarise themselves with
              the policies, code of conduct and logistical details.
            </p>
            <div className="mt-6">
              <a
                href="https://drive.google.com/file/d/1a5LMfaCnamv0TbkmQ7FdXFOBDskv8G_m/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-cyan-300 px-8 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-slate-900 shadow-lg shadow-cyan-500/25 transition hover:bg-cyan-200"
              >
                Download Brochure (PDF)
              </a>
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-slate-900/40 p-3 shadow-lg shadow-slate-900/70">
            <div className="aspect-[4/3] overflow-hidden rounded-lg border border-white/10 bg-slate-950/70">
              <iframe
                title="CMSMUN 2026 Conference Brochure"
                src="https://drive.google.com/file/d/1a5LMfaCnamv0TbkmQ7FdXFOBDskv8G_m/preview"
                className="h-full w-full"
                allow="autoplay"
              />
            </div>
            <p className="mt-3 text-[11px] text-slate-300">
              Embedded preview of the conference brochure. Open in a new tab
              for full-screen view.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


