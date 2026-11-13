import { AwardCategory, Nominee, TeamMember, FAQItem, EventConfig } from "./types";
import robloxGames from "./roblox-games.json";

/* ------------------------------------------------------------------ */
/*  EVENT CONFIG — replace placeholder links/emails with official ones */
/* ------------------------------------------------------------------ */
export const eventConfig: EventConfig = {
  eventName: "The Designer Awards",
  edition: "2026",
  tagline: "Celebrating the Creators Behind the Experiences.",
  supportingDescription:
    "Recognizing the creativity, innovation, and dedication behind the Roblox experiences that bring communities together.",
  closingQuote: "Great Experiences Deserve Recognition.",
  socials: {
    discord: "https://discord.gg/CwedGGvZu",
    instagram: "",
    twitter: "",
    robloxGroup: "",
  },
  contact: {
    email: "suhat020855@gmail.com",
    pressEmail: "suhat020855@gmail.com",
  },
};

/* ------------------------------------------------------------------ */
/*  SHOWCASE GAMES — real Roblox experiences (data from Roblox APIs).  */
/*  Shown as a SHOWCASE only. These are NOT official nominations.      */
/* ------------------------------------------------------------------ */
type RawGame = (typeof robloxGames)[number];

const cleanName = (name: string) =>
  name
    .replace(/\[[^\]]*\]/g, "") // [UPD], [🎃] ...
    .replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]|[\u2600-\u27BF\uFE0F\u200D]/g, "")
    .replace(/\bRP\b/, "")
    .replace(/\s{2,}/g, " ")
    .trim();

// Short, neutral editorial copy (written for this site, not from the games).
const editorial: Record<string, { description: string; tags: string[] }> = {
  "adopt-me": { description: "Raise and trade pets, build a home and roleplay with friends in one of Roblox's longest-running social worlds.", tags: ["Pets", "Trading", "Roleplay"] },
  "murder-mystery-2": { description: "A tense social deduction round: one murderer, one sheriff, and everyone else trying to survive.", tags: ["Social Deduction", "Party"] },
  "natural-disaster-survival": { description: "A Roblox classic — survive a random disaster on a random map, together or alone.", tags: ["Classic", "Survival"] },
  "grow-a-garden": { description: "Plant, harvest and trade crops in a relaxed farming loop shared with friends.", tags: ["Farming", "Trading"] },
  "blox-fruits": { description: "A pirate-themed action RPG built around fruit powers, sea exploration and long-term progression.", tags: ["Action RPG", "Open Seas"] },
  "fisch": { description: "A fishing adventure with a deep catalogue of catches, locations and rods to discover.", tags: ["Fishing", "Collection"] },
  "bee-swarm-simulator": { description: "Grow a swarm of bees, collect pollen and complete quests across a carefully paced progression.", tags: ["Simulator", "Quests"] },
  "volleyball-legends": { description: "Anime-inspired competitive volleyball with stylised abilities and fast team play.", tags: ["Volleyball", "Competitive"] },
  "the-strongest-battlegrounds": { description: "A combo-driven battlegrounds fighter with expressive movesets and quick matches.", tags: ["Fighting", "PvP"] },
  "arsenal": { description: "Fast arena shooter where every elimination swaps your weapon — a staple of Roblox FPS.", tags: ["Arena FPS", "Gun Game"] },
  "rivals": { description: "Competitive duels and team fights with a wide arsenal and tight, skill-focused gunplay.", tags: ["Competitive FPS", "Duels"] },
  "jailbreak": { description: "Cops and robbers in an open city — heists, chases and vehicles at scale.", tags: ["Open World", "Heists"] },
  "brookhaven": { description: "An open roleplay town where players create their own stories, homes and hangouts.", tags: ["Roleplay", "Social"] },
  "meepcity": { description: "A social hangout of customisable homes, minigames and Meep companions.", tags: ["Hangout", "Social"] },
  "welcome-to-bloxburg": { description: "A life sim celebrated for its detailed home-building tools and player-made architecture.", tags: ["Building", "Life Sim"] },
  "theme-park-tycoon-2": { description: "Design and run a theme park, from coasters to landscaping, with a powerful building system.", tags: ["Tycoon", "Building"] },
  "doors": { description: "A horror experience with strong atmosphere, sound design and memorable encounters, room by room.", tags: ["Horror", "Co-op"] },
  "tower-of-hell": { description: "A randomly generated obby tower with no checkpoints — a pure test of nerve.", tags: ["Obby", "Platformer"] },
  "dress-to-impress": { description: "Style an outfit to a theme, walk the runway and let the lobby vote.", tags: ["Fashion", "Runway"] },
  "royale-high": { description: "A fantasy school and fashion world built around outfits, accessories and seasonal events.", tags: ["Fashion", "Fantasy"] },
  "trade-simulator": { description: "Simulate virtual item trading, track market values, and master the art of Roblox trading economy.", tags: ["Trading", "Economy", "Simulator"] },
  "wanted": { description: "An action-packed cops and robbers open world with high-stakes bank heists, vehicle chases, and law enforcement.", tags: ["Open World", "Heists", "Action"] },
  "super-hero-tycoon": { description: "A beloved classic tycoon where players construct heroic bases, unlock abilities, and battle rival heroes.", tags: ["Tycoon", "Superheroes", "Classic"] },
  "steal-a-brainrot": { description: "A viral, chaotic meme multiplayer game where players collect, steal, and protect brainrots while trolling opponents.", tags: ["Meme", "Party", "Chaos"] },
  "choose-an-ability": { description: "A fast-paced PvP arena fighter where players unlock and master dozens of distinct abilities and clash for supremacy.", tags: ["PvP", "Fighting", "Abilities"] },
};

