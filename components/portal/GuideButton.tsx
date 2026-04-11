"use client";

import { useState } from "react";

export function GuideButton({ fileUrl }: { fileUrl: string }) {
  const [loading, setLoading] = useState(false);

  const handleDownload = () => {
    setLoading(true);
    // Standard a href download approach
    const a = document.createElement("a");
    a.href = fileUrl;
    a.target = "_blank";
    a.download = "Background_Guide.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => setLoading(false), 500);
  };

  return (
    <button
      onClick={handleDownload}
      disabled={loading}
      className={`mt-4 w-full max-w-sm rounded-lg border border-cyan-400/50 bg-cyan-950/20 px-6 py-3 font-semibold tracking-wide text-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.15)] transition hover:-translate-y-1 hover:bg-cyan-900/40 hover:shadow-[0_2px_15px_rgba(34,211,238,0.25)] focus:outline-none focus:ring-2 focus:ring-cyan-500 disabled:opacity-50`}
    >
      {loading ? "Opening..." : "Download Background Guide"}
    </button>
  );
}
