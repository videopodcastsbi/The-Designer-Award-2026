import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle, ExternalLink, Gamepad2, Sparkles } from "lucide-react";
import { categories, placeholderNominees } from "@/lib/data";

export const metadata = {
  title: "Award Categories",
  description:
    "Explore the eight official honor categories of The Designer Awards 2026.",
};

export default function CategoriesPage() {
  return (
    <main className="min-h-screen pt-32 pb-28 bg-background">
      {/* Page Header */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="hero-spotlight" />
        <div className="max-w-3xl space-y-4">
          <div className="badge-pill">
            <span className="w-1.5 h-1.5 rounded-full bg-electric-cyan" />
            <span>Honors Taxonomy</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight font-display">
            The Eight <br />
            <span className="text-chrome">Award Categories</span>
          </h1>
          <p className="text-lg text-metallic-muted leading-relaxed">
            From tactical engine physics to immersive digital boutiques, explore the eight foundational disciplines celebrated at The Designer Awards 2026.
          </p>
        </div>
      </section>

      {/* Category Deep Dives - Varied Editorial Treatments */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {categories.map((cat, idx) => {
          const associatedNominees = placeholderNominees.filter(
            (n) => n.categoryId === cat.id
          );
          const isEven = idx % 2 === 0;

          return (
            <article
              key={cat.id}
              id={cat.slug}
              className="scroll-mt-32 p-8 sm:p-12 rounded-3xl crystalline-border relative overflow-hidden"
            >
              {/* Subtle background accent glow */}
              <div
                className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[140px] pointer-events-none opacity-25"
                style={{ backgroundColor: cat.accent }}
              />

              <div
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center ${
                  !isEven ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Visual Imagery Box (5 cols) */}
                <div className={`lg:col-span-5 ${!isEven ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden border border-surface-border shadow-2xl">
                    <Image
                      src={cat.featuredVisual}
                      alt={cat.title}
                      fill
                      className="object-cover transition-transform duration-750 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-card via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="badge-pill bg-black/80 backdrop-blur-md border-surface-border text-electric-cyan font-bold">
                        {cat.badge}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content & Criteria (7 cols) */}
                <div className={`lg:col-span-7 space-y-6 ${!isEven ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs uppercase tracking-widest text-electric-cyan font-bold">
                        Category 0{idx + 1}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-metallic-muted" />
                      <span className="font-mono text-xs text-metallic-muted">
                        {cat.tagline}
                      </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white">
                      {cat.title}
                    </h2>
                  </div>

                  <p className="text-base text-metallic-muted leading-relaxed">
                    {cat.fullDescription}
                  </p>

                  {/* Evaluation Criteria Checklist */}
                  <div className="space-y-3 pt-2">
                    <h3 className="font-mono text-xs uppercase tracking-wider text-metallic font-semibold">
                      Curatorial Criteria & Evaluation:
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {cat.criteria.map((criterion, cIdx) => (
                        <div key={cIdx} className="flex items-start gap-2.5 text-xs text-metallic-muted">
                          <CheckCircle className="w-4 h-4 text-electric shrink-0 mt-0.5" />
                          <span>{criterion}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Curated Candidates Section */}
                  <div className="pt-6 border-t border-surface-border/80">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-xs text-metallic font-bold uppercase tracking-wider">
                        Initial Showcase Candidates ({associatedNominees.length})
                      </span>
                      <Link
                        href={`/categories/${cat.slug}`}
                        className="text-xs font-mono text-electric hover:text-electric-bright font-bold inline-flex items-center gap-1"
                      >
                        <span>Full Category Dossier</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {associatedNominees.length > 0 ? (
                        associatedNominees.map((game) => (
                          <div
                            key={game.id}
                            className="p-3.5 rounded-2xl border border-surface-border bg-surface-elevated/70 flex items-center justify-between gap-3 hover:border-electric/40 transition-colors"
                          >
                            <div className="flex items-center gap-2.5 min-w-0">
                              <Gamepad2 className="w-4 h-4 text-electric shrink-0" />
                              <div className="truncate">
                                <p className="text-xs font-bold text-white truncate font-display">{game.title}</p>
                                <p className="text-[10px] text-metallic-muted truncate">Studio: {game.studio}</p>
                              </div>
                            </div>
                            <a
                              href={game.robloxUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="text-metallic-muted hover:text-white p-1"
                              title="Visit Roblox Experience"
                            >
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          </div>
                        ))
                      ) : (
                        <div className="col-span-2 p-3 rounded-xl border border-dashed border-surface-border bg-surface/30 text-center font-mono text-xs text-metallic-muted">
                          Submissions currently under evaluation by the awards committee.
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}