const slugFor = (g: RawGame) => (g.slug === "brookhaven-rp" ? "brookhaven" : g.slug);

/* ------------------------------------------------------------------ */
/*  CATEGORIES — edit freely                                           */
/* ------------------------------------------------------------------ */
const baseCategories: Omit<AwardCategory, "featuredVisual" | "nomineeCount">[] = [
  {
    id: "cat-fun-with-friends",
    slug: "fun-with-friends",
    title: "Fun with Friends",
    tagline: "Shared moments, made together",
    shortDescription: "For experiences that are at their best when your friends are in the server.",
    fullDescription:
      "This award is for the games people jump into together — the ones built around shared laughs, teamwork and the kind of moments that only happen with other players around.",
    accent: "#075BFF",
    badge: "01",
    criteria: ["Quality of group play", "Ease of joining friends", "Memorable shared moments", "Lasting appeal for friend groups"],
  },
  {
    id: "cat-trending-rpg",
    slug: "trending-rpg",
    title: "Trending RPG",
    tagline: "Worlds worth investing in",
    shortDescription: "For role-playing games with worlds, progression and systems players commit to.",
    fullDescription:
      "Great RPGs give players a reason to come back tomorrow. This category looks at worldbuilding, progression, combat feel and how well a game rewards the time people put in.",
    accent: "#168CFF",
    badge: "02",
    criteria: ["Worldbuilding and atmosphere", "Progression design", "Combat and ability feel", "Player agency"],
  },
  {
    id: "cat-trending-sports",
    slug: "trending-sports",
    title: "Trending Sports",
    tagline: "Competition with real feel",
    shortDescription: "For sports and competitive experiences with responsive controls and real energy.",
    fullDescription:
      "Sports games live or die on feel. This award recognises responsive physics, clear competitive design and the energy that makes a match worth watching.",
    accent: "#075BFF",
    badge: "03",
    criteria: ["Control responsiveness", "Competitive fairness", "Presentation and energy", "Team play"],
  },
  {
    id: "cat-trending-shooter",
    slug: "trending-shooter",
    title: "Trending Shooter",
    tagline: "Gunplay that feels right",
    shortDescription: "For shooters with satisfying weapons, readable maps and sharp game modes.",
    fullDescription:
      "From arena chaos to careful duels, this award looks at weapon feel, map design, audio feedback and the loop that keeps players queuing again.",
    accent: "#168CFF",
    badge: "04",
    criteria: ["Weapon feel", "Map and level design", "Audio feedback", "Mode balance"],
  },
  {
    id: "cat-voice-chat",
    slug: "voice-chat",
    title: "Voice Chat",
    tagline: "Spaces built for conversation",
    shortDescription: "For experiences where talking to other players is part of the design.",
    fullDescription:
      "Voice has changed how people meet on Roblox. This category is for spaces that make conversation natural, fun and safe — where the people are the content.",
    accent: "#38B6FF",
    badge: "05",
    criteria: ["Design that invites conversation", "Use of spatial audio", "Community safety", "Atmosphere"],
  },
  {
    id: "cat-top-build",
    slug: "top-build",
    title: "Top Build",
    tagline: "Craft you can walk through",
    shortDescription: "For outstanding building, environment art and art direction.",
    fullDescription:
      "Top Build celebrates visual craft — architecture, lighting, materials and composition — and the tools that let players build beautiful things themselves.",
    accent: "#DCE3EF",
    badge: "06",
    criteria: ["Architecture and composition", "Lighting and materials", "Art direction", "Performance"],
  },
  {
    id: "cat-entertainment",
    slug: "entertainment",
    title: "Entertainment",
    tagline: "Experiences that hold an audience",
    shortDescription: "For experiences that deliver a show, a scare or a story worth sharing.",
    fullDescription:
      "This award is for experiences built to entertain — through tension, pacing, spectacle or storytelling — and that people can't stop talking about.",
    accent: "#075BFF",
    badge: "07",
    criteria: ["Pacing and tension", "Audio-visual presentation", "Memorability", "Replay value"],
  },
  {
    id: "cat-shopping",
    slug: "shopping",
    title: "Shopping",
    tagline: "Fashion and self-expression",
    shortDescription: "For experiences built around style, outfits and avatar expression.",
    fullDescription:
      "Roblox is one of the biggest fashion platforms in the world. This category recognises experiences that make browsing, styling and showing off genuinely fun.",
    accent: "#168CFF",
    badge: "08",
    criteria: ["Styling and try-on UX", "Presentation of items", "Social features", "Creative expression"],
  },
];

