"use client";

interface Delegate {
  id: string;
  full_name: string;
  committee: string;
  portfolio: string;
  marks: number;
}

interface TopDelegatesTableProps {
  delegates: Delegate[];
}

export function TopDelegatesTable({ delegates }: TopDelegatesTableProps) {
  return (
    <div className="w-full overflow-hidden rounded-3xl border border-white/5 bg-slate-950/20">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-white/5 bg-slate-900/40">
            <th className="px-6 py-4 text-[9px] font-bold uppercase tracking-widest text-slate-500">Rank</th>
            <th className="px-6 py-4 text-[9px] font-bold uppercase tracking-widest text-slate-500">Name</th>
            <th className="px-6 py-4 text-[9px] font-bold uppercase tracking-widest text-slate-500">Committee</th>
            <th className="px-6 py-4 text-right text-[9px] font-bold uppercase tracking-widest text-slate-500">Score</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5">
          {delegates.map((del, index) => (
            <tr key={del.id} className="transition-all hover:bg-white/5">
              <td className="px-6 py-4">
                <span className={`inline-flex h-6 w-6 items-center justify-center rounded-lg text-[10px] font-black ${
                  index === 0 ? "bg-yellow-500 text-slate-950 shadow-lg shadow-yellow-500/30" : 
                  index === 1 ? "bg-slate-300 text-slate-950" : 
                  index === 2 ? "bg-amber-600 text-white" : "text-slate-500"
                }`}>
                  {index + 1}
                </span>
              </td>
              <td className="px-6 py-4">
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-white">{del.full_name}</span>
                  <span className="text-[10px] text-slate-500 uppercase tracking-tighter">{del.portfolio}</span>
                </div>
              </td>
              <td className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                {del.committee}
              </td>
              <td className="px-6 py-4 text-right">
                <span className="text-sm font-black text-cyan-400">
                  {del.marks}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
