import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#050505",
          secondary: "#0B0B0B",
          card: "#111111",
        },
        border: { DEFAULT: "#1E1E1E" },
        text: {
          primary: "#FFFFFF",
          secondary: "#A8A8A8",
        },
      },
      borderRadius: {
        xl: "12px",
        "2xl": "16px",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
        display: ["var(--font-space)", "system-ui", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 40px rgba(0, 0, 0, 0.5)",
        card: "0 4px 24px rgba(0, 0, 0, 0.4)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;