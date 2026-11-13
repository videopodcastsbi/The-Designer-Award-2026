"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ShieldCheck, 
  Layers, 
  Trophy, 
  Users, 
  Plus, 
  Database,
  Lock,
  ArrowUpRight
} from "lucide-react";
import { categories, placeholderNominees, teamMembers } from "@/lib/data";

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState<"overview" | "categories" | "nominees" | "lineup" | "team">("overview");

  return (
    <main className="min-h-screen pt-28 pb-20 bg-background text-metallic">
      {/* Top Admin Header */}
      <div className="border-b border-surface-border bg-surface/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-electric/15 text-electric-cyan border border-electric/30">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-bold text-white font-display">Event Management Console</h1>
                <span className="font-mono text-[10px] px-2.5 py-0.5 rounded-full bg-electric/15 text-electric-cyan border border-electric/30 font-bold">
                  Supabase RLS Ready
                </span>
              </div>
              <p className="font-mono text-xs text-metallic-muted">The Designer Awards 2026 · Operations Environment</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-surface-border bg-surface-elevated text-xs font-mono">
              <Database className="w-3.5 h-3.5 text-electric-cyan" />
              <span>Data Engine: Synchronized</span>
            </div>
            <Link
              href="/"
              className="px-4 py-1.5 rounded-full border border-surface-border bg-surface hover:bg-surface-elevated text-xs font-mono text-metallic hover:text-white transition-colors"
            >
              Public Site →
            </Link>
          </div>
        </div>
      </div>

      {/* Main Admin Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 border-b border-surface-border pb-4 mb-8 overflow-x-auto scrollbar-none">
          <button
            onClick={() => setActiveTab("overview")}
            className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all ${
              activeTab === "overview"
                ? "bg-electric text-white font-bold shadow-[0_0_15px_rgba(7,91,255,0.4)]"
                : "text-metallic-muted hover:text-white hover:bg-surface-elevated"
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab("categories")}
            className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all ${
              activeTab === "categories"
                ? "bg-electric text-white font-bold shadow-[0_0_15px_rgba(7,91,255,0.4)]"
                : "text-metallic-muted hover:text-white hover:bg-surface-elevated"
            }`}
          >
            Categories ({categories.length})
          </button>
          <button
            onClick={() => setActiveTab("nominees")}
            className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all ${
              activeTab === "nominees"
                ? "bg-electric text-white font-bold shadow-[0_0_15px_rgba(7,91,255,0.4)]"
                : "text-metallic-muted hover:text-white hover:bg-surface-elevated"
            }`}
          >
            Nominees ({placeholderNominees.length})
          </button>
          <button
            onClick={() => setActiveTab("lineup")}
            className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all ${
              activeTab === "lineup"
                ? "bg-electric text-white font-bold shadow-[0_0_15px_rgba(7,91,255,0.4)]"
                : "text-metallic-muted hover:text-white hover:bg-surface-elevated"
            }`}
          >
            Lineup Curation
          </button>
          <button
            onClick={() => setActiveTab("team")}
            className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all ${
              activeTab === "team"
                ? "bg-electric text-white font-bold shadow-[0_0_15px_rgba(7,91,255,0.4)]"
                : "text-metallic-muted hover:text-white hover:bg-surface-elevated"
            }`}
          >
            Committee Profiles ({teamMembers.length})
          </button>
        </div>

        {/* Tab 1: Overview */}
        {activeTab === "overview" && (
          <div className="space-y-8 animate-fadeIn">
            {/* Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-3xl crystalline-border space-y-2">
                <span className="font-mono text-xs text-metallic-muted uppercase font-semibold">Active Tracks</span>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-white font-display">08</span>
                  <Layers className="w-5 h-5 text-electric" />
                </div>
                <span className="font-mono text-[11px] text-electric-cyan">All tracks operational</span>
              </div>

              <div className="p-6 rounded-3xl crystalline-border space-y-2">
                <span className="font-mono text-xs text-metallic-muted uppercase font-semibold">Evaluated Candidates</span>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-white font-display">{placeholderNominees.length}</span>
                  <Trophy className="w-5 h-5 text-electric-bright" />
                </div>
                <span className="font-mono text-[11px] text-metallic-muted">Pre-broadcast window</span>
              </div>

              <div className="p-6 rounded-3xl crystalline-border space-y-2">
                <span className="font-mono text-xs text-metallic-muted uppercase font-semibold">Committee Jurors</span>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-white font-display">{teamMembers.length}</span>
                  <Users className="w-5 h-5 text-metallic" />
                </div>
                <span className="font-mono text-[11px] text-metallic-muted">Ratified profiles</span>
              </div>

              <div className="p-6 rounded-3xl crystalline-border space-y-2">
                <span className="font-mono text-xs text-metallic-muted uppercase font-semibold">Ceremony Year</span>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-white font-display">2026</span>
                  <ShieldCheck className="w-5 h-5 text-electric-cyan" />
                </div>
                <span className="font-mono text-[11px] text-electric-cyan">Inaugural honors</span>
              </div>
            </div>

            {/* Architecture & Backend Integration Blueprint */}
            <div className="p-8 rounded-3xl crystalline-border space-y-4">
              <div className="flex items-center gap-3">
                <Lock className="w-5 h-5 text-electric-cyan" />
                <h3 className="text-lg font-bold text-white font-display">Production Security & Supabase Integration Blueprint</h3>
              </div>
              <p className="text-sm text-metallic-muted leading-relaxed max-w-3xl">
                This dashboard architecture is pre-configured for connection with Supabase Row-Level Security (RLS) or equivalent backend database providers. All data schemas are defined with TypeScript interfaces in <code className="text-white bg-surface-elevated px-2 py-0.5 rounded font-mono text-xs">/lib/types.ts</code>.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                <div className="p-5 rounded-2xl border border-surface-border bg-surface-elevated/60">
                  <span className="font-mono text-xs text-electric-cyan block font-bold mb-1">01 / RLS Schema</span>
                  <p className="text-xs text-metallic-muted leading-relaxed">Public read access for nominees and categories, admin-only write privileges.</p>
                </div>
                <div className="p-5 rounded-2xl border border-surface-border bg-surface-elevated/60">
                  <span className="font-mono text-xs text-electric block font-bold mb-1">02 / Secure Inquiries</span>
                  <p className="text-xs text-metallic-muted leading-relaxed">Dispatches logged to protected table with automated webhook notifications.</p>
                </div>
                <div className="p-5 rounded-2xl border border-surface-border bg-surface-elevated/60">
                  <span className="font-mono text-xs text-metallic block font-bold mb-1">03 / Zero Secret Leak</span>
                  <p className="text-xs text-metallic-muted leading-relaxed">Admin keys strictly restricted to server routes and environment variables.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Categories Management */}
        {activeTab === "categories" && (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-white font-display">Award Categories Management</h3>
                <p className="text-xs text-metallic-muted">View and modify active award tracks.</p>
              </div>
              <button className="btn-electric inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white font-mono text-xs uppercase tracking-wider font-bold">
                <Plus className="w-3.5 h-3.5" />
                <span>Add Category</span>
              </button>
            </div>

            <div className="rounded-3xl crystalline-border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-surface-elevated text-metallic border-b border-surface-border uppercase tracking-wider">
                    <tr>
                      <th className="p-4">Badge</th>
                      <th className="p-4">Category Title</th>
                      <th className="p-4">Tagline</th>
                      <th className="p-4">Candidates</th>
                      <th className="p-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-surface-border">
                    {categories.map((cat) => (
                      <tr key={cat.id} className="hover:bg-surface-elevated/40 transition-colors">
                        <td className="p-4 text-electric-cyan font-bold">{cat.badge}</td>
                        <td className="p-4 text-white font-sans text-sm font-medium">{cat.title}</td>
                        <td className="p-4 text-metallic-muted">{cat.tagline}</td>
                        <td className="p-4 text-metallic">{cat.nomineeCount}</td>
                        <td className="p-4 text-right">
                          <button className="text-electric hover:underline mr-3">Edit</button>
                          <Link href={`/categories/${cat.slug}`} className="text-metallic-muted hover:text-white">Dossier</Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Nominees Management */}
        {activeTab === "nominees" && (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-white font-display">Nominees Catalog</h3>
                <p className="text-xs text-metallic-muted">Manage candidate records and Roblox links.</p>
              </div>
              <button className="btn-electric inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white font-mono text-xs uppercase tracking-wider font-bold">
                <Plus className="w-3.5 h-3.5" />
                <span>Add Nominee</span>
              </button>
            </div>

            <div className="rounded-3xl crystalline-border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-surface-elevated text-metallic border-b border-surface-border uppercase tracking-wider">
                    <tr>
                      <th className="p-4">Title</th>
                      <th className="p-4">Studio / Developer</th>
                      <th className="p-4">Category</th>
                      <th className="p-4">Status</th>
                      <th className="p-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-surface-border">
                    {placeholderNominees.map((nom) => (
                      <tr key={nom.id} className="hover:bg-surface-elevated/40 transition-colors">
                        <td className="p-4 text-white font-sans text-sm font-medium">{nom.title}</td>
                        <td className="p-4 text-metallic">{nom.studio}</td>
                        <td className="p-4 text-electric-cyan">{nom.categoryTitle}</td>
                        <td className="p-4">
                          <span className="px-2.5 py-0.5 rounded-full bg-surface-elevated border border-surface-border text-metallic">
                            {nom.status}
                          </span>
                        </td>
                        <td className="p-4 text-right">
                          <button className="text-electric hover:underline mr-3">Edit</button>
                          <a href={nom.robloxUrl} target="_blank" rel="noreferrer" className="text-metallic-muted hover:text-white">Roblox</a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Lineup Curation */}
        {activeTab === "lineup" && (
          <div className="space-y-6 animate-fadeIn">
            <div className="p-8 rounded-3xl crystalline-border space-y-4">
              <h3 className="text-xl font-bold text-white font-display">Lineup Curation State</h3>
              <p className="text-sm text-metallic-muted leading-relaxed">
                The lineup announcement is configured for modular reveals. Once the committee ratifies finalists, status badges can be updated from &quot;Pre-announcement Candidate&quot; to &quot;Official Finalist Selection&quot; across all eight categories simultaneously.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <span className="badge-pill bg-electric/15 border-electric/40 text-electric-cyan font-bold">
                  Status: Selection Window Active
                </span>
                <span className="font-mono text-xs text-metallic-muted">
                  No automated finalization claims published
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 5: Committee Profiles */}
        {activeTab === "team" && (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-white font-display">Committee & Jury Roster</h3>
                <p className="text-xs text-metallic-muted">Manage active jury profiles and departmental roles.</p>
              </div>
              <button className="btn-electric inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white font-mono text-xs uppercase tracking-wider font-bold">
                <Plus className="w-3.5 h-3.5" />
                <span>Add Member</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {teamMembers.map((member) => (
                <div key={member.id} className="p-5 rounded-2xl crystalline-border flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-white font-display">{member.name}</h4>
                    <p className="font-mono text-xs text-electric-cyan">{member.role}</p>
                    <p className="font-mono text-[11px] text-metallic-muted mt-1">{member.department}</p>
                  </div>
                  <button className="text-xs font-mono text-metallic hover:text-white">Edit Profile</button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
