"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginAdmin } from "@/app/admin/actions";

export function AdminLoginForm() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await loginAdmin(password);
    if (res.success) {
      router.refresh(); // Tells Next.js to re-evaluate the Server Components (passing the cookie check)
    } else {
      setError(res.error || "Login failed");
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-4">
      <form onSubmit={handleLogin} className="w-full max-w-sm space-y-4 rounded-xl bg-slate-900/50 p-8 border border-cyan-500/20 backdrop-blur-md">
        <h2 className="mb-6 text-2xl font-bold text-center text-slate-100">Admin Login</h2>
        <div className="space-y-2">
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded border border-slate-700 bg-slate-800 p-2 text-white outline-none focus:border-cyan-400"
            placeholder="Enter admin password"
          />
        </div>
        {error && <p className="text-sm text-red-500">{error}</p>}
        <button 
          type="submit" 
          disabled={loading}
          className="w-full rounded bg-cyan-500 py-2 font-bold text-slate-900 hover:bg-cyan-400 disabled:opacity-50"
        >
          {loading ? "Authenticating..." : "Login"}
        </button>
      </form>
    </div>
  );
}
