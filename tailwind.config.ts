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
        primary: "#050816",
        secondary: "#aaa6c3",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        flashWhite: "#f4f4f6",
        timberWolf: "#d4d4d8",
        taupe: "#9999a1",
        silver: "#d6d6d6",
        battleGray: "#858585",
        french: "#b5b5ba",
        night: "#141414",
        jet: "#292929",
        jetLight: "#333333",
        eerieBlack: "#1f1f1f",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        about:
          "linear-gradient(165deg, rgba(244,244,246,1) 100%, rgba(122,122,122,1) 100%)",
        experience:
          "linear-gradient(135deg, rgba(244,244,246,0.5) 60%, rgba(10,10,10,0.2) 100%),url('/src/assets/backgrounds/white-abstract.png')",
        experienceLight:
          "linear-gradient(137deg, rgba(244,244,246,0.5) 60%, rgba(10,10,10,0.9) 60%)",
        "hero-pattern":
          "linear-gradient(135deg, rgba(244,244,246,0.8) 60%, rgba(10,10,10,0.95) 60%)",
        "hero-mobile":
          "linear-gradient(137deg, rgba(244,244,246,0.8) 60%, rgba(10,10,10,1) 60%)",
        tech: "linear-gradient(165deg, rgba(20,20,20,0.8) 100%, rgba(109,109,116,0.8) 100%), url('/assets/backgrounds/toronto.jpeg')",
      },
      fontFamily: {
        arenq: ["var(--font-arenq)"],
        beckman: ["Beckman"],
        mova: ["var(--font-mova)"],
        overcameBold: ["Overcame Bold"],
        overcameOutline: ["Overcame Outline"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
