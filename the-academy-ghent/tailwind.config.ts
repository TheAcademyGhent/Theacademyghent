import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0B0B0B", // basis achtergrond
          soft: "#111111",
        },
        surface: {
          DEFAULT: "#161616",
          raised: "#1E1E1E",
          hairline: "#2A2A2A",
        },
        bone: {
          DEFAULT: "#F3F2ED", // off-white tekst
          muted: "#8C8880", // warm grijs, secundaire tekst
        },
      },
      fontFamily: {
        display: ["var(--font-archivo)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        label: ["var(--font-oswald)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      maxWidth: {
        container: "1440px",
      },
      transitionTimingFunction: {
        academy: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.16,1,0.3,1) forwards",
        marquee: "marquee 32s linear infinite",
      },
    },
  },
  plugins: [
    // Signature "cut corner" system — echoes the diagonal slash in the TAG mark.
    // Used with restraint: hero frames, cards, buttons, dividers.
    plugin(function ({ addUtilities }) {
      const cut = (px: number) => ({
        clipPath: `polygon(${px}px 0, 100% 0, 100% calc(100% - ${px}px), calc(100% - ${px}px) 100%, 0 100%, 0 ${px}px)`,
      });
      const cutReverse = (px: number) => ({
        clipPath: `polygon(0 0, calc(100% - ${px}px) 0, 100% ${px}px, 100% 100%, ${px}px 100%, 0 calc(100% - ${px}px))`,
      });
      addUtilities({
        ".clip-cut-sm": cut(10),
        ".clip-cut-md": cut(18),
        ".clip-cut-lg": cut(32),
        ".clip-cut-sm-r": cutReverse(10),
        ".clip-cut-md-r": cutReverse(18),
        ".clip-cut-lg-r": cutReverse(32),
      });
    }),
  ],
};
export default config;
