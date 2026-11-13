import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050608",
        surface: {
          DEFAULT: "#0B0E14",
          elevated: "#121722",
          card: "#0E131C",
          hover: "#171F30",
          border: "#1C2538",
          "border-subtle": "#141A28",
        },
        electric: {
          DEFAULT: "#075BFF",
          bright: "#168CFF",
          cyan: "#38B6FF",
          dark: "#043CB0",
          glow: "rgba(7, 91, 255, 0.4)",
        },
        metallic: {
          DEFAULT: "#DCE3EF",
          silver: "#DCE3EF",
          light: "#F0F4FC",
          muted: "#8A99B3",
          dark: "#4E5C73",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          "sans-serif",
        ],
        display: [
          "Syne",
          "Cinzel",
          '"Plus Jakarta Sans"',
          "Georgia",
          "serif",
        ],
        mono: [
          '"JetBrains Mono"',
          '"SF Mono"',
          "Menlo",
          "Consolas",
          "monospace",
        ],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "radial-highlight": "radial-gradient(circle at 50% 0%, rgba(7, 91, 255, 0.15), transparent 70%)",
        "hero-glow": "radial-gradient(ellipse at 50% -20%, rgba(7, 91, 255, 0.28), rgba(22, 140, 255, 0.08) 45%, transparent 75%)",
        "metallic-shine": "linear-gradient(135deg, #FFFFFF 0%, #DCE3EF 40%, #8A99B3 100%)",
      },
      animation: {
        "pulse-subtle": "pulseSubtle 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "shimmer": "shimmer 2.5s linear infinite",
        "fadeIn": "fadeIn 0.3s ease-in-out forwards",
      },
      keyframes: {
        pulseSubtle: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(4px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
