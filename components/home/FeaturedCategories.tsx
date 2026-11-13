"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { categories, showcaseGames } from "@/lib/data";

export const FeaturedCategories: React.FC = () => {
  const [active, setActive] = useState(0);
  const cat = categories[active];
  const games = showcaseGames.filter((g) => g.categoryId === cat.id);

  return (
    <section className="relative py-28 lg:py-36 bg-surface/40 border-y border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-5">
            <span className="technical-tag text-electric-cyan">02 — Categories</span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight">
              Eight ways to <span className="text-metallic-headline">be recognised.</span>
            </h2>
          </div>
          <Link href="/categories" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-white link-underline pb-1 self-start md:self-auto">
            All categories <ArrowUpRight className="w-3.5 h-3.5 text-electric" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Index list */}
          <ol className="lg:col-span-5 divide-y divide-surface-border border-y border-surface-border">
            {categories.map((c, i) => {
              const on = i === active;
              return (
                <li key={c.id}>
                  <button
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className="w-full text-left py-5 flex items-center gap-5 group"
                    aria-pressed={on}
                  >
                    <span className={`font-mono text-xs w-6 ${on ? "text-electric" : "text-metallic-muted/50"}`}>{c.badge}</span>
                    <span className={`font-display text-xl sm:text-2xl font-bold transition-all duration-300 ${on ? "text-white translate-x-1" : "text-metallic-muted group-hover:text-metallic"}`}>
                      {c.title}
                    </span>
                    <span className={`ml-auto h-px transition-all duration-300 ${on ? "w-12 bg-electric" : "w-0 bg-transparent"}`} />
                  </button>
                </li>
              );
            })}
          </ol>

          {/* Spotlight */}
          <div className="lg:col-span-7">
            <div className="lg:sticky lg:top-28">
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                {categories.map((c, i) => (
                  <Image
                    key={c.id}
                    src={c.featuredVisual}
                    alt={c.title}
                    fill
                    sizes="(min-width:1024px) 55vw, 100vw"
                    className={`object-cover transition-all duration-700 ${i === active ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8">
                  <p className="font-mono text-[11px] uppercase tracking-widest text-electric-cyan">{cat.tagline}</p>
                  <h3 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-white">{cat.title}</h3>
                  <p className="mt-3 text-sm sm:text-base text-metallic max-w-lg leading-relaxed">{cat.shortDescription}</p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-3">
                    {games.slice(0, 4).map((g) => (
                      <span key={g.id} className="relative w-10 h-10 rounded-lg overflow-hidden border-2 border-background">
                        <Image src={g.icon} alt={g.title} fill sizes="40px" className="object-cover" />
                      </span>
                    ))}
                  </div>
                  <span className="font-mono text-[11px] text-metallic-muted">
                    {games.length} showcase {games.length === 1 ? "experience" : "experiences"}
                  </span>
                </div>
                <Link
                  href={`/categories/${cat.slug}`}
                  className="btn-primary-blue inline-flex items-center gap-2 px-5 py-3 rounded-md font-mono text-xs uppercase tracking-widest font-bold"
                >
                  View category <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
