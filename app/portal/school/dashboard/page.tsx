import { redirect } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import { getCommitteeFullName } from "@/components/portal/DelegateCard";

export default async function SchoolDashboardPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const email = params.email as string;

  if (!email) {
    redirect("/portal");
  }

  // Fetch delegates belonging to school
  const { data: delegates, error: delegateError } = await supabase
    .from("delegates")
    .select("*")
    .eq("school_email", email);

  if (delegateError || !delegates || delegates.length === 0) {
    redirect("/portal");
  }

  // Get unique committees across delegates
  const uniqueCommittees = Array.from(new Set(delegates.map((d) => d.committee)));

  // Fetch guides only for those committees
  const { data: guides } = await supabase
    .from("guides")
    .select("*")
    .in("committee", uniqueCommittees);

  // Helper map for quick URL access
  const guideMap: Record<string, string> = {};
  if (guides) {
    guides.forEach((g) => {
      guideMap[g.committee] = g.file_url;
    });
  }

  // Get school name from first delegate found
  const schoolName = delegates[0]?.school || "School";

  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-start px-4 py-12 sm:pt-24 max-w-6xl mx-auto w-full">
      <div className="mb-10 text-center">
        <h1 className="mb-2 text-3xl font-bold uppercase tracking-widest text-indigo-400 drop-shadow-[0_0_15px_rgba(129,140,248,0.5)]">
          {schoolName} Emissary Portal
        </h1>
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
          Manage your delegation and access guides
        </p>
      </div>

      <div className="w-full flex-col">
        <h2 className="mb-6 text-xl font-bold text-slate-100 flex items-center border-b border-white/10 pb-4">
          Your Delegations ({delegates.length})
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {delegates.map((del) => (
            <div key={del.id} className="overflow-hidden rounded-2xl border border-indigo-400/20 bg-slate-900/50 p-6 shadow-xl backdrop-blur-md">
              <h3 className="text-lg font-bold tracking-wider text-slate-100 mb-2">
                {del.full_name}
              </h3>
              <div className="space-y-2 text-sm text-slate-300">
                <div className="flex flex-col items-start gap-2 mt-4">
                  <span className="inline-flex rounded-full bg-indigo-900/40 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-indigo-300 ring-1 ring-inset ring-indigo-400/30">
                    {getCommitteeFullName(del.committee)}
                  </span>
                  <span className="mt-1 inline-flex items-center rounded bg-gradient-to-r from-cyan-950/40 to-transparent border-l-2 border-cyan-400 px-3 py-1.5 text-sm font-medium tracking-wide text-cyan-100 drop-shadow-sm">
                    {del.portfolio}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="mb-6 text-xl font-bold text-slate-100 flex items-center border-b border-white/10 pb-4">
          Background Guides
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {uniqueCommittees.map((committee) => {
            const url = guideMap[committee];
            return (
              <div key={committee} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 overflow-hidden rounded-xl border border-teal-400/20 bg-slate-900/50 p-4 shadow-xl backdrop-blur-md">
                <span className="font-bold text-slate-200 text-sm leading-snug">{getCommitteeFullName(committee)}</span>
                <div className="shrink-0">
                {url ? (
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded bg-teal-500/20 px-3 py-1 text-xs font-semibold text-teal-300 hover:bg-teal-500/30 transition ring-1 ring-teal-400/50"
                  >
                    Download
                  </a>
                ) : (
                  <span className="text-xs text-slate-500 italic block mt-1 sm:mt-0">Not available</span>
                )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
