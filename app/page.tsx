import { Countdown } from "@/components/Countdown";
import { Highlighter } from "@/components/ui/highlighter";

export default function Home() {
  return (
    <>
      <section className="hero-overlay relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-[url('/DSC_0202.jpg')] bg-contain bg-no-repeat bg-center">
        <div className="absolute inset-0 bg-slate-900/70 mix-blend-multiply" />
        <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 py-24 text-center md:gap-8 md:px-6 lg:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-cyan-200/90">
            City Montessori School · Aliganj Campus I Presents
          </p>
          <h1 
            className="text-3xl font-bold uppercase tracking-[0.25em] text-slate-50 sm:text-4xl md:text-5xl drop-shadow-lg"
            style={{ fontFamily: "'Futura', 'Trebuchet MS', sans-serif" }}
          >
            CMS Model United Nations 2026
          </h1>
          <p className="text-xs font-medium uppercase tracking-[0.32em] text-cyan-300 sm:text-sm">
            The Fifth Edition
          </p>
          <div className="mb-4 mt-2 inline-flex items-center justify-center rounded-full border-[3px] border-cyan-400 bg-slate-900 px-8 py-3.5 shadow-[5px_5px_0_0_#22d3ee] transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[7px_7px_0_0_#22d3ee]">
            <p className="ml-1 text-sm font-black uppercase tracking-[0.4em] text-cyan-50">
              24 - 25 APRIL 2026
            </p>
          </div>
          <Countdown targetDate="2026-04-24T09:00:00" />
          <p className="max-w-2xl text-sm text-slate-200/90 md:text-base">
            A platform for young leaders to engage in{" "}
            <span className="font-semibold text-cyan-300">
              realistic diplomacy
            </span>
            ,{" "}
            <span className="font-semibold text-cyan-300">
              meaningful activism
            </span>{" "}
            and{" "}
            <span className="font-semibold text-cyan-300">
              global perspectives
            </span>{" "}
            in the heart of Lucknow.
          </p>
          <div className="mt-6 flex flex-col gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-900 sm:flex-row">
            <a
              href="/registration"
              className="inline-flex items-center justify-center rounded-full bg-cyan-300 px-10 py-3 text-slate-900 shadow-lg shadow-cyan-500/25 transition hover:bg-cyan-200"
            >
              Register Now
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-full border border-cyan-300/70 bg-navy-light/80 px-10 py-3 text-cyan-100 transition hover:bg-cyan-300/10"
            >
              Learn More
            </a>
          </div>
          <div className="mt-10 flex flex-col items-center gap-2 text-[10px] font-medium uppercase tracking-[0.3em] text-slate-300">
            <span>Scroll to Discover</span>
            <span className="animate-bounce text-xl leading-none">˅</span>
          </div>
        </div>
      </section>

      <section id="about" className="section relative bg-navy-light/70 py-24 overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[600px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />
        
        <div className="relative mx-auto max-w-5xl px-4 md:px-6 lg:px-8">
          <div className="mb-12 flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-2xl font-bold uppercase tracking-[0.3em] text-cyan-300 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]" style={{ fontFamily: "'Futura', 'Trebuchet MS', sans-serif" }}>
              About CMSMUN &apos;26
            </h2>
            <div className="h-0.5 w-24 rounded-full bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
          </div>
          
          <div className="mx-auto max-w-4xl">
            <div className="group relative rounded-3xl border border-cyan-400/10 bg-slate-900/40 p-8 shadow-2xl shadow-cyan-900/10 backdrop-blur-md transition-all duration-500 hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)] sm:p-10 md:p-14">
              
              {/* Corner Accents */}
              <div className="absolute -left-px -top-px h-8 w-8 rounded-tl-3xl border-l-2 border-t-2 border-cyan-300/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute -right-px -bottom-px h-8 w-8 rounded-br-3xl border-b-2 border-r-2 border-cyan-300/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              
              <div className="space-y-8 text-sm leading-8 text-slate-300 sm:text-base md:text-[15px] md:leading-9 md:text-justify font-bold tracking-normal">
                <p>
                  <span className="float-left mr-3 text-5xl font-medium text-cyan-300 leading-none drop-shadow-lg" style={{ fontFamily: "'Futura', 'Trebuchet MS', sans-serif" }}>T</span>he sheer beauty of City Montessori School lies in its grazed presence across the city of Lucknow. A space that challenges youth to grow, mature and not lose their individuality at the same time. Be it leading from the front, managing from in between or stabilizing from behind—CMS teaches its students for every scenario. The dream seen by our esteemed founder manager Late Dr. Jagdish Gandhi gets closer to being possible with each passing day, with each passing CMSMUN.
                </p>
                {/* Decorative Separator */}
                <div className="flex items-center justify-center py-2 opacity-50">
                  <span className="h-1 w-1 rounded-full bg-cyan-300 mx-2 shadow-[0_0_8px_#22d3ee]" />
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 mx-2 shadow-[0_0_10px_#22d3ee]" />
                  <span className="h-1 w-1 rounded-full bg-cyan-300 mx-2 shadow-[0_0_8px_#22d3ee]" />
                </div>
                <p>
                  Model United Nations at CMS Aliganj 1 is a platform for young diplomats & debaters from across the country and beyond to engage in dialogue, learn from different people, manage crisis and just be yourself at this international forum. Delegates do not just imitate being world leaders, they aspire to be one. Speeches are given not just to win awards but to raise awareness about real-world issues. Unity in diversity,{" "}
                  <Highlighter action="highlight" color="rgba(34, 211, 238, 0.2)" strokeWidth={1.5} iterations={3} isView={true} multiline={true} >
                    <span className="font-bold text-cyan-200 tracking-wider brightness-110 drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]">&quot;Vasudhaiva Kutumbkam&quot; — one world, one family</span>
                  </Highlighter>
                  {", "}a symbol of not just CMS but the country as a whole, is reinstated by this special event where countries spanning across the globe bring in unique, diverse, and cultural solutions to global issues. This conference goes from being a competition to something much more profound—a stage where minds can be changed and issues can be tangled, but optimistically resolved in the end.
                </p>
                
                {/* Decorative Separator */}
                <div className="flex items-center justify-center py-2 opacity-50">
                  <span className="h-1 w-1 rounded-full bg-cyan-300 mx-2 shadow-[0_0_8px_#22d3ee]" />
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 mx-2 shadow-[0_0_10px_#22d3ee]" />
                  <span className="h-1 w-1 rounded-full bg-cyan-300 mx-2 shadow-[0_0_8px_#22d3ee]" />
                </div>
                
                <p>
                  CMSMUN, throughout the course of time, has taken shape as a family—a safe place in the hearts of its conveners and participants. Each delegate who has participated, and each delegate who will be participating, will surely be written in the family tree of CMSMUN where debates are put forth to come to a consensus, not stray far; unmoderated caucuses are introduced to set aside differences, not develop tectonic shifts; and time is spent to make all of us come close to make this world a better place, just like a family.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}