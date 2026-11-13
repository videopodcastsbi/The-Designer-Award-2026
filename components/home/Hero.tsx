import React from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { GameWall } from "../ui/GameWall";
import { showcaseGames, categories } from "@/lib/data";

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[100svh] flex flex-col overflow-hidden bg-background">
      {/* Real game artwork wall */}
      <GameWall className="opacity-60" />

      {/* Cinematic grading: darken left for text, vignette, electric wash */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/30 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/70 pointer-events-none" />
      <div className="absolute -left-40 top-1/3 w-[700px] h-[500px] bg-electric/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 flex-1 flex items-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12">
        <div className="max-w-2xl animate-fade-up">
          {/* Official logo — primary visual centerpiece */}
          <img
            src="/assets/the-designer-awards-logo.png"
            alt="The Designer Awards"
            className="w-full max-w-[520px] h-auto -ml-3 mb-6 drop-shadow-[0_20px_50px_rgba(7,91,255,0.45)]"
          />

          <p className="font-mono text-xs uppercase tracking-[0.3em] text-electric-cyan mb-4">
            Edition 2026 · Roblox Creator Honours
          </p>

          <h1 className="sr-only">The Designer Awards 2026</h1>

          <p className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.08] tracking-tight">
            Celebrating the Creators <br className="hidden sm:block" />
            Behind the <span className="text-electric-bright">Experiences.</span>
          </p>

          <p className="mt-6 text-base sm:text-lg text-metallic-muted max-w-xl leading-relaxed">
            Recognizing the creativity, innovation, and dedication behind the Roblox experiences that bring communities together.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/categories"
              className="btn-primary-blue inline-flex items-center gap-2.5 px-7 py-4 rounded-md font-mono text-xs uppercase tracking-widest font-bold"
            >
              Explore the Awards
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/about"
              className="btn-secondary-outline inline-flex items-center gap-2.5 px-7 py-4 rounded-md font-mono text-xs uppercase tracking-widest"
            >
              Discover the Event
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom datum bar */}
      <div className="relative z-10 border-t border-white/10 bg-background/60 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-wrap items-center justify-between gap-6">
          <dl className="flex flex-wrap gap-x-10 gap-y-3">
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-wider text-metallic-muted">Categories</dt>
              <dd className="font-display text-lg font-bold text-white">{String(categories.length).padStart(2, "0")}</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-wider text-metallic-muted">Experiences in showcase</dt>
              <dd className="font-display text-lg font-bold text-white">{showcaseGames.length}</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-wider text-metallic-muted">Official lineup</dt>
              <dd className="font-display text-lg font-bold text-electric-cyan">To be announced</dd>
            </div>
          </dl>
          <a href="#manifesto" className="hidden md:inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-metallic-muted hover:text-white transition-colors">
            Scroll <ArrowDown className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
