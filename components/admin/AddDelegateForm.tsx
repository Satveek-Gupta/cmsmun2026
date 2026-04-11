"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

const COMMITTEES = [
  "UNGA",
  "UNSC",
  "Peru Crisis",
  "Lok Sabha",
  "IAEA",
  "COPUOS",
  "OAS",
  "US HOGR 2013",
  "ICJ",
  "International Press",
];

export function AddDelegateForm() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    committee: COMMITTEES[0],
    portfolio: "",
    school: "",
    school_email: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const { error } = await supabase.from("delegates").insert([formData]);

    setLoading(false);
    if (error) {
      setMessage(`Error: ${error.message}`);
    } else {
      setMessage("Delegate added successfully!");
      setFormData({
        full_name: "",
        email: "",
        committee: COMMITTEES[0],
        portfolio: "",
        school: "",
        school_email: "",
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <form onSubmit={handleSubmit} className="mb-10 w-full max-w-lg space-y-4 rounded-xl border border-cyan-400/20 bg-slate-900/40 p-6 backdrop-blur-md">
      <h3 className="mb-4 text-xl font-bold text-slate-100">Add New Delegate</h3>

      <div className="space-y-2">
        <label className="block text-sm text-slate-300">Full Name</label>
        <input
          name="full_name"
          value={formData.full_name}
          onChange={handleChange}
          required
          className="w-full rounded-md border border-slate-700 bg-slate-800 p-2 text-white outline-none focus:border-cyan-400"
          placeholder="John Doe"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm text-slate-300">Delegate Email</label>
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full rounded-md border border-slate-700 bg-slate-800 p-2 text-white outline-none focus:border-cyan-400"
          placeholder="delegate@school.edu"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm text-slate-300">Committee</label>
        <select
          name="committee"
          value={formData.committee}
          onChange={handleChange}
          className="w-full rounded-md border border-slate-700 bg-slate-800 p-2 text-white outline-none focus:border-cyan-400"
        >
          {COMMITTEES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <label className="block text-sm text-slate-300">Portfolio</label>
        {formData.committee === "International Press" ? (
          <select
            name="portfolio"
            value={formData.portfolio}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-slate-700 bg-slate-800 p-2 text-white outline-none focus:border-cyan-400"
          >
            <option value="" disabled>Select a press role...</option>
            <option value="Journalism">Journalism</option>
            <option value="Photography">Photography</option>
            <option value="Caricature">Caricature</option>
          </select>
        ) : (
          <input
            name="portfolio"
            value={formData.portfolio}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-slate-700 bg-slate-800 p-2 text-white outline-none focus:border-cyan-400"
            placeholder="e.g. USA / Chief Minister"
          />
        )}
      </div>

      <div className="space-y-2">
        <label className="block text-sm text-slate-300">School/Institution</label>
        <input
          name="school"
          value={formData.school}
          onChange={handleChange}
          required
          className="w-full rounded-md border border-slate-700 bg-slate-800 p-2 text-white outline-none focus:border-cyan-400"
          placeholder="CMS Aliganj"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm text-slate-300">School Emissary Email</label>
        <input
          name="school_email"
          type="email"
          value={formData.school_email}
          onChange={handleChange}
          required
          className="w-full rounded-md border border-slate-700 bg-slate-800 p-2 text-white outline-none focus:border-cyan-400"
          placeholder="admin@school.edu"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="mt-4 w-full rounded bg-cyan-500 py-2 font-bold text-slate-900 hover:bg-cyan-400 disabled:opacity-50"
      >
        {loading ? "Adding..." : "Add Delegate"}
      </button>

      {message && <p className={`mt-2 text-sm ${message.includes("Error") ? "text-red-400" : "text-emerald-400"}`}>{message}</p>}
    </form>
  );
}
