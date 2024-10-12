import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)", // Using CSS custom properties
        foreground: "var(--foreground)",
        offwhite: "F3F2ED", // Add your offwhite color
      },
    },
  },
  plugins: [],
};

export default config;
