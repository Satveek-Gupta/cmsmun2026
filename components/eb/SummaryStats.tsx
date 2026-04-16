"use client";

interface SummaryStatsProps {
  totalDelegates: number;
  bestDelegate: string;
  awardsAssigned: number;
  topScorer: { name: string; marks: number };
}

export function SummaryStats({
  totalDelegates,
  bestDelegate,
  awardsAssigned,
  topScorer,
}: SummaryStatsProps) {
  return (
    <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-4">
      <StatCard label="Total Delegates" value={totalDelegates} />
      <StatCard label="Best Delegate" value={bestDelegate || "Unassigned"} highlightColor="text-emerald-400" />
      <StatCard label="Awards Assigned" value={awardsAssigned} />
      <StatCard label="Top Scorer" value={`${topScorer.name || "N/A"} (${topScorer.marks})`} highlightColor="text-yellow-400" />
    </div>
  );
}

function StatCard({ label, value, highlightColor = "text-white" }: { label: string; value: string | number; highlightColor?: string }) {
  return (
    <div className="flex flex-col rounded-xl border border-white/5 bg-slate-900/40 p-5 backdrop-blur-md">
      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
        {label}
      </span>
      <span className={`mt-2 text-lg font-bold truncate ${highlightColor}`}>
        {value}
      </span>
    </div>
  );
}
