import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: {
            50: "#F0FDF4",
            600: "#16A34A",
            700: "#166534",
            800: "#14532D",
            900: "#0F3D26",
            950: "#0A2E1C",
          },
          gold: {
            50: "#FFFEF5",
            100: "#FDF8E8",
            400: "#E6BE5A",
            500: "#D4A017",
            600: "#B8860B",
          },
        },
      },
      fontFamily: {
        heading: ["Playfair Display", "Georgia", "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
};
export default config;
