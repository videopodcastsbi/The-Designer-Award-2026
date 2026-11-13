export interface AwardCategory {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  accent: string;
  badge: string;
  featuredVisual: string;
  criteria: string[];
  nomineeCount: number;
}

export type NominationStatus =
  | "Featured Showcase"
  | "Official Nominee"
  | "Lineup Selection"
  | "Category Finalist"
  | "Winner";

export interface Nominee {
  id: string;
  slug: string;
  title: string;
  developer: string;
  studio: string;
  categoryId: string;
  categoryTitle: string;
  thumbnail: string;
  icon: string;
  robloxUrl: string;
  description: string;
  genre: string;
  year: number;
  status: NominationStatus;
  tags: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  bio: string;
  avatar?: string;
  socials: {
    roblox?: string;
    twitter?: string;
    discord?: string;
    linkedin?: string;
  };
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "General" | "Nominations" | "Selection" | "Developers";
}

export interface EventConfig {
  eventName: string;
  edition: string;
  tagline: string;
  supportingDescription: string;
  closingQuote: string;
  socials: {
    discord: string;
    instagram: string;
    twitter: string;
    robloxGroup: string;
  };
  contact: {
    email: string;
    pressEmail: string;
  };
}
