"use client";

import { ReactNode } from "react";

interface StatCardProps {
  label: string;
  value: string | number;
  icon: ReactNode;
  trend?: {
    value: number;
    label: string;
  };
}

export function StatCard({ label, value, icon, trend }: StatCardProps) {
  return (
    <div className="flex flex-col rounded-3xl border border-white/5 bg-slate-900/40 p-6 backdrop-blur-xl transition-all hover:bg-slate-900/60">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800 text-slate-400">
          {icon}
        </div>
        {trend && (
          <div className={`text-[10px] font-bold uppercase tracking-widest ${trend.value >= 0 ? "text-emerald-400" : "text-red-400"}`}>
            {trend.value > 0 ? "+" : ""}{trend.value}% {trend.label}
          </div>
        )}
      </div>
      
      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
        {label}
      </span>
      <span className="mt-1 text-2xl font-black text-white">
        {value}
      </span>
    </div>
  );
}
