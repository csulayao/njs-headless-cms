/** @type {import('tailwindcss').Config} */

import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        //sans: ["var(--font-inter)"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "primary-orange": "#FF5722",
        "primary-indigo": "#4338ca", //secondary indigo #6366f1
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [typography],
} satisfies Config;
