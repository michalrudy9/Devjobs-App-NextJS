import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      violet: "#545DC8",
      "light-violet": "#939BF4",
      "very-dark-blue": "#19202D",
      midnight: "#121721",
      white: "#FFFFFF",
      "light-grey": "#F4F6F8",
      gray: "#9DAEC2",
      black: "#000000",
      "dark-grey": "#6E8098",
      "secondary-default": "#EEEFFB",
      "secondary-hover": "#C6C9F1",
      "secondary-dark-default": "#313641",
      "secondary-dark-hover": "#6b6e76",
    },
    extend: {
      fontFamily: {
        "kumbh-sans": ["Kumbh Sans", "sans-serif"],
      },
      backgroundImage: {
        "mobile-pattern-header": "url('/mobile/bg-pattern-header.svg')",
        "tablet-pattern-header": "url('/tablet/bg-pattern-header.svg')",
        "desktop-pattern-header": "url('/desktop/bg-pattern-header.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
