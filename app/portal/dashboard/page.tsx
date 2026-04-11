import { redirect } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import { DelegateCard } from "@/components/portal/DelegateCard";
import { GuideButton } from "@/components/portal/GuideButton";

export default async function DashboardPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const email = params.email as string;

  if (!email) {
    redirect("/portal");
  }

  // Fetch delegate
  const { data: delegate, error: delegateError } = await supabase
    .from("delegates")
    .select("*")
    .eq("email", email)
    .single();

  if (delegateError || !delegate) {
    redirect("/portal");
  }

  // Fetch guide
  const { data: guide } = await supabase
    .from("guides")
    .select("*")
    .eq("committee", delegate.committee)
    .single();

  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-start px-4 py-12 sm:pt-24">
      <div className="mb-10 text-center">
        <h1 className="mb-2 text-3xl font-bold uppercase tracking-widest text-cyan-300 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">
          Welcome, {delegate.full_name.split(" ")[0]}
        </h1>
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
          CMSMUN '26 Delegate Portal
        </p>
      </div>

      <div className="flex w-full flex-col items-center space-y-8">
        <DelegateCard delegate={delegate} />

        {guide?.file_url ? (
          <div className="flex w-full flex-col items-center border-t border-cyan-900/50 pt-8">
            <h3 className="mb-2 text-lg font-bold text-slate-200">
              Committee Resources
            </h3>
            <p className="mb-2 text-sm text-slate-400 text-center max-w-sm">
              Your background guide is available for download. Make sure to read it thoroughly before the conference.
            </p>
            <GuideButton fileUrl={guide.file_url} />
          </div>
        ) : (
          <div className="flex w-full flex-col items-center border-t border-cyan-900/50 pt-8">
            <h3 className="mb-2 text-lg font-bold text-slate-200">
              Committee Resources
            </h3>
            <p className="text-sm italic text-slate-500">
              Background guides for {delegate.committee} are not yet available.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
