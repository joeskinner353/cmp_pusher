import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        black: "#000000",
        white: "#ffffff",
        gray: {
          950: "#0a0a0a",
          900: "#141414",
          800: "#1f1f1f",
          700: "#2a2a2a",
          600: "#404040",
          500: "#6b6b6b",
          400: "#8f8f8f",
          300: "#b4b4b4",
          200: "#d4d4d4",
          100: "#ebebeb",
        },
        accent: {
          primary: "#e8e8e8",
          secondary: "#a0a0a0",
          tertiary: "#606060",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      fontSize: {
        xs: "clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)",
        sm: "clamp(0.875rem, 0.8rem + 0.375vw, 1rem)",
        base: "clamp(1rem, 0.9rem + 0.5vw, 1.125rem)",
        lg: "clamp(1.125rem, 1rem + 0.625vw, 1.25rem)",
        xl: "clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)",
        "2xl": "clamp(1.5rem, 1.3rem + 1vw, 2rem)",
        "3xl": "clamp(2rem, 1.7rem + 1.5vw, 3rem)",
        "4xl": "clamp(2.5rem, 2rem + 2.5vw, 4rem)",
        "5xl": "clamp(3rem, 2.5rem + 3vw, 5rem)",
      },
      spacing: {
        xs: "clamp(0.5rem, 0.4rem + 0.5vw, 0.75rem)",
        sm: "clamp(0.75rem, 0.6rem + 0.75vw, 1rem)",
        md: "clamp(1rem, 0.8rem + 1vw, 1.5rem)",
        lg: "clamp(1.5rem, 1.2rem + 1.5vw, 2rem)",
        xl: "clamp(2rem, 1.6rem + 2vw, 3rem)",
        "2xl": "clamp(3rem, 2.4rem + 3vw, 4rem)",
        "3xl": "clamp(4rem, 3.2rem + 4vw, 6rem)",
        "4xl": "clamp(6rem, 4.8rem + 6vw, 8rem)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        "scale-in": "scaleIn 0.4s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      transitionTimingFunction: {
        "out-cubic": "cubic-bezier(0.33, 1, 0.68, 1)",
        "in-out-cubic": "cubic-bezier(0.65, 0, 0.35, 1)",
        spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
