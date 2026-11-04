import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#15110D",
        paper: {
          DEFAULT: "#F3EADA",
          warm: "#ECE1C5",
          sheen: "#FAF2E0",
          bone: "#F7F1E4",
        },
        walnut: {
          DEFAULT: "#2A1C12",
          deep: "#1A110A",
          900: "#17100B",
          800: "#1D140E",
          700: "#231812",
          500: "#3A2719",
        },
        oak: {
          DEFAULT: "#DCC8A0",
        },
        ochre: {
          DEFAULT: "#B07A35",
          soft: "#C99659",
          deep: "#8F5F28",
        },
        ember: {
          DEFAULT: "#9B5A1F",
        },
        stone: {
          200: "#D1C7B6",
          300: "#A89F92",
          500: "#7A6F65",
          700: "#4C4139",
          900: "#2A231D",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.045em",
        tightish: "-0.015em",
        widish: "0.02em",
        wider2: "0.12em",
        wider3: "0.22em",
      },
      spacing: {
        18: "4.5rem",
        30: "7.5rem",
      },
      maxWidth: {
        "8xl": "88rem",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
        "out-emil": "cubic-bezier(0.23, 1, 0.32, 1)",
        "in-out-emil": "cubic-bezier(0.77, 0, 0.175, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
