import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { eventConfig } from "@/lib/data";
import { GameWall } from "../ui/GameWall";

export const ClosingSection: React.FC = () => {
  return (
    <section className="relative py-36 lg:py-44 overflow-hidden border-t border-surface-border">
      <GameWall className="opacity-25 blur-[2px]" />
      <div className="absolute inset-0 bg-background/80 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-electric/20 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <img
          src="/assets/the-designer-awards-logo.png"
          alt=""
          aria-hidden
          className="w-40 sm:w-52 h-auto mx-auto mb-10 opacity-90 drop-shadow-[0_10px_30px_rgba(7,91,255,0.5)]"
        />
        <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.03] tracking-tight">
          {eventConfig.closingQuote.replace("Recognition.", "")}
          <span className="text-electric-bright">Recognition.</span>
        </h2>
        <div className="mt-12">
          <Link
            href="/categories"
            className="btn-primary-blue inline-flex items-center gap-2.5 px-8 py-4 rounded-md font-mono text-xs uppercase tracking-widest font-bold"
          >
            Explore The Awards <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
