"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import { DelegateTable } from "@/components/eb/DelegateTable";
import { SummaryStats } from "@/components/eb/SummaryStats";

interface EBMember {
  id: string;
  name: string;
  role: string;
  committee: string;
}

interface Delegate {
  id: string;
  full_name: string;
  portfolio: string;
  school: string;
  marks: number;
  award: string;
}

export default function EBDashboardPage() {
  const router = useRouter();
  const [eb, setEb] = useState<EBMember | null>(null);
  const [delegates, setDelegates] = useState<Delegate[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const session = localStorage.getItem("eb_session");
    if (!session) {
      router.push("/eb-portal");
      return;
    }
    const ebData = JSON.parse(session);
    setEb(ebData);

    const fetchDelegates = async () => {
      const { data, error } = await supabase
        .from("delegates")
        .select("*")
        .eq("committee", ebData.committee)
        .order("marks", { ascending: false });

      if (error) {
        console.error("Error fetching delegates:", error);
      } else {
        setDelegates(data || []);
      }
      setLoading(false);
    };

    fetchDelegates();
  }, [router]);

  const handleUpdateMarks = (id: string, marks: number) => {
    setDelegates((prev) =>
      [...prev]
        .map((d) => (d.id === id ? { ...d, marks } : d))
        .sort((a, b) => b.marks - a.marks)
    );
  };

  const handleUpdateAward = (id: string, award: string) => {
    setDelegates((prev) =>
      prev.map((d) => (d.id === id ? { ...d, award } : d))
    );
  };

  const handleLogout = () => {
    localStorage.removeItem("eb_session");
    router.push("/eb-portal");
  };

  if (loading || !eb) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-cyan-500 border-t-transparent"></div>
      </div>
    );
  }

  // Calculate Summary Stats
  const totalDelegates = delegates.length;
  const bestDelegate = delegates.find((d) => d.award === "Best Delegate")?.full_name || "";
  const awardsAssigned = delegates.filter((d) => d.award !== "None").length;
  const topScorer = delegates.length > 0 
    ? { name: delegates[0].full_name, marks: delegates[0].marks } 
    : { name: "N/A", marks: 0 };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 px-4 py-8 md:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-10 flex flex-col items-start justify-between gap-6 pb-6 border-b border-white/5 md:flex-row md:items-end">
          <div className="space-y-2">
            <h1 className="text-3xl font-black uppercase tracking-tight text-white md:text-4xl">
              {eb.committee} <span className="text-cyan-400">Dashboard</span>
            </h1>
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-cyan-400 ring-1 ring-inset ring-cyan-400/20">
                {eb.role}
              </span>
              <span className="text-xs font-medium text-slate-500">
                Logged in as <span className="text-slate-300">{eb.name}</span>
              </span>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 text-xs font-bold uppercase tracking-widest text-slate-400 transition-colors hover:bg-red-500/10 hover:text-red-400 hover:border-red-500/30"
          >
            Terminal Logout
          </button>
        </div>

        {/* Summary Stats */}
        <div className="mb-12">
          <SummaryStats
            totalDelegates={totalDelegates}
            bestDelegate={bestDelegate}
            awardsAssigned={awardsAssigned}
            topScorer={topScorer}
          />
        </div>

        {/* Delegate Table */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white">Delegate Roster</h2>
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-500">
              <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
              Real-time Sync Active
            </div>
          </div>
          
          <DelegateTable
            delegates={delegates}
            committee={eb.committee}
            onUpdateMarks={handleUpdateMarks}
            onUpdateAward={handleUpdateAward}
          />
        </div>
      </div>
    </main>
  );
}
