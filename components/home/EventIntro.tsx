import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { showcaseGames } from "@/lib/data";

export const EventIntro: React.FC = () => {
  const pick = (slug: string) => showcaseGames.find((g) => g.slug === slug) ?? showcaseGames[0];
  const a = pick("welcome-to-bloxburg");
  const b = pick("doors");
  const c = pick("adopt-me");

  return (
    <section id="manifesto" className="relative py-28 lg:py-36 bg-background scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10 items-center">
        {/* Editorial text */}
        <div className="lg:col-span-5 space-y-8">
          <span className="technical-tag text-electric-cyan">01 — The Manifesto</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white leading-[1.05] tracking-tight">
            Every great experience <br />
            <span className="text-metallic-headline">has a maker.</span>
          </h2>
          <div className="space-y-5 text-metallic-muted leading-relaxed max-w-md">
            <p>
              Behind every world millions of players log into, there is someone who sketched it, scripted it,
              lit it and tested it until it felt right.
            </p>
            <p>
              The Designer Awards exists to put those people in the spotlight — the solo developers, the studios
              and the teams whose work brings communities together.
            </p>
          </div>

          <ul className="grid grid-cols-2 gap-x-6 gap-y-4 pt-2 max-w-md">
            {["Creativity", "Innovation", "Developer recognition", "Community"].map((t, i) => (
              <li key={t} className="flex items-baseline gap-3 border-t border-surface-border pt-3">
                <span className="font-mono text-[10px] text-electric">0{i + 1}</span>
                <span className="text-sm font-semibold text-white">{t}</span>
              </li>
            ))}
          </ul>

          <Link href="/about" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-white link-underline pb-1">
            Read our vision <ArrowRight className="w-3.5 h-3.5 text-electric" />
          </Link>
        </div>

        {/* Overlapping image composition */}
        <div className="lg:col-span-7 relative h-[440px] sm:h-[520px]">
          <figure className="absolute top-0 right-0 w-[78%] aspect-video rounded-xl overflow-hidden border border-white/10 shadow-2xl">
            <Image src={a.thumbnail} alt={a.title} fill sizes="(min-width:1024px) 45vw, 80vw" className="object-cover" />
            <figcaption className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/85 to-transparent font-mono text-[11px] text-metallic">
              {a.title} · <span className="text-metallic-muted">{a.studio}</span>
            </figcaption>
          </figure>
          <figure className="absolute bottom-0 left-0 w-[58%] aspect-video rounded-xl overflow-hidden border border-white/10 shadow-2xl ring-8 ring-background">
            <Image src={b.thumbnail} alt={b.title} fill sizes="(min-width:1024px) 35vw, 60vw" className="object-cover" />
            <figcaption className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/85 to-transparent font-mono text-[11px] text-metallic">
              {b.title} · <span className="text-metallic-muted">{b.studio}</span>
            </figcaption>
          </figure>
          <figure className="absolute bottom-10 right-6 w-[30%] aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-2xl ring-8 ring-background hidden sm:block">
            <Image src={c.icon} alt={c.title} fill sizes="200px" className="object-cover" />
          </figure>
          <div className="absolute -z-10 top-1/3 left-1/4 w-80 h-80 bg-electric/25 blur-[120px] rounded-full" />
        </div>
      </div>
    </section>
  );
};
