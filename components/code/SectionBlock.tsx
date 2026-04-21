"use client";

import { RuleItem } from "./RuleItem";

interface SectionBlockProps {
  heading: string;
  rules: string[];
}

export function SectionBlock({ heading, rules }: SectionBlockProps) {
  return (
    <section className="space-y-12">
      {/* Header Section */}
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <h2 
          className="text-2xl font-bold uppercase tracking-[0.3em] text-cyan-300 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]"
          style={{ fontFamily: "'Futura', 'Trebuchet MS', sans-serif" }}
        >
          {heading}
        </h2>
        <div className="h-0.5 w-24 rounded-full bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
      </div>
      
      {/* Rules Grid */}
      <ul className="grid gap-6">
        {rules.map((rule, idx) => (
          <RuleItem key={idx} rule={rule} index={idx} />
        ))}
      </ul>
    </section>
  );
}
