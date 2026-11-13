import React from "react";
import Image from "next/image";
import { showcaseGames } from "@/lib/data";

/** Horizontal marquee of real game icons + names. */
export const IconMarquee: React.FC = () => {
  const items = [...showcaseGames, ...showcaseGames];
  return (
    <section aria-label="Experiences in the showcase" className="relative border-y border-surface-border bg-surface/60 py-6 overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      <div className="flex w-max gap-10 animate-marquee-x">
        {items.map((g, i) => (
          <a
            key={`${g.id}-${i}`}
            href={g.robloxUrl}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-3 shrink-0"
            tabIndex={i >= showcaseGames.length ? -1 : 0}
          >
            <span className="relative w-11 h-11 rounded-xl overflow-hidden border border-white/10 group-hover:border-electric transition-colors">
              <Image src={g.icon} alt="" fill sizes="44px" className="object-cover" />
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-semibold text-metallic group-hover:text-white transition-colors whitespace-nowrap">
                {g.title}
              </span>
              <span className="block font-mono text-[10px] uppercase tracking-wider text-metallic-muted whitespace-nowrap">
                {g.studio}
              </span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};

