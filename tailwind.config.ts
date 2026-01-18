import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: {
          50: "#fbf8f3",
          100: "#f6efe6",
          200: "#efe3d4",
          300: "#e8dfd3",
          400: "#ddcbb6",
        },
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.06)",
      },
      letterSpacing: {
        wide2: "0.28em",
      },
    },
  },
  plugins: [],
} satisfies Config;
