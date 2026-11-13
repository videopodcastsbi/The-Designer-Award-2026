import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { showcaseGames } from "@/lib/data";
import type { Nominee } from "@/lib/types";

const order = ["blox-fruits", "doors", "dress-to-impress", "rivals", "welcome-to-bloxburg", "grow-a-garden", "volleyball-legends"];

const Tile: React.FC<{ g: Nominee; big?: boolean; className?: string }> = ({ g, big, className = "" }) => (
  <a
    href={g.robloxUrl}
    target="_blank"
    rel="noreferrer"
    className={`group relative block overflow-hidden rounded-xl border border-white/10 bg-surface ${className}`}
  >
    <Image
      src={g.thumbnail}
      alt={g.title}
      fill
      sizes={big ? "(min-width:1024px) 50vw, 100vw" : "(min-width:1024px) 25vw, 50vw"}
      className="object-cover transition-transform duration-700 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
    <div className="absolute top-3 left-3">
      <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 rounded bg-black/70 backdrop-blur text-metallic border border-white/10">
        {g.categoryTitle}
      </span>
    </div>
    <div className={`absolute bottom-0 inset-x-0 ${big ? "p-6 sm:p-8" : "p-4"}`}>
      <h3 className={`font-display font-bold text-white ${big ? "text-2xl sm:text-4xl" : "text-base sm:text-lg"}`}>{g.title}</h3>
      <p className="font-mono text-[11px] text-metallic-muted mt-1">by {g.studio}</p>
      {big && <p className="mt-3 text-sm text-metallic max-w-md leading-relaxed hidden sm:block">{g.description}</p>}
    </div>
    <ExternalLink className="absolute top-3 right-3 w-4 h-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
  </a>
);

export const FeaturedGames: React.FC = () => {
  const games = order.map((s) => showcaseGames.find((g) => g.slug === s)).filter(Boolean) as Nominee[];
  const [hero, ...rest] = games;

  return (
    <section className="relative py-28 lg:py-36 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-5">
            <span className="technical-tag text-electric-cyan">03 — Showcase</span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight">
              Experiences players <span className="text-metallic-headline">can&apos;t put down.</span>
            </h2>
            <p className="text-metallic-muted max-w-xl leading-relaxed">
              A look at popular Roblox experiences across our categories. This is a showcase, not the official lineup —
              nominations will be announced by the organising team.
            </p>
          </div>
          <Link href="/nominees" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-white link-underline pb-1 self-start md:self-auto">
            Browse all <ArrowUpRight className="w-3.5 h-3.5 text-electric" />
          </Link>
        </div>

        {/* Bento */}
        <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[160px] sm:auto-rows-[200px] gap-4">
          {hero && <Tile g={hero} big className="col-span-2 row-span-2" />}
          {rest.map((g, i) => (
            <Tile key={g.id} g={g} className={i === 0 || i === rest.length - 1 ? "col-span-2" : ""} />
          ))}
        </div>
      </div>
    </section>
  );
};
