"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Logo } from "../ui/Logo";
import { AudioAmbient } from "../ui/AudioAmbient";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Categories", href: "/categories" },
  { name: "Nominees", href: "/nominees" },
  { name: "Lineup", href: "/lineup" },
  { name: "Team", href: "/team" },
  { name: "FAQ", href: "/faq" },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#05070D]/90 backdrop-blur-xl border-b border-surface-border py-3 shadow-[0_10px_35px_rgba(0,0,0,0.8)]"
            : "bg-transparent py-5 sm:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: Official Brand Logo with the Hammer */}
            <div className="flex items-center gap-6">
              <Logo variant="nav" />
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 px-3 py-1.5 rounded-full border border-surface-border/80 bg-surface-elevated/75 backdrop-blur-md shadow-inner">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative px-4 py-1.5 text-xs font-mono uppercase tracking-wider transition-all duration-200 rounded-full ${
                      isActive
                        ? "text-white bg-surface font-semibold shadow-[0_0_15px_rgba(7,91,255,0.3)] border border-electric/40"
                        : "text-metallic-muted hover:text-white hover:bg-surface-elevated"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-electric-cyan shadow-[0_0_8px_#38B6FF]" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right: Sound Toggle + Contact Button */}
            <div className="hidden sm:flex items-center gap-3">
              <AudioAmbient />

              <Link
                href="/contact"
                className="btn-electric group relative inline-flex items-center gap-2 px-5 py-2 text-xs font-mono uppercase tracking-wider rounded-full text-white font-bold"
              >
                <span>Contact</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            {/* Mobile Actions: Audio + Hamburger */}
            <div className="flex items-center gap-2 lg:hidden">
              <AudioAmbient />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                className="p-2.5 rounded-xl border border-surface-border bg-surface-elevated/90 text-metallic hover:text-white transition-colors"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-40 bg-background/98 backdrop-blur-2xl transition-all duration-300 lg:hidden ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col justify-between h-full pt-28 pb-12 px-6">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-[10px] text-electric-cyan uppercase tracking-widest mb-3 font-bold">
              Event Navigation
            </span>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-2xl font-display py-3 transition-colors border-b border-surface-border/50 flex items-center justify-between ${
                    isActive ? "text-electric font-bold" : "text-metallic hover:text-white"
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-electric shadow-[0_0_10px_#075BFF]" />}
                </Link>
              );
            })}
          </div>

          <div className="flex flex-col gap-4 pt-6 border-t border-surface-border">
            <Link
              href="/contact"
              className="btn-electric flex items-center justify-center gap-2 w-full py-4 rounded-xl text-white font-mono uppercase tracking-wider text-xs font-bold"
            >
              <span>Contact Committee</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <p className="font-mono text-[11px] text-center text-metallic-muted">
              The Designer Awards 2026 · Official Honors Platform
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
