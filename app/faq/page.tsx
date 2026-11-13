"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, MessageSquare, ArrowUpRight } from "lucide-react";
import { faqItems } from "@/lib/data";

export default function FAQPage() {
  const [openId, setOpenId] = useState<string | null>(faqItems[0].id);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <main className="min-h-screen pt-32 pb-28 bg-background">
      {/* Header */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="hero-spotlight" />
        <div className="max-w-3xl space-y-4">
          <div className="badge-pill">
            <span className="w-1.5 h-1.5 rounded-full bg-electric-cyan" />
            <span>Frequently Asked Questions</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight font-display">
            Event & Curation <br />
            <span className="text-chrome">Inquiries</span>
          </h1>
          <p className="text-base sm:text-lg text-metallic-muted leading-relaxed">
            Essential answers regarding nominations, candidate eligibility, evaluation standards, and community guidelines for The Designer Awards 2026.
          </p>
        </div>
      </section>

      {/* Accordion Container */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4">
          {faqItems.map((item, idx) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className={`rounded-3xl transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "crystalline-border shadow-[0_0_30px_rgba(7,91,255,0.2)]"
                    : "border border-surface-border bg-surface-card/70 hover:border-surface-border/80"
                }`}
              >
                <button
                  onClick={() => toggleAccordion(item.id)}
                  aria-expanded={isOpen}
                  className="w-full p-6 sm:p-8 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs text-electric-cyan font-bold">
                      0{idx + 1}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold font-display text-white">
                      {item.question}
                    </h3>
                  </div>
                  <div
                    className={`p-2.5 rounded-full border border-surface-border bg-surface-elevated text-metallic transition-transform duration-300 shrink-0 ${
                      isOpen ? "rotate-180 text-electric-cyan border-electric/40" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-0 text-sm sm:text-base text-metallic-muted leading-relaxed border-t border-surface-border/50 animate-fadeIn">
                    <p className="pt-4">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Further Assistance Card */}
        <div className="mt-16 p-8 rounded-3xl crystalline-border flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-electric/15 text-electric-cyan border border-electric/30 shrink-0">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white font-display">Have a specific question not covered here?</h4>
              <p className="text-xs sm:text-sm text-metallic-muted mt-0.5">
                Our organizing team is available to assist developers, studios, and press partners directly.
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="btn-electric shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-mono text-xs uppercase tracking-wider font-bold"
          >
            <span>Contact Committee</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