const titleFor = (id: string) => baseCategories.find((c) => c.id === id)?.title ?? "";

export const showcaseGames: Nominee[] = robloxGames.map((g, i) => {
  const slug = slugFor(g);
  const ed = editorial[slug];
  return {
    id: `game-${g.universeId}`,
    slug,
    title: cleanName(g.name),
    developer: g.creator,
    studio: g.creator,
    categoryId: g.categoryId,
    categoryTitle: titleFor(g.categoryId),
    thumbnail: g.thumbnail,
    icon: g.icon,
    robloxUrl: g.robloxUrl,
    description: ed?.description ?? g.description,
    genre: g.genre,
    year: 2026,
    status: "Featured Showcase",
    tags: ed?.tags ?? [g.genre],
  };
});

// Kept for backwards compatibility with existing pages.
export const placeholderNominees = showcaseGames;

export const categories: AwardCategory[] = baseCategories.map((c) => {
  const games = showcaseGames.filter((g) => g.categoryId === c.id);
  return {
    ...c,
    featuredVisual: games[0]?.thumbnail ?? "/assets/the-designer-awards-logo.png",
    nomineeCount: games.length,
  };
});

/* ------------------------------------------------------------------ */
/*  TEAM — placeholders. Replace with the real organising team.        */
/* ------------------------------------------------------------------ */
export const teamMembers: TeamMember[] = [
  {
    id: "team-01",
    name: "do_Zenith",
    role: "Event Organizer & Creator Event Lead",
    department: "Roblox Creator Event Program",
    bio: "Event Organizer of The Designer Awards 2026 and member of the Roblox Creator Event Program team, dedicated to celebrating the artistry and craft of top Roblox creators.",
    avatar: "/team/do-zenith.jpg",
    socials: {
      roblox: "https://www.roblox.com",
    },
  },
  {
    id: "team-02",
    name: "DevelopedWay",
    role: "Official Event Co-Host",
    department: "Event Production & Hosting",
    bio: "Official Co-Host of The Designer Awards 2026, guiding the community through ceremony milestones and championing creator excellence.",
    avatar: "/team/developedway.jpg",
    socials: {
      roblox: "https://www.roblox.com",
    },
  },
];

/* ------------------------------------------------------------------ */
/*  FAQ — answers are editable; no rules or dates are invented.        */
/* ------------------------------------------------------------------ */
export const faqItems: FAQItem[] = [
  { id: "faq-01", category: "General", question: "What is The Designer Awards 2026?", answer: "The Designer Awards 2026 is an awards event celebrating the creators, developers, studios and teams behind outstanding Roblox experiences." },
  { id: "faq-02", category: "General", question: "What is the purpose of this event?", answer: "To recognise the people behind the experiences — their creativity, craft and the communities they bring together." },
  { id: "faq-03", category: "Selection", question: "How are games selected?", answer: "Details of the selection process will be published by the organising team. This answer will be updated once the official process is confirmed." },
  { id: "faq-04", category: "Nominations", question: "Who can be recognized?", answer: "Eligibility details will be announced by the organising team. Check back here or follow our official channels for updates." },
  { id: "faq-05", category: "Selection", question: "When will the official lineup be announced?", answer: "The announcement date has not been published yet. It will be shared through our official channels and on the Lineup page." },
  { id: "faq-06", category: "Developers", question: "How can developers contact the organizing team?", answer: "Use the form on the Contact page, or reach us through our official community channels once they are published." },
];
