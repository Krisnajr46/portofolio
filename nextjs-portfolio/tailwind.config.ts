import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { bg: "#060b17", primary: "#3b82f6", accent: "#22d3ee" },
    fontFamily: { mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"] },
    boxShadow: { glow: "0 0 30px rgba(59,130,246,.25)" },
  } },
  plugins: [],
} satisfies Config;
