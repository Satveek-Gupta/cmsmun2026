"use client";

import { useState } from "react";
import Papa from "papaparse";
import { supabase } from "@/lib/supabaseClient";

export function BulkImportForm() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      setMessage("Error: Please select a CSV file first.");
      return;
    }

    setLoading(true);
    setMessage("");

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: async (results) => {
        const rows = results.data as any[];
        
        // Validate headers (basic check)
        const requiredHeaders = ["full_name", "email", "committee", "portfolio", "school", "school_email"];
        const hasAllHeaders = requiredHeaders.every(h => Object.keys(rows[0] || {}).includes(h));

        if (!hasAllHeaders) {
          setMessage(`Error: CSV must contain headers: ${requiredHeaders.join(", ")}`);
          setLoading(false);
          return;
        }

        // Filter and format payload
        const payload = rows.map(r => ({
          full_name: r.full_name,
          email: r.email,
          committee: r.committee,
          portfolio: r.portfolio,
          school: r.school,
          school_email: r.school_email,
        }));

        const { error } = await supabase.from("delegates").insert(payload);

        setLoading(false);
        if (error) {
          setMessage(`Database Error: ${error.message}`);
        } else {
          setMessage(`Successfully imported ${payload.length} delegates!`);
          setFile(null);
          // reset file input visually
          if (document.getElementById("csvInput")) {
            (document.getElementById("csvInput") as HTMLInputElement).value = "";
          }
        }
      },
      error: (error) => {
        setMessage(`CSV Parsing Error: ${error.message}`);
        setLoading(false);
      }
    });
  };

  return (
    <form onSubmit={handleUpload} className="w-full max-w-lg space-y-4 rounded-xl border border-indigo-400/20 bg-slate-900/40 p-6 backdrop-blur-md">
      <h3 className="mb-2 text-xl font-bold text-slate-100">Bulk Import Delegates</h3>
      <p className="text-xs text-slate-400 mb-4">
        Upload a CSV file containing: <br/> <span className="font-mono text-indigo-300">full_name, email, committee, portfolio, school, school_email</span>
      </p>

      <div className="space-y-2">
        <label className="block text-sm text-slate-300">CSV File</label>
        <input
          id="csvInput"
          type="file"
          accept=".csv"
          onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
          required
          className="w-full text-sm text-slate-300 bg-slate-800 p-2 rounded border border-slate-700 focus:border-indigo-400
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-bold
            file:bg-indigo-900 file:text-indigo-300
            hover:file:bg-indigo-800"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="mt-4 w-full rounded bg-indigo-500 py-2 font-bold text-slate-900 hover:bg-indigo-400 disabled:opacity-50"
      >
        {loading ? "Processing..." : "Import CSV"}
      </button>

      {message && <p className={`mt-2 text-sm ${message.includes("Error") ? "text-red-400" : "text-emerald-400"}`}>{message}</p>}
    </form>
  );
}
