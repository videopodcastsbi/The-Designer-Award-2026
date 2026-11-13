"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Send, CheckCircle2, AlertCircle, Mail, ArrowUpRight } from "lucide-react";
import { eventConfig } from "@/lib/data";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    // Form Validation
    if (!formData.name.trim()) {
      setStatus("error");
      setErrorMessage("Please enter your name or studio handle.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (!formData.subject.trim()) {
      setStatus("error");
      setErrorMessage("Please select or enter an inquiry subject.");
      return;
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      setStatus("error");
      setErrorMessage("Please enter a message containing at least 10 characters.");
      return;
    }

    setStatus("submitting");

    // Simulated robust submission
    setTimeout(() => {
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 900);
  };

  return (
    <main className="min-h-screen pt-32 pb-28 bg-background">
      {/* Header */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="hero-spotlight" />
        <div className="max-w-3xl space-y-4">
          <div className="badge-pill">
            <span className="w-1.5 h-1.5 rounded-full bg-electric-cyan" />
            <span>Communications</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight font-display">
            Direct Committee <br />
            <span className="text-chrome">Communications</span>
          </h1>
          <p className="text-base sm:text-lg text-metallic-muted leading-relaxed">
            Reach out to The Designer Awards 2026 organizing team for developer submissions, media credentials, sponsorships, or general event inquiries.
          </p>
        </div>
      </section>

      {/* Main Grid: Form on Left + Information on Right */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Form (7 cols) */}
          <div className="lg:col-span-7 p-8 sm:p-12 rounded-3xl crystalline-border shadow-2xl relative">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white font-display">Send a Dispatch</h2>
              <p className="text-xs sm:text-sm text-metallic-muted mt-1">
                All inquiries are reviewed directly by the appropriate committee directors.
              </p>
            </div>

            {status === "success" ? (
              <div className="p-8 rounded-2xl border border-electric/40 bg-surface-elevated text-center space-y-4 animate-fadeIn">
                <div className="w-14 h-14 rounded-full bg-electric/20 text-electric-cyan flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white font-display">Dispatch Transmitted</h3>
                <p className="text-sm text-metallic-muted max-w-md mx-auto leading-relaxed">
                  Thank you for contacting The Designer Awards committee. Your transmission has been securely logged. Our team will follow up via the email provided.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="btn-electric px-6 py-2.5 rounded-full text-white font-mono text-xs uppercase tracking-wider font-bold"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {status === "error" && (
                  <div className="p-4 rounded-xl border border-red-500/40 bg-red-950/20 flex items-center gap-3 text-red-200 text-xs font-mono">
                    <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="block font-mono text-xs uppercase tracking-wider text-metallic font-semibold">
                    Full Name / Studio Representative *
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Elena Chen / Horizon Interactive"
                    className="w-full px-4 py-3.5 rounded-xl bg-surface-elevated border border-surface-border text-sm text-white placeholder-metallic-muted/40 focus:outline-none focus:border-electric transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block font-mono text-xs uppercase tracking-wider text-metallic font-semibold">
                    Official Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="contact@yourstudio.com"
                    className="w-full px-4 py-3.5 rounded-xl bg-surface-elevated border border-surface-border text-sm text-white placeholder-metallic-muted/40 focus:outline-none focus:border-electric transition-colors"
                  />
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="block font-mono text-xs uppercase tracking-wider text-metallic font-semibold">
                    Inquiry Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl bg-surface-elevated border border-surface-border text-sm text-white focus:outline-none focus:border-electric transition-colors"
                  >
                    <option value="">Select subject matter...</option>
                    <option value="Developer Submission Query">Developer Submission Query</option>
                    <option value="Jury & Curation Inquiries">Jury & Curation Inquiries</option>
                    <option value="Press & Broadcast Credentials">Press & Broadcast Credentials</option>
                    <option value="Partnership & Sponsorships">Partnership & Sponsorships</option>
                    <option value="General Question">General Question</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="block font-mono text-xs uppercase tracking-wider text-metallic font-semibold">
                    Message Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Provide details regarding your experience, studio, or inquiry..."
                    className="w-full px-4 py-3.5 rounded-xl bg-surface-elevated border border-surface-border text-sm text-white placeholder-metallic-muted/40 focus:outline-none focus:border-electric transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="btn-electric w-full py-4 rounded-xl text-white font-mono text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(7,91,255,0.4)] disabled:opacity-50"
                >
                  {status === "submitting" ? (
                    <span>Transmitting Dispatch...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Transmit Dispatch</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Details & Official Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Email Box */}
            <div className="p-8 rounded-3xl crystalline-border space-y-5">
              <span className="font-mono text-xs text-electric-cyan uppercase tracking-widest font-bold block">
                Official Correspondence
              </span>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-surface-elevated border border-surface-border text-electric">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Official Email</h4>
                    <a
                      href={`mailto:${eventConfig.contact.email}`}
                      className="text-xs font-mono text-metallic hover:text-electric transition-colors"
                    >
                      {eventConfig.contact.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Hubs */}
            <div className="p-8 rounded-3xl crystalline-border space-y-4">
              <span className="font-mono text-xs text-metallic-muted uppercase tracking-widest font-bold block">
                Official Community
              </span>

              <div className="space-y-3">
                <a
                  href={eventConfig.socials.discord}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl border border-surface-border bg-surface-elevated hover:border-electric transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Image
                      src="/assets/discord-logo.png"
                      alt="Discord"
                      width={28}
                      height={28}
                      className="rounded-full shrink-0"
                    />
                    <div>
                      <h4 className="text-sm font-semibold text-white group-hover:text-electric transition-colors">
                        Official Discord Server
                      </h4>
                      <p className="text-xs text-metallic-muted">Real-time creator community & announcements</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-metallic-muted group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
