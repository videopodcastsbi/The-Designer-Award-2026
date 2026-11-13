import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Lock } from "lucide-react";
import { categories, showcaseGames } from "@/lib/data";

export const metadata = {
  title: "Official Lineup",
  description: "The official lineup of The Designer Awards 2026.",
};

// Set to true and fill `lineup` when the official selection is published.
const LINEUP_PUBLISHED = false;

export default function LineupPage() {
  return (
    <main className="min-h-screen pt-36 pb-28 bg-background">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8 space-y-5">
            <span className="technical-tag text-electric-cyan">Official Lineup</span>
            <h1 className="font-display text-5xl sm:text-7xl font-bold text-white tracking-tight leading-[0.98]">
              The lineup <br />
              <span className="text-metallic-headline">is coming.</span>
            </h1>
          </div>
          <p className="lg:col-span-4 text-metallic-muted leading-relaxed">
            {LINEUP_PUBLISHED
              ? "The officially selected experiences for The Designer Awards 2026."
              : "The official selection has not been announced. When it is, every selected experience will appear here, organised by category."}
          </p>
        </div>

        <div className="space-y-4">
          {categories.map((c) => {
            const preview = showcaseGames.filter((g) => g.categoryId === c.id).slice(0, 3);
            return (
              <article key={c.id} className="group grid grid-cols-1 md:grid-cols-12 gap-6 items-center rounded-xl border border-surface-border bg-surface/40 p-5 sm:p-6 hover:border-electric/40 transition-colors">
                <div className="md:col-span-4 flex items-center gap-5">
                  <span className="font-mono text-sm text-electric">{c.badge}</span>
                  <div>
                    <h2 className="font-display text-2xl font-bold text-white">{c.title}</h2>
                    <p className="font-mono text-[11px] text-metallic-muted">{c.tagline}</p>
                  </div>
                </div>
                <div className="md:col-span-6 grid grid-cols-3 gap-3">
                  {preview.map((g) => (
                    <div key={g.id} className="relative aspect-video rounded-md overflow-hidden border border-white/10">
                      <Image src={g.thumbnail} alt="" fill sizes="200px" className="object-cover grayscale opacity-30 group-hover:opacity-50 transition-opacity" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Lock className="w-4 h-4 text-metallic/70" />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="md:col-span-2 md:text-right">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-metallic-muted">To be announced</span>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-16 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-surface-border pt-10">
          <p className="text-metallic-muted max-w-lg">In the meantime, explore popular experiences across every category.</p>
          <Link href="/nominees" className="btn-primary-blue inline-flex items-center gap-2 px-6 py-3.5 rounded-md font-mono text-xs uppercase tracking-widest font-bold self-start">
            Browse the showcase <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
