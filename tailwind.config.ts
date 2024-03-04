import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      violet: "#9E7F66",
      "light-violet": "#939BF4",
      "very-dark-blue": "#19202D",
      midnight: "#121721",
      "light-grey": "#F4F6F8",
      gray: "#9DAEC2",
      "dark-grey": "#6E8098",
    },
    extend: {
      fontFamily: {
        "kumbh-sans": ["Kumbh Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
