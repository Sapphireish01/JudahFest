import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#FFF8F2",
        ink: "#201B12",
        primary: {
          DEFAULT: "#166A22",
          hover: "#12541B",
          container: "#348439",
          fixed: "#A2F79C",
        },
        secondary: {
          DEFAULT: "#AB341D", // Ember
          container: "#FD6F52",
        },
        tertiary: {
          DEFAULT: "#785600",
          container: "#956E12",
          gold: "#F0BF5F",
        },
        forest: "#1E3A26",
        surface: {
          DEFAULT: "#FFF8F2",
          dim: "#E3D8CA",
          container: "#F8ECDD",
          high: "#F2E7D8",
          highest: "#ECE1D2",
        },
      },
      fontFamily: {
        headline: ["var(--font-bebas)", "'Bebas Neue'", "sans-serif"],
        body: ["var(--font-archivo)", "'Archivo Narrow'", "sans-serif"],
        mono: ["var(--font-space-mono)", "'Space Mono'", "monospace"],
        annotation: ["var(--font-rock-salt)", "'Rock Salt'", "cursive"],
        marquee: ["var(--font-monoton)", "'Monoton'", "cursive"],
      },
      boxShadow: {
        neo: "6px 6px 0px 0px #201B12",
        "neo-sm": "3px 3px 0px 0px #201B12",
        "neo-lg": "8px 8px 0px 0px #201B12",
        "neo-ember": "6px 6px 0px 0px #AB341D",
        "neo-gold": "6px 6px 0px 0px #785600",
      },
      spacing: {
        "flyer-rot-max": "8deg",
        gutter: "24px",
      },
    },
  },
  plugins: [],
};

export default config;
