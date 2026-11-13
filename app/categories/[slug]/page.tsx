import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle, ExternalLink, Gamepad2, Sparkles } from "lucide-react";
import { categories, placeholderNominees } from "@/lib/data";

interface Props {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return categories.map((cat) => ({
    slug: cat.slug,
  }));
}

export function generateMetadata({ params }: Props) {
  const category = categories.find((c) => c.slug === params.slug);
  if (!category) return {};

  return {
    title: `${category.title} — Category Dossier`,
    description: category.shortDescription,
  };
}

export default function CategoryDetailPage({ params }: Props) {
  const category = categories.find((c) => c.slug === params.slug);

  if (!category) {
    notFound();
  }

  const categoryNominees = placeholderNominees.filter(
    (n) => n.categoryId === category.id
  );

  return (
    <main className="min-h-screen pt-32 pb-28 bg-background">
      {/* Background Accent */}
      <div
        className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none opacity-20"
        style={{ backgroundColor: category.accent }}
      />
      <div className="absolute inset-0 bg-subtle-grid opacity-15 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <Link
          href="/categories"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-metallic-muted hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Categories</span>
        </Link>

        {/* Category Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7 space-y-4">
            <div className="badge-pill">
              <span className="w-1.5 h-1.5 rounded-full bg-electric" />
              <span>{category.badge}</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white font-display">
              {category.title}
            </h1>
            <p className="text-xl text-metallic font-light italic font-display">
              &ldquo;{category.tagline}&rdquo;
            </p>
            <p className="text-base sm:text-lg text-metallic-muted leading-relaxed pt-2">
              {category.fullDescription}
            </p>
          </div>

          <div className="lg:col-span-5 relative h-80 rounded-2xl overflow-hidden border border-surface-border shadow-2xl">
            <Image
              src={category.featuredVisual}
              alt={category.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-card via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="font-mono text-[10px] text-electric uppercase tracking-wider block">Curatorial Track</span>
              <p className="text-xs text-white font-medium">The Designer Awards 2026 Official Discipline</p>
            </div>
          </div>
        </div>

        {/* Criteria Section */}
        <div className="p-8 sm:p-10 rounded-3xl border border-surface-border bg-surface-card mb-16 space-y-6">
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-electric" />
            <h2 className="text-xl font-bold text-white font-display">Evaluation & Scoring Framework</h2>
          </div>
          <p className="text-sm text-metallic-muted leading-relaxed max-w-3xl">
            The jury scrutinizes entries under this discipline through multiple qualitative and technical lenses to guarantee impartial, high-standard recognition.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {category.criteria.map((criterion, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border border-surface-border bg-surface-elevated/50 flex items-start gap-3"
              >
                <CheckCircle className="w-4 h-4 text-electric shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-metallic">{criterion}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Nominees in this category */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-surface-border pb-4">
            <h2 className="text-2xl font-bold text-white font-display">
              Curated Candidates ({categoryNominees.length})
            </h2>
            <Link
              href="/nominees"
              className="text-xs font-mono text-electric hover:underline inline-flex items-center gap-1"
            >
              <span>All Categories</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryNominees.map((game) => (
              <div
                key={game.id}
                className="rounded-2xl border border-surface-border bg-surface-card hover:border-electric/50 transition-all p-5 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="relative h-44 w-full rounded-xl overflow-hidden">
                    <Image
                      src={game.thumbnail}
                      alt={game.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white">{game.title}</h3>
                    <p className="text-xs font-mono text-metallic-muted">Studio: {game.studio}</p>
                    <p className="text-xs text-metallic-muted mt-2 line-clamp-2">{game.description}</p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-surface-border flex items-center justify-between">
                  <span className="font-mono text-[10px] text-metallic-muted">{game.status}</span>
                  <a
                    href={game.robloxUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-mono text-electric hover:underline"
                  >
                    <span>Roblox</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

