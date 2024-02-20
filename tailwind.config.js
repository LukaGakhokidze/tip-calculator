/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "hsl(172, 67%, 45%)",
      secondary: "hsl(183, 100%, 15%)",
      dark_grey: "hsl(186, 14%, 43%)",
      grey: "hsl(184, 14%, 56%)",
      light_grey: "hsl(185, 41%, 84%)",
      very_light_grey: " hsl(189, 41%, 97%)",
      white: "hsl(0, 0%, 100%)",
      red: "hsl(13,70%,61% )",
    },
    fontSize: {
      xs: "13px",
      sm: "16px",
      btn: "20xp",
      "output-mobile": "32px",
      "output-desktop": "48px",
    },
    screens: {
      desktop: "1200px",
    },

    extend: {
      dropShadow: {
        custom: "0 43px 32px 0 hsl(185,38%,50%,0.2)",
      },
    },
  },
  plugins: [],
};
