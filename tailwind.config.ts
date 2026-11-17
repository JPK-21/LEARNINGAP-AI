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
        aarohan: {
          canvas: "#060C1B",
          canvasDeep: "#040814",
          surface: "rgba(11, 21, 40, 0.88)",
          surfaceSolid: "#0B1528",
          surfaceItem: "#0E1B33",
          surfaceHover: "#132444",
          surfaceActive: "#172A52",
          border: "rgba(27, 44, 76, 0.8)",
          borderGlow: "rgba(56, 189, 248, 0.35)",
          blue: "#1D4ED8",
          blueLight: "#2563EB",
          cyan: "#38BDF8",
          emerald: "#10B981",
          amber: "#F59E0B",
          gold: "#D97706",
          rose: "#F43F5E",
          wine: "#240C16",
          wineBorder: "#4D1627",
          wineText: "#FCA5A5",
          textPrimary: "#FFFFFF",
          textSecondary: "#8898B2",
          textMuted: "#4E607D",
        },
      },
      boxShadow: {
        "neon-cyan": "0 0 15px rgba(56, 189, 248, 0.25)",
        "neon-blue": "0 0 20px rgba(29, 78, 216, 0.35)",
        "card-glass": "0 8px 32px 0 rgba(0, 0, 0, 0.45)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
export default config;
