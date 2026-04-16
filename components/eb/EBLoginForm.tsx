"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export function EBLoginForm() {
  const [serialKey, setSerialKey] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const { data, error: sbError } = await supabase
        .from("eb_members")
        .select("*")
        .eq("serial_key", serialKey)
        .single();

      if (sbError || !data) {
        setError("Invalid serial key. Please try again.");
      } else {
        // Store session in localStorage
        localStorage.setItem("eb_session", JSON.stringify(data));
        router.push("/eb-portal/dashboard");
      }
    } catch (err) {
      setError("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md rounded-2xl border border-cyan-500/20 bg-slate-900/60 p-8 backdrop-blur-xl shadow-2xl">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold uppercase tracking-widest text-cyan-300 drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]">
          EB Portal Access
        </h2>
        <p className="mt-2 text-xs font-medium uppercase tracking-widest text-slate-400">
          Executive Board Identity Verification
        </p>
      </div>

      <form onSubmit={handleLogin} className="space-y-6">
        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">
            Serial Key
          </label>
          <input
            type="password"
            value={serialKey}
            onChange={(e) => setSerialKey(e.target.value)}
            placeholder="Enter your EB serial key"
            className="w-full rounded-xl border border-slate-700 bg-slate-800/50 p-4 text-white placeholder-slate-600 outline-none transition-all focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50"
            required
          />
        </div>

        {error && (
          <p className="text-center text-xs font-medium text-red-500 animate-pulse">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="group relative w-full overflow-hidden rounded-xl bg-cyan-500 py-4 font-bold uppercase tracking-widest text-slate-900 transition-all hover:bg-cyan-400 active:scale-95 disabled:opacity-50"
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            {loading ? "Verifying..." : "Verify Identity"}
          </span>
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform group-hover:translate-x-full duration-1000" />
        </button>
      </form>
    </div>
  );
}
