"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export function EmailForm() {
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

    const { data, error: fetchError } = await supabase
      .from("delegates")
      .select("*")
      .eq("email", email)
      .single();

    if (fetchError || !data) {
      setError("Email not found. Make sure you use your registered email.");
      setLoading(false);
      return;
    }

    // Redirect to dashboard with email context
    router.push(`/portal/dashboard?email=${encodeURIComponent(email)}`);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-300">
          Enter your registered email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mt-2 w-full rounded-md border border-cyan-400/30 bg-slate-900 px-4 py-2 text-slate-100 placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
          placeholder="delegate@example.com"
        />
      </div>
      {/* Honeypot field - visually hidden */}
      <div className="absolute left-[-9999px] top-[-9999px]" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input 
          type="text" 
          id="website" 
          name="website" 
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
        className="w-full rounded-md bg-cyan-500 px-4 py-2 font-bold text-slate-900 transition hover:bg-cyan-400 disabled:opacity-50"
      >
        {loading ? "Checking..." : "Access Portal"}
      </button>
    </form>
  );
}
