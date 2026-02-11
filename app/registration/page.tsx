export default function RegistrationPage() {
  return (
    <section className="section bg-navy-light/70">
      <div className="mx-auto max-w-5xl px-4 md:px-6 lg:px-8">
        <header className="mb-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Join Us
          </p>
          <h1 className="mt-2 text-2xl font-semibold uppercase tracking-[0.25em] text-slate-50 md:text-3xl">
            Registration
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-200">
            CMSMUN 2026 welcomes school delegations as well as individual
            delegates. Please use the appropriate form below to complete your
            registration.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-slate-900/40 p-6 shadow-lg shadow-slate-900/70">
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.26em] text-cyan-200">
              School Delegation Registration
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-200">
              This form is intended for schools registering delegations of
              multiple students. Please provide accurate information regarding
              delegation size, faculty advisors and preferred committees.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/EXAMPLE_SCHOOL_DELEGATION_FORM/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-cyan-300 px-8 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-900 shadow-lg shadow-cyan-500/25 transition hover:bg-cyan-200"
            >
              Register School Delegation
            </a>
          </div>

          <div className="rounded-xl border border-white/10 bg-slate-900/40 p-6 shadow-lg shadow-slate-900/70">
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.26em] text-cyan-200">
              Individual Delegate Registration
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-200">
              This form is designed for independent delegates who are not
              attending as part of a school delegation. Please ensure all
              contact details and academic information are filled in correctly.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/EXAMPLE_INDIVIDUAL_DELEGATE_FORM/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-cyan-300 px-8 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-900 shadow-lg shadow-cyan-500/25 transition hover:bg-cyan-200"
            >
              Register as Individual Delegate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


