"use client";

import { MarksInput } from "./MarksInput";
import { AwardDropdown } from "./AwardDropdown";

interface Delegate {
  id: string;
  full_name: string;
  portfolio: string;
  school: string;
  marks: number;
  award: string;
}

interface DelegateTableProps {
  delegates: Delegate[];
  committee: string;
  onUpdateMarks: (id: string, marks: number) => void;
  onUpdateAward: (id: string, award: string) => void;
}

export function DelegateTable({ delegates, committee, onUpdateMarks, onUpdateAward }: DelegateTableProps) {
  const bestDelegateExists = delegates.some((d) => d.award === "Best Delegate");
  const maxMarks = Math.max(...delegates.map((d) => d.marks), -1);

  return (
    <div className="w-full overflow-hidden rounded-xl border border-white/10 bg-slate-900/40 backdrop-blur-md">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead className="sticky top-0 z-20 bg-slate-800/90 backdrop-blur-md">
            <tr>
              <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-500">Name</th>
              <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-500">Portfolio</th>
              <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-500 md:table-cell">School</th>
              <th className="px-6 py-4 text-center text-[10px] font-bold uppercase tracking-widest text-slate-500">Marks</th>
              <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-500">Award</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {delegates.map((del) => {
              const isTopScorer = del.marks === maxMarks && maxMarks > 0;
              const isBestDelegate = del.award === "Best Delegate";

              return (
                <tr 
                  key={del.id}
                  className={`transition-colors hover:bg-white/5 ${
                    isTopScorer ? "bg-yellow-500/10" : ""
                  } ${
                    isBestDelegate ? "bg-emerald-500/10" : ""
                  }`}
                >
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-white">{del.full_name}</span>
                      {isTopScorer && <span className="text-[9px] font-bold uppercase tracking-widest text-yellow-400">Top Scorer</span>}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-xs font-semibold text-slate-300">{del.portfolio}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-xs font-medium text-slate-400">{del.school}</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <MarksInput 
                      id={del.id} 
                      initialMarks={del.marks} 
                      onUpdate={(marks) => onUpdateMarks(del.id, marks)} 
                    />
                  </td>
                  <td className="px-6 py-4">
                    <AwardDropdown 
                      id={del.id}
                      currentAward={del.award}
                      committee={committee}
                      bestDelegateExists={bestDelegateExists}
                      onUpdate={(award) => onUpdateAward(del.id, award)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
