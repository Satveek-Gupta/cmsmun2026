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
    <section className="section bg-navy-light/70 py-16">
      <div className="mx-auto max-w-5xl px-4 md:px-6 lg:px-8">
        <header className="mb-12 flex flex-col items-center text-center">
          <div className="mb-3 h-1 w-20 rounded-full bg-cyan-500"></div>
          <h1 className="mt-2 text-3xl font-bold uppercase tracking-[0.25em] text-slate-50 md:text-4xl lg:text-5xl">
            Committees & Agendas
          </h1>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 lg:gap-8">
          {committees.map((committee) => (
            <div
              key={committee.name}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50 p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/50 hover:bg-slate-800/80 hover:shadow-[0_8px_30px_rgba(6,182,212,0.2)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              
              <div className="relative z-10 flex h-full flex-col">
                <div className="flex-1">
                  <h2 className="mb-6 text-[13px] font-bold uppercase leading-relaxed tracking-[0.2em] text-slate-50 transition-colors group-hover:text-cyan-300 sm:text-sm">
                    {committee.name}
                  </h2>
                  
                  <div className="rounded-lg border border-cyan-400/20 bg-slate-900/60 p-5 transition-colors duration-500 group-hover:border-cyan-400/40">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="h-px flex-1 bg-cyan-500/30"></div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-cyan-400">
                        Agenda
                      </p>
                      <div className="h-px flex-1 bg-cyan-500/30"></div>
                    </div>
                    <p className="text-sm leading-relaxed text-slate-200">
                      {committee.agenda}
                    </p>
                    {committee.date && (
                      <div className="mt-4 flex">
                        <span className="inline-flex rounded-md border border-cyan-500/30 bg-cyan-500/10 px-2 py-1 text-[11px] font-medium tracking-wider text-cyan-200">
                          {committee.date}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


