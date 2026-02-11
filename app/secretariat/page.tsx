import Image from "next/image";

const secretariat = [
  {
    name: "??",
    role: "Secretary General",
    image: "/secretariat/CMSMUN.jpeg",
  },
  {
    name: "??",
    role: "Director General",
    image: "/secretariat/CMSMUN.jpeg",
  },
  {
    name: "??",
    role: "Under-Secretary-General for Administration",
    image: "/secretariat/CMSMUN.jpeg",
  },
];

export default function SecretariatPage() {
  return (
    <section className="section bg-navy-light/70">
      <div className="mx-auto max-w-5xl px-4 md:px-6 lg:px-8">
        <header className="mb-8">
          <h1 className="mt-2 text-2xl font-semibold uppercase tracking-[0.25em] text-slate-50 md:text-3xl">
            The Secretariat
          </h1>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {secretariat.map((member) => (
            <div
              key={member.name}
              className="group rounded-xl border border-white/10 bg-slate-900/40 p-5 shadow-lg shadow-slate-900/70 transition hover:-translate-y-1 hover:border-cyan-300/70 hover:shadow-cyan-700/40"
            >
              <div className="mb-4 flex flex-col items-center gap-3">
                <div className="relative h-[100px] w-[100px] overflow-hidden rounded-full border border-cyan-300/70">
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center">
                  <p className="text-sm font-semibold text-slate-50">
                    {member.name}
                  </p>
                  <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-cyan-300">
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


