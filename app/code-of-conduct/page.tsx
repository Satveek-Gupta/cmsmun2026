import data from "@/data/codeOfConduct.json";
import { SectionBlock } from "@/components/code/SectionBlock";

export const metadata = {
  title: "Code of Conduct | CMSMUN '26",
  description: "Official rules and behavioral guidelines for CMSMUN 2026 delegates and participants.",
};

export default function CodeOfConductPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="">
        <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 py-24 text-center md:px-6 lg:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-cyan-200/90">
            Rules & Regulations
          </p>
          <h1 
            className="bg-gradient-to-r from-slate-50 via-cyan-400 to-cyan-500 bg-clip-text text-3xl font-bold uppercase tracking-[0.25em] text-transparent sm:text-4xl md:text-5xl lg:text-6xl drop-shadow-lg"
            style={{ fontFamily: "'Futura', 'Trebuchet MS', sans-serif" }}
          >
            {data.title}
          </h1>
          <div className="h-0.5 w-32 rounded-full bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
        </div>
      </section>

      {/* Content Section */}
      <section className="section relative py-24 overflow-hidden">
        {/* Softening radial glow */}
        <div className="absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[800px] rounded-full bg-cyan-900/5 blur-[150px] pointer-events-none" />
        
        <div className="relative z-10 mx-auto max-w-5xl px-4 md:px-6 lg:px-8">
          <div className="space-y-32">
            {data.sections.map((section, idx) => (
              <SectionBlock 
                key={idx} 
                heading={section.heading} 
                rules={section.rules} 
              />
            ))}
          </div>

          <div className="mt-24 flex flex-col items-center justify-center space-y-6 pt-12 border-t border-white/5">
             <div className="flex items-center justify-center py-2 opacity-50">
               <span className="h-1 w-1 rounded-full bg-cyan-300 mx-2 shadow-[0_0_8px_#22d3ee]" />
               <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 mx-2 shadow-[0_0_10px_#22d3ee]" />
               <span className="h-1 w-1 rounded-full bg-cyan-300 mx-2 shadow-[0_0_8px_#22d3ee]" />
            </div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-300/60 text-center max-w-lg leading-relaxed">
              Adherence to the CMSMUN &apos;26 Code of Conduct is mandatory for all delegates, staff, and representatives throughout the conference duration.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
