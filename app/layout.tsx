import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/footer/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://thedesignerawards.com"),
  title: {
    template: "%s | The Designer Awards 2026",
    default: "The Designer Awards 2026 — Celebrating Roblox Creators & Studios",
  },
  description:
    "The prestigious awards event celebrating the creators, developers, studios, and teams behind outstanding Roblox experiences.",
  keywords: [
    "The Designer Awards",
    "Roblox Awards 2026",
    "Roblox Developers",
    "Roblox Studios",
    "Creator Honors",
    "Game Design Awards",
  ],
  authors: [{ name: "The Designer Awards Organizing Committee" }],
  openGraph: {
    title: "The Designer Awards 2026",
    description: "Celebrating the Creators Behind the Experiences.",
    url: "https://thedesignerawards.com",
    siteName: "The Designer Awards",
    images: [
      {
        url: "/assets/the-designer-awards-logo.png",
        width: 1200,
        height: 630,
        alt: "The Designer Awards 2026",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/assets/the-designer-awards-logo.png",
    apple: "/assets/the-designer-awards-logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Orbitron:wght@600;700;800;900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Syne:wght@700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-metallic font-sans antialiased selection:bg-electric selection:text-white min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 w-full">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
