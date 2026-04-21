"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/executive-board", label: "Executive Board" },
  { href: "/committees", label: "Committees" },
  { href: "/secretariat", label: "Secretariat" },
  { href: "/code-of-conduct", label: "Rules" },
  { href: "/brochure", label: "Brochure" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/#about") {
      return pathname === "/";
    }
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href.replace("/#", "/"));
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-gradient-to-b from-slate-950/90 via-slate-950/70 to-slate-950/40 backdrop-blur-lg">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-full border border-cyan-400/70 bg-slate-900 shadow-md shadow-cyan-500/25">
            <Image
              src="/CMSMUN.jpeg"
              alt="CMSMUN 2026 emblem"
              fill
              className="object-cover"
              priority
            />
          </div>
          <span className="sr-only">CMSMUN 2026 – City Montessori School, Aliganj Campus I</span>
        </Link>

        <button
          className="inline-flex items-center justify-center rounded-md border border-white/10 bg-slate-900/60 p-2 text-slate-100 hover:border-cyan-400/70 hover:text-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <div className="hidden items-center gap-6 md:flex">
          <div className="flex items-center gap-5 rounded-full border border-white/10 bg-slate-950/70 px-5 py-2 text-[10px] font-medium uppercase tracking-[0.22em] text-slate-200 shadow-sm shadow-slate-900/70">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative whitespace-nowrap pb-1 transition-colors hover:text-cyan-300 ${
                  isActive(link.href)
                    ? "text-cyan-300"
                    : "text-slate-200/75"
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute inset-x-0 -bottom-1 h-[2px] rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(34,211,238,0.6)]" />
                )}
              </Link>
            ))}
          </div>
          <div className="flex gap-3">
            <Link
              href="/portal"
              className="hidden items-center justify-center rounded-full border border-indigo-400/50 bg-indigo-900/40 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-indigo-300 shadow-md transition hover:bg-indigo-900/80 lg:inline-flex"
            >
              Portals
            </Link>
            <Link
              href="/registration"
              className="hidden items-center justify-center rounded-full bg-cyan-300 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-900 shadow-md shadow-cyan-500/40 transition hover:bg-cyan-200 lg:inline-flex"
            >
              Register
            </Link>
          </div>
        </div>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-slate-950/95 px-4 pb-6 pt-2 md:hidden">
          <div className="flex flex-col space-y-3 text-xs font-medium uppercase tracking-[0.2em] text-slate-100">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-md px-1 py-2 transition-colors hover:bg-slate-800/80 hover:text-cyan-300 ${
                  isActive(link.href)
                    ? "bg-slate-900/80 text-cyan-300"
                    : "text-slate-200/85"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-2 border-t border-white/10 pt-3">
              <Link
                href="/portal"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center rounded-full border border-indigo-400/50 bg-indigo-900/40 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-indigo-300 shadow-md transition hover:bg-indigo-900/80"
              >
                Portals
              </Link>
              <Link
                href="/registration"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center rounded-full bg-cyan-300 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-900 shadow-md shadow-cyan-500/40 transition hover:bg-cyan-200"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}


