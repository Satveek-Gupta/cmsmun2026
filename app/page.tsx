export default function Home() {
  return (
    <>
      <section className="hero-overlay relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-[url('https://images.pexels.com/photos/1181400/pexels-photo-1181400.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center">
        <div className="absolute inset-0 bg-slate-900/70 mix-blend-multiply" />
        <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 py-24 text-center md:gap-8 md:px-6 lg:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-cyan-200/90">
            City Montessori School · Aliganj Campus I Presents
          </p>
          <h1 className="text-3xl font-semibold uppercase tracking-[0.25em] text-slate-50 sm:text-4xl md:text-5xl">
            CMS Model United Nations 2026
          </h1>
          <p className="text-xs font-medium uppercase tracking-[0.32em] text-cyan-300 sm:text-sm">
            The Fifth Edition
          </p>
          <p className="text-sm font-medium tracking-[0.22em] text-slate-200">
            Dates: 24th and 25th April, 2026
          </p>
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

      <section id="about" className="section bg-navy-light/70">
        <div className="mx-auto max-w-5xl px-4 md:px-6 lg:px-8">
          <h2 className="text-center text-xl font-semibold uppercase tracking-[0.3em] text-cyan-300 ">
            About CMSMUN &apos;26
          </h2>
          <div className="mt-4">
            <div className="mx-auto max-w-3xl space-y-4 text-center text-sm leading-relaxed text-slate-100/90 md:text-[15px]">
              <p>
                The sheer beauty of City Montessori School lies in its grazed presence across the city of Lucknow. A space that challenges youth to grow, mature and not lose their individuality at the same time. Be it leading from the front, managing from in between or stabilizing from behind---CMS teaches its students for every scenario.
                The dream seen by our esteemed founder manager Late Dr Jagdish Gandhi gets closer to being possible with each passing day, with each passing CMSMUN.
              </p>
              <p>
                Model United Nations at CMS Aliganj 1 is a platform for young diplomats & debaters from across the country and beyond to engage in dialogue, learn from different people, manage crisis and just be yourself at this international forum.
                Delegates do not just imitate being world leaders, they aspire to be one. Speeches not just to win awards but also to raise awareness about the real world issues. Unity in diversity, &quot;Vasudhaiva Kutumbkam&quot;---one world, one family, a symbol of not just CMS but the country as a whole is reinstated by this special event where countries spanning across the globe bring in unique, diverse and cultural solutions to global issues, taking this conference from being a competition to something much more profound, A stage where minds can be changed, issues can be tangled but optimistically resolved in the end.
              </p>
              <p>

                CMSMUN throughout the course of time has taken shape as a family, a safe place in the hearts of its conveners and participants,
                Each delegate who has participated and each delegate who will be participating will surely be written in the family tree of CMSMUN where debates are put forth to come to a consensus not stray far, unmoderated caucuses are introduced to set aside differences not develop tectonic shifts and time is spent to make all of us come close to make this world a better place just like a family.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}