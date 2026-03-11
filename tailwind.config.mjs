/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#f5f5f7",
        surface: "#ffffff",
        accentRed: "#ff0000",
        accentBlue: "#0055ff",
        accentNeon: "#22c55e"
      },
      boxShadow: {
        "glow-red": "0 0 25px rgba(255, 0, 0, 0.65)",
        "glow-blue": "0 0 25px rgba(0, 85, 255, 0.65)",
        "glow-neon": "0 0 25px rgba(57, 255, 20, 0.7)"
      },
      keyframes: {
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "20%": { transform: "translateX(-4px)" },
          "40%": { transform: "translateX(4px)" },
          "60%": { transform: "translateX(-3px)" },
          "80%": { transform: "translateX(3px)" }
        },
        pop: {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "60%": { transform: "scale(1.05)", opacity: "1" },
          "100%": { transform: "scale(1)", opacity: "1" }
        }
      },
      animation: {
        shake: "shake 0.4s ease-in-out 2",
        pop: "pop 0.5s ease-out forwards"
      }
    }
  },
  plugins: []
};

