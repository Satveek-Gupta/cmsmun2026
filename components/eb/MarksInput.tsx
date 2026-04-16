"use client";

import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/lib/supabaseClient";

interface MarksInputProps {
  id: string;
  initialMarks: number;
  onUpdate: (newMarks: number) => void;
}

export function MarksInput({ id, initialMarks, onUpdate }: MarksInputProps) {
  const [value, setValue] = useState(initialMarks.toString());
  const [isSyncing, setIsSyncing] = useState(false);

  const updateMarks = useCallback(async (newMarks: number) => {
    setIsSyncing(true);
    const { error } = await supabase
      .from("delegates")
      .update({ marks: newMarks })
      .eq("id", id);
    
    if (!error) {
      onUpdate(newMarks);
    }
    setIsSyncing(false);
  }, [id, onUpdate]);

  useEffect(() => {
    const numericValue = parseFloat(value);
    if (!isNaN(numericValue) && numericValue !== initialMarks) {
      const timer = setTimeout(() => {
        updateMarks(numericValue);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [value, initialMarks, updateMarks]);

  return (
    <div className="relative">
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-20 rounded border border-slate-700 bg-slate-800 p-2 text-center text-sm font-bold text-cyan-300 outline-none focus:border-cyan-500"
      />
      {isSyncing && (
        <span className="absolute -right-6 top-1/2 -translate-y-1/2">
          <svg className="h-4 w-4 animate-spin text-cyan-500" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
        </span>
      )}
    </div>
  );
}
