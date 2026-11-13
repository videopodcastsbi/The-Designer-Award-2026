"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { Search, X, ExternalLink, Info } from "lucide-react";
import { categories, showcaseGames } from "@/lib/data";
import type { Nominee } from "@/lib/types";

export default function NomineesPage() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("all");
  const [open, setOpen] = useState<Nominee | null>(null);

  // Support /nominees?category=cat-id deep links
  useEffect(() => {
    const p = new URLSearchParams(window.location.search).get("category");
    if (p && categories.some((c) => c.id === p)) setCat(p);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    return showcaseGames.filter(
      (g) =>
        (cat === "all" || g.categoryId === cat) &&
        (!q || g.title.toLowerCase().includes(q) || g.studio.toLowerCase().includes(q))
    );
  }, [query, cat]);

  return (
    <main className="min-h-screen pt-36 pb-28 bg-background">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
          <div className="lg:col-span-8 space-y-5">
            <span className="technical-tag text-electric-cyan">Nominees</span>
            <h1 className="font-display text-5xl sm:text-6xl font-bold text-white tracking-tight leading-[1.02]">
              Browse the <span className="text-metallic-headline">experiences.</span>
            </h1>
          </div>
          <div className="lg:col-span-4 flex gap-3 p-4 rounded-lg border border-electric/30 bg-electric/5 text-xs text-metallic leading-relaxed">
            <Info className="w-4 h-4 text-electric shrink-0 mt-0.5" />
            <p>
              Official nominees have not been announced yet. The experiences below are a showcase of popular Roblox games
              and will be replaced by the official list.
            </p>
          </div>
        </div>

        {/* Controls */}
        <div className="sticky top-20 z-30 -mx-4 px-4 sm:mx-0 sm:px-0 py-4 bg-background/85 backdrop-blur-xl border-b border-surface-border mb-10">
          <div className="flex flex-col lg:flex-row gap-4 lg:items-center">
            <label className="relative lg:w-80 shrink-0">
              <span className="sr-only">Search by game title or studio</span>
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-metallic-muted" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search game or studio…"
                className="w-full pl-10 pr-9 py-2.5 rounded-md bg-surface border border-surface-border text-sm text-white placeholder:text-metallic-muted/60 focus:outline-none focus:border-electric"
              />
              {query && (
                <button onClick={() => setQuery("")} aria-label="Clear search" className="absolute right-3 top-1/2 -translate-y-1/2 text-metallic-muted hover:text-white">
                  <X className="w-4 h-4" />
                </button>
              )}
            </label>
            <div className="flex gap-2 overflow-x-auto pb-1 lg:pb-0 [scrollbar-width:none]">
              {[{ id: "all", title: "All" }, ...categories].map((c) => (
                <button
                  key={c.id}
                  onClick={() => setCat(c.id)}
                  className={`px-3.5 py-2 rounded-md text-xs font-mono uppercase tracking-wider whitespace-nowrap border transition-colors ${
                    cat === c.id
                      ? "bg-electric border-electric text-white"
                      : "border-surface-border text-metallic-muted hover:text-white hover:border-metallic-muted"
                  }`}
                >
                  {c.title}
                </button>
              ))}
            </div>
            <span className="lg:ml-auto font-mono text-xs text-metallic-muted whitespace-nowrap">{list.length} results</span>
          </div>
        </div>

        {/* Grid */}
        {list.length ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
            {list.map((g) => (
              <button key={g.id} onClick={() => setOpen(g)} className="group text-left">
                <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10">
                  <Image src={g.thumbnail} alt={g.title} fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="absolute top-3 left-3 font-mono text-[10px] uppercase tracking-wider px-2 py-1 rounded bg-black/70 backdrop-blur text-metallic border border-white/10">
                    {g.status}
                  </span>
                </div>
                <div className="mt-4 flex gap-3">
                  <span className="relative w-11 h-11 rounded-lg overflow-hidden border border-white/10 shrink-0">
                    <Image src={g.icon} alt="" fill sizes="44px" className="object-cover" />
                  </span>
                  <div className="min-w-0">
                    <h2 className="font-display text-lg font-bold text-white group-hover:text-electric-bright transition-colors truncate">{g.title}</h2>
                    <p className="font-mono text-[11px] text-metallic-muted truncate">
                      {g.studio} · <span className="text-electric-cyan">{g.categoryTitle}</span>
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        ) : (
          <div className="py-24 text-center">
            <p className="font-display text-2xl text-white">No experiences match.</p>
            <button onClick={() => { setQuery(""); setCat("all"); }} className="mt-4 font-mono text-xs uppercase tracking-widest text-electric link-underline">
              Reset filters
            </button>
          </div>
        )}
      </section>

      {/* Detail modal */}
      {open && (
        <div role="dialog" aria-modal="true" aria-label={open.title} className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn" onClick={() => setOpen(null)}>
          <div className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-t-2xl sm:rounded-2xl bg-surface border border-surface-border" onClick={(e) => e.stopPropagation()}>
            <div className="relative aspect-video">
              <Image src={open.thumbnail} alt={open.title} fill sizes="768px" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
              <button onClick={() => setOpen(null)} aria-label="Close" className="absolute top-4 right-4 p-2 rounded-full bg-black/70 text-white hover:bg-black">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6 sm:p-8 -mt-16 relative">
              <div className="flex items-end gap-4">
                <span className="relative w-20 h-20 rounded-2xl overflow-hidden border-4 border-surface shrink-0">
                  <Image src={open.icon} alt="" fill sizes="80px" className="object-cover" />
                </span>
                <div className="pb-1">
                  <p className="font-mono text-[11px] uppercase tracking-widest text-electric-cyan">{open.categoryTitle}</p>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">{open.title}</h2>
                </div>
              </div>
              <dl className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 border-y border-surface-border py-4">
                <div><dt className="font-mono text-[10px] uppercase text-metallic-muted">Developer</dt><dd className="text-sm text-white">{open.studio}</dd></div>
                <div><dt className="font-mono text-[10px] uppercase text-metallic-muted">Genre</dt><dd className="text-sm text-white">{open.genre}</dd></div>
                <div><dt className="font-mono text-[10px] uppercase text-metallic-muted">Status</dt><dd className="text-sm text-white">{open.status}</dd></div>
              </dl>
              <p className="mt-6 text-metallic leading-relaxed">{open.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {open.tags.map((t) => (
                  <span key={t} className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 rounded border border-surface-border text-metallic-muted">{t}</span>
                ))}
              </div>
              <a href={open.robloxUrl} target="_blank" rel="noreferrer" className="btn-primary-blue mt-8 inline-flex items-center gap-2 px-6 py-3.5 rounded-md font-mono text-xs uppercase tracking-widest font-bold">
                Play on Roblox <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
