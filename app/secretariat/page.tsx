import Image from "next/image";
import secretariat from "@/data/secretariat.json";

export default function SecretariatPage() {
  return (
    <section className="section bg-navy-light/70 py-16">
      <div className="mx-auto max-w-5xl px-4 md:px-6 lg:px-8">
        <header className="mb-12 flex flex-col items-center text-center">
          <div className="mb-3 h-1 w-20 rounded-full bg-cyan-500"></div>
          <h1 className="mt-2 text-3xl font-bold uppercase tracking-[0.25em] text-slate-50 md:text-4xl lg:text-5xl">
            The Secretariat
          </h1>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {secretariat.map((member, index) => (
            <div
              key={member.name}
              className={`group relative flex h-full flex-col items-center overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50 p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/50 hover:bg-slate-800/80 hover:shadow-[0_8px_30px_rgba(6,182,212,0.2)] ${
                index === 9 ? "lg:col-start-2" : ""
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              
              <div className="relative z-10 flex w-full flex-1 flex-col items-center justify-between gap-6">
                <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full border-2 border-cyan-400/30 p-1 transition-all duration-500 group-hover:scale-105 group-hover:border-cyan-400/80 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                  <div className="relative h-full w-full overflow-hidden rounded-full">
                    <Image
                      src={member.image}
                      alt={`${member.name} - ${member.role}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                
                <div className="flex w-full flex-1 flex-col items-center justify-start text-center">
                  <h3 className="mb-2 text-lg font-bold tracking-wide text-slate-50 transition-colors group-hover:text-cyan-300">
                    {member.name}
                  </h3>
                  <div className="mb-3 h-px w-8 bg-cyan-500/50 transition-all duration-500 group-hover:w-16" />
                  <p className="text-xs font-semibold uppercase leading-relaxed tracking-widest text-cyan-200/80">
                    {member.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


