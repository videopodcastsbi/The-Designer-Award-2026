import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, UserRound, Sparkles, CheckCircle2 } from "lucide-react";
import { teamMembers } from "@/lib/data";

export const metadata = {
  title: "Organizing Team",
  description: "The people behind The Designer Awards 2026.",
};

export default function TeamPage() {
  return (
    <main className="min-h-screen pt-36 pb-28 bg-background">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-5 mb-16">
          <span className="technical-tag text-electric-cyan">Organizing Team</span>
          <h1 className="font-display text-5xl sm:text-6xl font-bold text-white tracking-tight leading-[1.02]">
            The people <span className="text-metallic-headline">behind the awards.</span>
          </h1>
          <p className="text-metallic-muted leading-relaxed">
            Meet the dedicated event organizers and Roblox Creator Event Program team members bringing The Designer Awards 2026 to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
          {teamMembers.map((m, i) => {
            const hasAvatar = Boolean(m.avatar);
            const badgeText = m.role.toLowerCase().includes("co-host") ? "Co-Host" : "Organizer";
            return (
              <article
                key={m.id}
                className={`group relative rounded-xl border p-6 flex flex-col transition-all duration-300 ${
                  hasAvatar
                    ? "bg-surface/70 border-electric/40 shadow-[0_0_30px_rgba(7,91,255,0.12)] hover:border-electric-cyan/70 hover:shadow-[0_0_40px_rgba(7,91,255,0.25)]"
                    : "bg-surface/30 border-surface-border hover:border-surface-border/80"
                }`}
              >
                <div className="relative aspect-[4/5] rounded-lg bg-surface border border-surface-border flex items-center justify-center overflow-hidden mb-5">
                  {hasAvatar ? (
                    <>
                      <Image
                        src={m.avatar!}
                        alt={m.name}
                        fill
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-60" />
                      <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded-full bg-electric/80 backdrop-blur-md border border-electric-cyan/40 text-[9px] font-mono uppercase tracking-wider text-white">
                        <Sparkles className="w-2.5 h-2.5 text-electric-cyan" />
                        {badgeText}
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-br from-electric/10 via-transparent to-transparent" />
                      <UserRound className="w-16 h-16 text-metallic-muted/30" />
                    </>
                  )}
                  <span className="absolute top-3 left-3 font-mono text-[10px] text-metallic-muted/80 bg-background/60 backdrop-blur-sm px-1.5 py-0.5 rounded">
                    0{i + 1}
                  </span>
                </div>

                <div className="flex-1 flex flex-col">
                  <div className="flex items-center gap-1.5">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-electric-cyan">
                      {m.department}
                    </p>
                  </div>
                  <div className="mt-1 flex items-center gap-2">
                    <h2 className="font-display text-xl font-bold text-white group-hover:text-electric-cyan transition-colors">
                      {m.name}
                    </h2>
                    {hasAvatar && (
                      <CheckCircle2 className="w-4 h-4 text-electric-cyan shrink-0" aria-label="Verified Organizer" />
                    )}
                  </div>
                  <p className="text-xs font-medium text-metallic mt-0.5">{m.role}</p>
                  <p className="mt-3 text-xs text-metallic-muted leading-relaxed flex-1">{m.bio}</p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-16 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-surface-border pt-10">
          <div>
            <h3 className="font-display text-lg font-bold text-white">Connect with the Committee</h3>
            <p className="text-metallic-muted text-sm mt-1">Want to get in touch with the organising team or discuss event partnerships?</p>
          </div>
          <Link
            href="/contact"
            className="btn-primary-blue inline-flex items-center gap-2 px-6 py-3.5 rounded-md font-mono text-xs uppercase tracking-widest font-bold self-start"
          >
            Contact us <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
