"use client";

import React, { useState } from "react";
import Link from "next/link";

interface LogoProps {
  variant?: "nav" | "hero" | "footer" | "loader";
  className?: string;
  showLink?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = "nav",
  className = "",
  showLink = true,
}) => {
  const [imageError, setImageError] = useState(false);

  // Exact proportion & scaling rules
  const sizeClasses = {
    nav: "h-10 sm:h-12 w-auto max-w-[220px]",
    hero: "w-full max-w-md sm:max-w-2xl lg:max-w-3xl h-auto max-h-[320px] sm:max-h-[380px]",
    footer: "h-12 sm:h-14 w-auto max-w-[240px]",
    loader: "h-20 sm:h-24 w-auto max-w-[280px]",
  }[variant];

  const content = (
    <div className={`relative inline-flex items-center justify-center select-none ${className}`}>
      {!imageError ? (
        <div className="relative group flex items-center justify-center w-full">
          {/* Volumetric sapphire & electric blue halo for the hammer */}
          <div
            className={`absolute -inset-4 rounded-full blur-3xl pointer-events-none transition-all duration-700 ${
              variant === "hero"
                ? "bg-gradient-to-r from-electric/40 via-electric-bright/50 to-cyan-400/35 opacity-90 scale-110"
                : "bg-electric/25 opacity-0 group-hover:opacity-100"
            }`}
          />
          {/* Official 3D Chrome Hammer Logo */}
          <img
            src="/assets/the-designer-awards-logo.png"
            alt="The Designer Awards 2026 Official Brand Identity"
            className={`${sizeClasses} object-contain relative z-10 transition-transform duration-500 group-hover:scale-[1.02] drop-shadow-[0_10px_35px_rgba(7,91,255,0.45)]`}
            onError={() => setImageError(true)}
          />
        </div>
      ) : (
        <div className="p-4 rounded-2xl border border-electric/40 bg-surface/85 backdrop-blur-md text-xs font-mono text-metallic">
          The Designer Awards 2026
        </div>
      )}
    </div>
  );

  if (showLink) {
    return (
      <Link
        href="/"
        className="inline-flex items-center focus:outline-none focus:ring-1 focus:ring-electric rounded-xl transition-opacity hover:opacity-95"
      >
        {content}
      </Link>
    );
  }

  return content;
};
