import React from "react";
import { Hero } from "@/components/home/Hero";
import { IconMarquee } from "@/components/ui/IconMarquee";
import { EventIntro } from "@/components/home/EventIntro";
import { FeaturedCategories } from "@/components/home/FeaturedCategories";
import { FeaturedGames } from "@/components/home/FeaturedGames";
import { ClosingSection } from "@/components/home/ClosingSection";

export const metadata = {
  title: "The Designer Awards 2026 | Celebrating Roblox Creators & Studios",
  description:
    "The awards event celebrating the creators, developers, studios, and teams behind outstanding Roblox experiences.",
};

export default function HomePage() {
  return (
    <main className="flex flex-col">
      <Hero />
      <IconMarquee />
      <EventIntro />
      <FeaturedCategories />
      <FeaturedGames />
      <ClosingSection />
    </main>
  );
}
