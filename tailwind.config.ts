import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "green-texture": "url('/textures/green.jpeg')",
        "paper-texture": "url('/textures/paper.avif')",
        "paper1-texture": "url('/textures/paper1.jpg')",
      },
      fontFamily: {
        happySans: ["HappinessSans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
