import { EmailForm } from "@/components/portal/EmailForm";
import { SchoolEmailForm } from "@/components/portal/SchoolEmailForm";

export default function PortalPage() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-4">
      <div className="mb-12 text-center">
        <h1 className="mb-2 text-3xl font-bold uppercase tracking-widest text-cyan-300 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">
          CMSMUN Portals
        </h1>
        <p className="text-sm font-medium text-slate-400">
          Access resources for Delegates and Schools
        </p>
      </div>
      
      <div className="flex w-full max-w-4xl flex-col items-start justify-center gap-12 md:flex-row md:gap-24">
        <div className="flex w-full flex-col items-center border-l border-cyan-400/30 pl-4 md:w-1/2">
          <h2 className="mb-4 text-xl font-bold text-slate-200">Delegate Login</h2>
          <EmailForm />
        </div>
        
        <div className="flex w-full flex-col items-center border-l border-indigo-400/30 pl-4 md:w-1/2">
          <h2 className="mb-4 text-xl font-bold text-slate-200">School Login</h2>
          <SchoolEmailForm />
        </div>
      </div>
    </div>
  );
}
