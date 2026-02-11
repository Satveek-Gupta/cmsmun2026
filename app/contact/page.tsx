"use client";

export default function ContactPage() {
  return (
    <section className="section bg-navy-light/70">
      <div className="mx-auto max-w-5xl px-4 md:px-6 lg:px-8">
        <header className="mb-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Connect
          </p>
          <h1 className="mt-2 text-2xl font-semibold uppercase tracking-[0.25em] text-slate-50 md:text-3xl">
            Contact Us
          </h1>
        </header>

        <div className="grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] md:items-start">
          <div className="space-y-6 text-sm leading-relaxed text-slate-100/90">
            <div className="space-y-4">
              <div>
                <h2 className="text-[11px] font-semibold uppercase tracking-[0.26em] text-cyan-200">
                  Conference Secretary
                </h2>
                <p className="mt-2">
                  Dr. Shuchi Tewari –{" "}
                  <a
                    href="tel:+917309258935"
                    className="text-cyan-300 hover:text-cyan-200"
                  >
                    +91 73092 58935
                  </a>
                  <br />
                  <a
                    href="mailto:shuchi.tewari@cmseducation.org"
                    className="text-cyan-300 hover:text-cyan-200"
                  >
                    shuchi.tewari@cmseducation.org
                  </a>
                </p>
              </div>
            </div>

            <div className="pt-2">
              <h2 className="text-[11px] font-semibold uppercase tracking-[0.26em] text-cyan-200">
                CMS Aliganj Campus I
              </h2>
              <p className="mt-3">
                Sector &apos;O&apos; Aliganj,
                <br />
                Lucknow – 226024,
                <br />
                Uttar Pradesh,
                <br />
                India.
              </p>
              <p className="mt-3">
                E-mail:{" "}
                <a
                  href="mailto:mun.aliganj1@cmseducation.org"
                  className="text-cyan-300 hover:text-cyan-200"
                >
                  mun.aliganj1@cmseducation.org
                </a>
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-slate-900/40 p-4 shadow-lg shadow-slate-900/70">
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.26em] text-cyan-200">
              Location
            </h2>
            <p className="mt-2 text-xs text-slate-300">
              The conference will be hosted at City Montessori School, Aliganj
              Campus I, Lucknow.
            </p>
            <div className="mt-4 aspect-[4/3] overflow-hidden rounded-lg border border-white/10 bg-slate-950/70">
              <iframe
                title="City Montessori School Aliganj Campus I Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2376.733369299304!2d80.94961421675791!3d26.90245402312063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399957b9178d8275%3A0xd78d72ca4c0190b4!2sCMS%20Aliganj%20Campus%20I!5e1!3m2!1sen!2sin!4v1769107914103!5m2!1sen!2sin%22%20width=%22600%22%20height=%22450%22%20style=%22border:0;%22%20allowfullscreen=%22%22%20loading=%22lazy%22%20referrerpolicy=%22no-referrer-when-downgrade"
                loading="lazy"
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


