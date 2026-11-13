"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { Logo } from "../ui/Logo";
import { eventConfig, categories } from "@/lib/data";

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#05070D] border-t border-surface-border text-metallic-muted pt-20 pb-12 overflow-hidden">
      {/* Background accents */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[850px] h-[320px] bg-electric/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-stage-grid pointer-events-none opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid: Logo & Mission + Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 pb-16 border-b border-surface-border">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-6">
            <Logo variant="footer" />
            <p className="text-sm leading-relaxed text-metallic-muted max-w-sm">
              The premier honors initiative celebrating the visionaries, worldbuilders, and engineers shaping the future of interactive 3D experiences on Roblox.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={eventConfig.socials.discord}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl border border-surface-border bg-surface-elevated text-metallic hover:text-white hover:border-electric transition-colors shadow-sm text-xs font-mono group"
                title="Discord Community"
              >
                <Image
                  src="/assets/discord-logo.png"
                  alt="Discord"
                  width={18}
                  height={18}
                  className="rounded-full shrink-0 group-hover:scale-105 transition-transform"
                />
                <span>Join Discord</span>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-metallic font-bold">
              Platform
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About the Event
                </Link>
              </li>
              <li>
                <Link href="/categories" className="hover:text-white transition-colors">
                  Award Categories
                </Link>
              </li>
              <li>
                <Link href="/nominees" className="hover:text-white transition-colors">
                  Nominee Showcase
                </Link>
              </li>
              <li>
                <Link href="/lineup" className="hover:text-white transition-colors">
                  Official Lineup
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-white transition-colors">
                  Organizing Team
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories Quick Links */}
          <div className="space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-metallic font-bold">
              Disciplines
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              {categories.slice(0, 5).map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/categories/${cat.slug}`}
                    className="hover:text-white transition-colors line-clamp-1"
                  >
                    {cat.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/categories"
                  className="inline-flex items-center gap-1 text-electric-cyan hover:underline text-xs font-mono uppercase tracking-wider font-bold"
                >
                  View all 8 tracks <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Contact & Admin Access */}
          <div className="space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-metallic font-bold">
              Communications
            </h4>
            <p className="text-xs leading-relaxed text-metallic-muted">
              Official Contact:
              <br />
              <a
                href={`mailto:${eventConfig.contact.email}`}
                className="text-metallic hover:text-electric transition-colors font-mono text-[11px]"
              >
                {eventConfig.contact.email}
              </a>
            </p>
            <div className="pt-2">
              <Link
                href="/admin"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-surface-border bg-surface-elevated text-xs font-mono text-metallic hover:text-white hover:border-electric transition-colors shadow-sm"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-electric-cyan" />
                <span>Admin Console</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-metallic-muted/75">
          <p>© 2026 The Designer Awards. All rights reserved.</p>
          <p className="max-w-xl text-center md:text-right text-[11px] leading-relaxed">
            Independent community awards event. Not sponsored, endorsed, or affiliated with Roblox Corporation. ROBLOX is a registered trademark of Roblox Corporation.
          </p>
        </div>
      </div>
    </footer>
  );
};
