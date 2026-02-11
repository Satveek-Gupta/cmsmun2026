const committees = [
  {
    name: "UNITED NATIONS SECURITY COUNCIL",
    agenda: "The Situation in Central Africa: Reviewing the Regional Strategy to Combat the Lord’s Resistance Army (LRA) and the Repatriation of Former Combatants",
  },
  {
    name: "UNITED NATIONS GENERAL ASSEMBLY (DISEC)",
    agenda: "Strengthening and Advancing Global Frameworks for Arms Control, Disarmament, and Non-Proliferation Treaties.",
  },
  {
    name: "Reunión de Emergencia del Consejo de Asesores, República del Perú",
    agenda: "Addressing the Aftermath of the Moquegua Explosion and Escalating Geopolitical Tensions.",
    date : "Freeze Date: May 3rd, 2043",
  },
  {
    name: "INTERNATIONAL ATOMIC ENERGY AGENCY",
    agenda: "Assessing long-term international safety oversight at the Chernobyl Nuclear Power Plant, with emphasis on reinforcing the New Safe Confinement for structural integrity, military resilience, and sustained radioactive containment under conflict and post-conflict conditions.",
  },
  {
    name: "Committee on the Peaceful Uses of Outer Space",
    agenda: "Reviewing and Advancing the Space 2030 Agenda for Sustainable and Equitable Use of Outer Space.",
  },
  {
    name: "Organization of American States",
    agenda: "Strengthening Multilateral Security Cooperation to Combat Transnational Narcotics Networks and Organised Crime in Latin America.",
  },
  {
    name: "U.S. House Committee on Oversight and Government Reform 2013",
    agenda: "Legislative Reform and Intelligence Accountability Following the 2013 NSA Surveillance Disclosures"
  },
  {
    name: "LOWER HOUSE OF PARLIAMENT OF INDIA",
    agenda: "India’s approach to Regulation and Oversight in Hate Speech and Media Trials Reviewing India’s Federal Structure: Are States Losing Autonomy?",
  },
  {
    name: "International Court of Justice",
    agenda: "Jadhav (India v. Pakistan), General List No. 168",
    date: "Freeze Date: 8th May 2017",
  },
  {
    name: "THE INTERNATIONAL PRESS",
    agenda: "Journalism, Photography, and Caricature",
  },
];

export default function CommitteesPage() {
  return (
    <section className="section bg-navy-light/70">
      <div className="mx-auto max-w-5xl px-4 md:px-6 lg:px-8">
        <header className="mb-8">
          <h1 className="mt-2 text-2xl font-semibold uppercase tracking-[0.25em] text-slate-50 md:text-3xl">
            Committees & Agendas
          </h1>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {committees.map((committee) => (
            <div
              key={committee.name}
              className="flex flex-col rounded-xl border border-white/10 bg-slate-900/40 p-5 shadow-lg shadow-slate-900/70"
            >
              <h2 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-200">
                {committee.name}
              </h2>
              
              <div className="mt-4 rounded-lg border border-cyan-300/40 bg-slate-900/60 p-3">
                <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-cyan-300">
                  Agenda
                </p>
                <p className="mt-2 text-xs text-slate-100">
                  {committee.agenda}
                </p>
                 <p className="mt-2 text-xs text-slate-100">
                  {committee.date}
                </p>
              </div>
              <a
                href="/background-guides"
                className="mt-4 inline-flex items-center justify-center rounded-full border border-cyan-300/70 bg-navy-light/80 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan-100 transition hover:bg-cyan-300/10"
              >
                View Background Guide
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


