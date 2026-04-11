"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export function SchoolEmailForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return; // Simple anti-bot stop
    
    setLoading(true);
    setError("");

    // Check if any delegates have this school_email
    const { data, error: fetchError } = await supabase
      .from("delegates")
      .select("id")
      .eq("school_email", email)
      .limit(1);

    if (fetchError || !data || data.length === 0) {
      setError("No delegations found for this school email.");
      setLoading(false);
      return;
    }

    // Redirect to school dashboard with email context
    router.push(`/portal/school/dashboard?email=${encodeURIComponent(email)}`);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
      <div>
        <label htmlFor="school-email" className="block text-sm font-medium text-slate-300">
          Enter School Emissary Email
        </label>
        <input
          type="email"
          id="school-email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mt-2 w-full rounded-md border border-indigo-400/30 bg-slate-900 px-4 py-2 text-slate-100 placeholder-slate-500 focus:border-indigo-400 focus:outline-none focus:ring-1 focus:ring-indigo-400"
          placeholder="admin@school.edu"
        />
      </div>
      {/* Honeypot field - visually hidden */}
      <div className="absolute left-[-9999px] top-[-9999px]" aria-hidden="true">
        <label htmlFor="school-website">Website</label>
        <input 
          type="text" 
          id="school-website" 
          name="school-website" 
          tabIndex={-1} 
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)} 
        />
      </div>
      {error && <p className="text-sm text-red-500">{error}</p>}
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-md bg-indigo-500 px-4 py-2 font-bold text-slate-900 transition hover:bg-indigo-400 disabled:opacity-50"
      >
        {loading ? "Checking..." : "Access School Portal"}
      </button>
    </form>
  );
}
