export const getCommitteeFullName = (acronym: string) => {
  const map: Record<string, string> = {
    "UNGA": "United Nations General Assembly (UNGA)",
    "UNSC": "United Nations Security Council",
    "Peru Crisis": "Consejo de Asesores, República del Perú",
    "Lok Sabha": "Lower House of Parliament of India",
    "IAEA": "International Atomic Energy Agency",
    "COPUOS": "Committee on the Peaceful Uses of Outer Space",
    "OAS": "Organization of American States",
    "US HOGR 2013": "U.S. House Committee on Oversight and Government Reform 2013",
    "ICJ": "International Court of Justice",
    "International Press": "The International Press",
  };
  return map[acronym] || acronym;
};

export function DelegateCard({ delegate }: { delegate: any }) {
  // Minimal and clean card layout
  return (
    <div className="w-full max-w-lg overflow-hidden rounded-2xl border border-cyan-400/20 bg-slate-900/50 p-6 shadow-xl backdrop-blur-md">
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h2 className="text-2xl font-bold tracking-wider text-slate-100">
          {delegate.full_name}
        </h2>
        <span className="inline-flex rounded-full bg-cyan-900/40 px-3 py-1 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-cyan-300 ring-1 ring-inset ring-cyan-400/30 text-center items-center justify-center">
          {getCommitteeFullName(delegate.committee)}
        </span>
      </div>

      <div className="space-y-4 text-sm text-slate-300">
        <div className="flex border-b border-white/5 pb-3">
          <span className="w-28 font-medium uppercase text-slate-500">
            Portfolio
          </span>
          <span className="font-semibold text-slate-200">
            {delegate.portfolio}
          </span>
        </div>
        <div className="flex border-b border-white/5 pb-3">
          <span className="w-28 font-medium uppercase text-slate-500">
            School
          </span>
          <span className="font-semibold text-slate-200">
            {delegate.school}
          </span>
        </div>
        <div className="flex pb-1">
          <span className="w-28 font-medium uppercase text-slate-500">
            Email
          </span>
          <span className="font-semibold text-slate-200">
            {delegate.email}
          </span>
        </div>
      </div>
    </div>
  );
}
