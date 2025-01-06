import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      display:["landscape"],
      screens: {
        mobile: "320px",
        tablet: "750px",
        laptop: "1024px",
        desktop: "1280px",
        lgDesktop: "1440px",
        xlDesktop: "1620px",
        landscape: { raw: "(orientation: landscape)" }
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
