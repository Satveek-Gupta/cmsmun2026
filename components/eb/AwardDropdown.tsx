"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

interface AwardDropdownProps {
  id: string;
  currentAward: string;
  committee: string;
  bestDelegateExists: boolean;
  onUpdate: (newAward: string) => void;
}

const AWARDS = ["None", "Best Delegate", "High Commendation", "Special Mention", "Verbal Mention"];

export function AwardDropdown({ id, currentAward, committee, bestDelegateExists, onUpdate }: AwardDropdownProps) {
  const [isUpdating, setIsUpdating] = useState(false);

  const handleUpdate = async (newAward: string) => {
    if (newAward === "Best Delegate" && bestDelegateExists && currentAward !== "Best Delegate") {
      alert("Only 1 Best Delegate allowed per committee");
      return;
    }

    setIsUpdating(true);
    const { error } = await supabase
      .from("delegates")
      .update({ award: newAward })
      .eq("id", id);
    
    if (!error) {
      onUpdate(newAward);
    }
    setIsUpdating(false);
  };

  return (
    <div className="relative">
      <select
        value={currentAward}
        onChange={(e) => handleUpdate(e.target.value)}
        disabled={isUpdating}
        className={`w-full rounded border border-slate-700 bg-slate-800 p-2 text-xs font-bold transition-colors outline-none focus:border-cyan-500 disabled:opacity-50 ${
          currentAward === "Best Delegate" ? "text-emerald-400" : "text-slate-300"
        }`}
      >
        {AWARDS.map((award) => (
          <option key={award} value={award}>
            {award}
          </option>
        ))}
      </select>
    </div>
  );
}
