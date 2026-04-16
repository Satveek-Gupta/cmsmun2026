import { cookies } from "next/headers";
import { supabase } from "@/lib/supabaseClient";
import { AdminLoginForm } from "@/components/admin/AdminLoginForm";
import { StatCard } from "@/components/admin/StatCard";
import { ChartBlock } from "@/components/admin/ChartBlock";
import { TopDelegatesTable } from "@/components/admin/TopDelegatesTable";
import { Users, FileText, Award, BarChart3, TrendingUp } from "lucide-react";

export default async function AdminAnalyticsPage() {
  const cookieStore = await cookies();
  const isAuthenticated = cookieStore.get("admin_session")?.value === "authenticated";

  if (!isAuthenticated) {
    return <AdminLoginForm />;
  }

  // 1. Fetch Total Delegates
  const { count: totalDelegates } = await supabase
    .from("delegates")
    .select("*", { count: "exact", head: true });

  // 2. Fetch Delegates per Committee
  const { data: delegates } = await supabase
    .from("delegates")
    .select("committee, marks, award");

  const committeeGroups: Record<string, number> = {};
  const awardGroups: Record<string, number> = {};
  
  delegates?.forEach(d => {
    committeeGroups[d.committee] = (committeeGroups[d.committee] || 0) + 1;
    if (d.award && d.award !== "None") {
      awardGroups[d.award] = (awardGroups[d.award] || 0) + 1;
    }
  });

  const committeeData = Object.entries(committeeGroups).map(([name, value]) => ({ name, value }));
  const awardData = Object.entries(awardGroups).map(([name, value]) => ({ name, value }));

  // 3. Fetch Total Resolutions & Status Breakdown
  const { data: resolutions, count: totalResolutions } = await supabase
    .from("resolutions")
    .select("status", { count: "exact" });

  const statusGroups: Record<string, number> = { pending: 0, approved: 0, rejected: 0 };
  resolutions?.forEach(r => {
    statusGroups[r.status] = (statusGroups[r.status] || 0) + 1;
  });

  const statusData = Object.entries(statusGroups).map(([name, value]) => ({ 
    name: name.charAt(0).toUpperCase() + name.slice(1), 
    value 
  }));

  // 4. Fetch Top 5 Delegates
  const { data: topDelegates } = await supabase
    .from("delegates")
    .select("id, full_name, committee, portfolio, marks")
    .order("marks", { ascending: false })
    .limit(5);

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <header className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="space-y-1">
            <h1 className="text-3xl font-black uppercase tracking-tight text-white md:text-4xl">
              Platform <span className="text-cyan-400">Intelligence</span>
            </h1>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
              Real-time Analytics Dashboard
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-cyan-500 animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Live Telemetry Active</span>
          </div>
        </header>

        {/* Top Metric Cards */}
        <div className="mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard 
            label="Total Delegates" 
            value={totalDelegates || 0} 
            icon={<Users className="h-5 w-5" />}
            trend={{ value: 12, label: "vs last week" }}
          />
          <StatCard 
            label="Resolutions" 
            value={totalResolutions || 0} 
            icon={<FileText className="h-5 w-5" />}
          />
          <StatCard 
            label="Awards Given" 
            value={awardData.reduce((acc, curr) => acc + curr.value, 0)} 
            icon={<Award className="h-5 w-5" />}
          />
          <StatCard 
            label="Avg. Marks" 
            value={delegates && delegates.length > 0 ? (delegates.reduce((acc, curr) => acc + (curr.marks || 0), 0) / delegates.length).toFixed(1) : 0} 
            icon={<TrendingUp className="h-5 w-5" />}
          />
        </div>

        {/* Charts & Tables Section */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Left Column: Charts */}
          <div className="grid gap-6">
            <ChartBlock 
              title="Delegates per Committee" 
              type="bar" 
              data={committeeData} 
            />
            <ChartBlock 
              title="Resolution Status" 
              type="pie" 
              data={statusData} 
            />
          </div>

          {/* Right Column: Awards & Top Performers */}
          <div className="grid gap-6">
            <ChartBlock 
              title="Awards Distribution" 
              type="pie" 
              data={awardData} 
            />
            
            <div className="flex flex-col rounded-3xl border border-white/5 bg-slate-900/40 p-6 backdrop-blur-xl">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                  Top Performing Delegates
                </h3>
                <BarChart3 className="h-4 w-4 text-slate-600" />
              </div>
              <TopDelegatesTable delegates={topDelegates || []} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
