"use client";

interface RuleItemProps {
  rule: string;
  index: number;
}

export function RuleItem({ rule, index }: RuleItemProps) {
  return (
    <li className="group relative rounded-2xl border border-cyan-400/10 bg-slate-900/40 p-6 shadow-xl backdrop-blur-md transition-all duration-500 hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)]">
      {/* Corner Accents */}
      <div className="absolute -left-px -top-px h-6 w-6 rounded-tl-2xl border-l-2 border-t-2 border-cyan-300/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="absolute -right-px -bottom-px h-6 w-6 rounded-br-2xl border-b-2 border-r-2 border-cyan-300/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="flex items-start space-x-5">
        <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.2)]">
          <span className="text-[10px] font-black">{index + 1}</span>
        </div>
        <div className="flex flex-col space-y-1">
          <p className="text-[15px] font-bold leading-8 tracking-normal text-slate-300 transition-colors group-hover:text-slate-100">
            {rule}
          </p>
        </div>
      </div>
    </li>
  );
}
