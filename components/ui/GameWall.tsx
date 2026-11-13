import React from "react";
import Image from "next/image";
import { showcaseGames } from "@/lib/data";

/** Tilted wall of real Roblox game thumbnails, slowly scrolling. Decorative. */
export const GameWall: React.FC<{ className?: string }> = ({ className = "" }) => {
  const cols = 4;
  const columns = Array.from({ length: cols }, (_, c) =>
    showcaseGames.filter((_, i) => i % cols === c)
  );

  return (
    <div aria-hidden className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <div
        className="absolute -top-1/4 -right-[10%] w-[115%] sm:w-[85%] lg:w-[70%] h-[150%] grid grid-cols-3 sm:grid-cols-4 gap-4"
        style={{ transform: "rotate(-8deg)" }}
      >
        {columns.map((games, c) => (
          <div key={c} className={`overflow-hidden ${c === 3 ? "hidden sm:block" : ""}`}>
            <div className={`flex flex-col gap-4 ${c % 2 === 0 ? "animate-scroll-up" : "animate-scroll-down"}`}>
              {[...games, ...games].map((g, i) => (
                <div
                  key={`${g.id}-${i}`}
                  className="relative aspect-video w-full rounded-lg overflow-hidden border border-white/10"
                >
                  <Image src={g.thumbnail} alt="" fill sizes="25vw" className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

