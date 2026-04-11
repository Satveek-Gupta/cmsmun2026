"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

const GUIDE_COMMITTEES = [
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

export function UploadGuideForm() {
  const [committee, setCommittee] = useState(GUIDE_COMMITTEES[0]);
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      setMessage("Error: Please select a file first.");
      return;
    }
    
    setLoading(true);
    setMessage("");

    const timestamp = Date.now();
    const fileName = `${committee.replace(/\s+/g, "_")}_${timestamp}.pdf`;
    
    // 1. Upload file to Supabase storage bucket "guides"
    const { data: storageData, error: storageError } = await supabase.storage
      .from("guides")
      .upload(fileName, file);

    if (storageError) {
      setMessage(`Storage Error: ${storageError.message}`);
      setLoading(false);
      return;
    }

    // 2. Get public URL
    const { data: publicUrlData } = supabase.storage
      .from("guides")
      .getPublicUrl(storageData.path);

    const fileUrl = publicUrlData.publicUrl;

    // 3. Create or update record in guides table
    // Fetch if existing record exists first
    const { data: existingGuide } = await supabase
      .from("guides")
      .select("id")
      .eq("committee", committee)
      .single();

    if (existingGuide) {
      // Update
      const { error: updateError } = await supabase
        .from("guides")
        .update({ file_url: fileUrl })
        .eq("id", existingGuide.id);
        
      if (updateError) {
        setMessage(`Database Error: ${updateError.message}`);
      } else {
        setMessage(`Successfully updated guide for ${committee}`);
      }
    } else {
      // Insert new
      const { error: insertError } = await supabase
        .from("guides")
        .insert([{ committee, file_url: fileUrl }]);

      if (insertError) {
        setMessage(`Database Error: ${insertError.message}`);
      } else {
        setMessage(`Successfully uploaded new guide for ${committee}`);
      }
    }
    
    setFile(null);
    if (document.getElementById("fileInput")) {
      (document.getElementById("fileInput") as HTMLInputElement).value = "";
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleUpload} className="w-full max-w-lg space-y-4 rounded-xl border border-emerald-400/20 bg-slate-900/40 p-6 backdrop-blur-md">
      <h3 className="mb-4 text-xl font-bold text-slate-100">Upload Background Guide</h3>

      <div className="space-y-2">
        <label className="block text-sm text-slate-300">Committee</label>
        <select
          value={committee}
          onChange={(e) => setCommittee(e.target.value)}
          className="w-full rounded-md border border-slate-700 bg-slate-800 p-2 text-white outline-none focus:border-emerald-400"
        >
          {GUIDE_COMMITTEES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <label className="block text-sm text-slate-300">PDF File</label>
        <input
          id="fileInput"
          type="file"
          accept="application/pdf"
          onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
          required
          className="w-full text-sm text-slate-300 bg-slate-800 p-2 rounded border border-slate-700 focus:border-emerald-400
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-bold
            file:bg-emerald-900 file:text-emerald-300
            hover:file:bg-emerald-800"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="mt-4 w-full rounded bg-emerald-500 py-2 font-bold text-slate-900 hover:bg-emerald-400 disabled:opacity-50"
      >
        {loading ? "Uploading..." : "Upload Guide"}
      </button>

      {message && <p className={`mt-2 text-sm ${message.includes("Error") ? "text-red-400" : "text-emerald-400"}`}>{message}</p>}
    </form>
  );
}
