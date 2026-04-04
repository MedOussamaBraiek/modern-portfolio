import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        text: "var(--text)",
        muted: "var(--muted)",
        accent: "var(--accent)",
      },
      fontFamily: {
        syne: ["var(--font-syne)"],
        mono: ["var(--font-dm-mono)"],
      },
    },
  },
} satisfies Config;
