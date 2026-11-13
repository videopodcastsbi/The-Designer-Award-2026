import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Compass, Eye, HeartHandshake, Shield, Sparkles, Award } from "lucide-react";

export const metadata = {
  title: "About The Event",
  description:
    "The vision, mission, and community philosophy driving The Designer Awards 2026.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-32 pb-28 bg-background">
      {/* Editorial Header */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="hero-spotlight" />
        <div className="space-y-4 max-w-3xl">
          <div className="badge-pill">
            <span className="w-1.5 h-1.5 rounded-full bg-electric-cyan" />
            <span>Honors Philosophy</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight font-display">
            The Purpose of <br />
            <span className="text-chrome">The Designer Awards</span>
          </h1>
          <p className="text-lg sm:text-xl text-metallic leading-relaxed">
            Every day, tens of millions of people step into worlds constructed line by line, vertex by vertex, by extraordinary digital creators. We are here to ensure their genius is acknowledged.
          </p>
        </div>
      </section>

      {/* Narrative Section: Vision & Mission */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-8">
            <div className="p-8 rounded-3xl crystalline-border space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-electric/15 text-electric border border-electric/30">
                  <Eye className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold text-white font-display">Our Vision</h2>
              </div>
              <p className="text-sm sm:text-base text-metallic-muted leading-relaxed">
                To build an enduring, globally recognized awards institution for the Roblox ecosystem—one that champions visionary craft, elevates technical benchmarks, and establishes a prestigious standard of distinction for developers worldwide.
              </p>
            </div>

            <div className="p-8 rounded-3xl crystalline-border space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-electric-bright/15 text-electric-bright border border-electric-bright/30">
                  <Compass className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold text-white font-display">Our Mission</h2>
              </div>
              <p className="text-sm sm:text-base text-metallic-muted leading-relaxed">
                We celebrate the human minds and collaborative teams who turn abstract ideas into living virtual universes. We reward audacious game design, groundbreaking mechanics, narrative resonance, and the relentless devotion required to nurture genuine player communities.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 relative h-[480px] rounded-3xl overflow-hidden border border-surface-border shadow-2xl">
            <Image
              src="/games/welcome-to-bloxburg.png"
              alt="Welcome to Bloxburg on Roblox"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-card via-surface-card/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/70 backdrop-blur-md border border-surface-border">
              <span className="font-mono text-xs text-electric-cyan uppercase tracking-wider block font-bold">Artistry in Code</span>
              <p className="text-xs text-metallic-muted mt-1">Honoring the multidisciplinary teams behind modern interactive experiences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Pillar: Why Recognition Matters */}
      <section className="relative py-24 bg-surface/40 border-t border-b border-surface-border mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="font-mono text-xs uppercase tracking-widest text-electric-cyan font-semibold">The Philosophy</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-4 font-display">
              Why Recognition Matters
            </h2>
            <p className="text-base text-metallic-muted leading-relaxed">
              In traditional entertainment, architects, cinematographers, and directors are immortalized for their contributions to human culture. Interactive 3D creation is the defining medium of this era.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl crystalline-border space-y-4">
              <Sparkles className="w-6 h-6 text-electric" />
              <h3 className="text-xl font-bold text-white font-display">Celebrating Creativity</h3>
              <p className="text-sm text-metallic-muted leading-relaxed">
                Creative risks define breakthroughs. We spotlight creators who dare to design unconventional gameplay loops, experimental art styles, and deeply original lore rather than chasing carbon-copy trends.
              </p>
            </div>

            <div className="p-8 rounded-3xl crystalline-border space-y-4">
              <HeartHandshake className="w-6 h-6 text-electric-bright" />
              <h3 className="text-xl font-bold text-white font-display">Supporting Creators</h3>
              <p className="text-sm text-metallic-muted leading-relaxed">
                Developing games at scale is a monumental undertaking. By providing an uncompromised honors platform, we empower developers to present their achievements with pride to peers, players, and the wider tech industry.
              </p>
            </div>

            <div className="p-8 rounded-3xl crystalline-border space-y-4">
              <Shield className="w-6 h-6 text-metallic-light" />
              <h3 className="text-xl font-bold text-white font-display">Community Stewardship</h3>
              <p className="text-sm text-metallic-muted leading-relaxed">
                Roblox experiences thrive on shared player cultures. We honor teams who cultivate safe, welcoming, and vibrant spaces where players build lifelong friendships and memories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Explore Disciplines */}
      <section className="max-w-4xl mx-auto px-4 text-center">
        <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">
          Discover How We Evaluate Distinction
        </h3>
        <p className="text-sm sm:text-base text-metallic-muted mb-8 max-w-xl mx-auto">
          Explore the eight official categories and learn what curatorial criteria our committee analyzes.
        </p>
        <Link
          href="/categories"
          className="btn-electric inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-mono text-xs uppercase tracking-widest font-bold"
        >
          <span>Browse Award Categories</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </section>
    </main>
  );
}
