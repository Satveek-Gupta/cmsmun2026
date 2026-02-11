const guides = [
  {
    committee: "UNITED NATIONS SECURITY COUNCIL",
    agenda: "The Situation in Central Africa: Reviewing the Regional Strategy to Combat the Lord’s Resistance Army (LRA) and the Repatriation of Former Combatants",
    link: "https://example.com/background-guides/unga.pdf",
  },
  {
    committee: "UNITED NATIONS GENERAL ASSEMBLY (DISEC)",
    agenda: "Strengthening and Advancing Global Frameworks for Arms Control, Disarmament, and Non-Proliferation Treaties.",
    link: "https://example.com/background-guides/unga.pdf",
  },
  {
    committee: "Reunión de Emergencia del Consejo de Asesores, República del Perú",
    agenda: "Addressing the Aftermath of the Moquegua Explosion and Escalating Geopolitical Tensions, Freeze Date: May 3rd, 2043",
    link: "https://example.com/background-guides/unga.pdf",
  },
  {
    committee: "INTERNATIONAL ATOMIC ENERGY AGENCY",
    agenda: "Assessing long-term international safety oversight at the Chernobyl Nuclear Power Plant, with emphasis on reinforcing the New Safe Confinement for structural integrity, military resilience, and sustained radioactive containment under conflict and post-conflict conditions.",
    link: "https://example.com/background-guides/unga.pdf",
  },
  {
    committee: "Committee on the Peaceful Uses of Outer Space",
    agenda: "Reviewing and Advancing the Space 2030 Agenda for Sustainable and Equitable Use of Outer Space.",
    link: "https://example.com/background-guides/unga.pdf",
  },
  {
    committee: "OrganiZation of American States",
    agenda: "Strengthening Multilateral Security Cooperation to Combat Transnational Narcotics Networks and Organised Crime in Latin America.",
    link: "https://example.com/background-guides/unga.pdf",
  },
  {
    committee: "U.S. House Committee on Oversight and Government Reform 2013",
    agenda: "Legislative Reform and Intelligence Accountability Following the 2013 NSA Surveillance Disclosures",
    link: "https://example.com/background-guides/unga.pdf",
  },
  {
    committee: "LOWER HOUSE OF PARLIAMENT OF INDIA",
    agenda: "India’s approach to Regulation and Oversight in Hate Speech and Media Trials Reviewing India’s Federal Structure: Are States Losing Autonomy?",
    link: "https://example.com/background-guides/unga.pdf",
  },
  {
    committee: "International Court of Justice",
    agenda: "Jadhav (India v. Pakistan), General List No. 168. Freeze Date: 8th May 2017",
    link: "https://example.com/background-guides/unga.pdf",
  },
  {
    committee: "THE INTERNATIONAL PRESS",
    agenda: "Journalism, Photography, and Caricature",
    link: "https://example.com/background-guides/unga.pdf",
  }
];

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
              <div className="mt-3 space-y-3 text-sm text-slate-200">
                <a
                  href={guide.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-cyan-300 px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-900 shadow-lg shadow-cyan-500/25 transition hover:bg-cyan-200"
                >
                  Download Background Guide
                </a>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}


