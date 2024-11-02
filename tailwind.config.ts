import type { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

      writingMode: {
        "vertical-rl": "vertical-rl",
        "vertical-lr": "vertical-lr",
      },
      textOrientation: {
        upright: "upright",
      },
    },
  },
  plugins: [
    function ({ addUtilities }: PluginAPI) {
      addUtilities({
        ".writing-mode-vertical-rl": {
          writingMode: "vertical-rl",
        },
        ".writing-mode-vertical-lr": {
          writingMode: "vertical-lr",
        },
        ".text-orientation-upright": {
          textOrientation: "upright",
        },
      });
    },
  ],
};
export default config;
