import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          950: "#0A0F1D",
          900: "#0F172A", // Deep Slate 900
          850: "#1E293B", // Slate 800
          800: "#334155", // Slate 700
          700: "#475569", // Slate 600
          600: "#64748B", // Slate 500
          500: "#94A3B8", // Slate 400
          400: "#CBD5E1", // Slate 300
          300: "#E2E8F0", // Slate 200
          200: "#F1F5F9", // Slate 100
          100: "#F8FAFC", // Slate 50
          50: "#FFFFFF",  // Pure White
          // Official Dunamis Brand Colors from Logo
          accent: "#D32F2F",       // Dunamis Crimson Red
          "accent-hover": "#B71C1C", // Darker Red for Hover
          "accent-light": "#EF5350",
          "accent-subtle": "#FFEBEE",
          navy: {
            DEFAULT: "#0C1E36",   // Primary Executive Navy
            950: "#060F1C",       // Deepest Midnight Navy
            900: "#0B1A30",       // Executive Header Navy
            850: "#0E223D",       // Header Hover Navy
            800: "#102A4C",       // Deep Structural Navy
            700: "#162D4A",       // Logo Accent Navy
            600: "#1E3D6B",       // Medium Slate Navy
            500: "#2B528A",
            "dark": "#0B1524",
            "light": "#243E63",
          },
          pearl: {
            DEFAULT: "#F4F6FA",   // Architectural Pearl Canvas
            50: "#FAFBFC",
            100: "#F4F6FA",
            200: "#EEF2F6",       // Concrete Mist Section Backdrop
            300: "#E2E8F0",       // Card Border
            400: "#CBD5E1",
          },
          steel: "#475569",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      letterSpacing: {
        widest: ".2em",
        tightest: "-.02em",
      },
    },
  },
  plugins: [],
};

export default config;
