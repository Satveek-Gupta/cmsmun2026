"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { EBLoginForm } from "@/components/eb/EBLoginForm";

export default function EBLoginPage() {
  const router = useRouter();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const session = localStorage.getItem("eb_session");
    if (session) {
      router.push("/eb-portal/dashboard");
    } else {
      setChecking(false);
    }
  }, [router]);

  if (checking) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-cyan-500 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-4 relative overflow-hidden">
      {/* Background purely for aesthetic */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-cyan-900/10 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-indigo-900/10 blur-[100px]" />
      </div>

      <div className="relative z-10 w-full flex flex-col items-center">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-black uppercase tracking-tighter text-white md:text-6xl">
            CMS<span className="text-cyan-400">MUN</span> '26
          </h1>
          <p className="mt-2 text-sm font-bold uppercase tracking-[0.5em] text-slate-500">
            Official EB Portal
          </p>
        </div>
        
        <EBLoginForm />
        
        <p className="mt-12 text-[10px] font-bold uppercase tracking-widest text-slate-600">
          Authorized Personnel Only • Secure Session Matrix
        </p>
      </div>
    </main>
  );
}
