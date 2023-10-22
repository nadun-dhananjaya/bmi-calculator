/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "475px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },

      fontSize: {
        hs: "20px",
        hm: "24px",
        hl: "48px",
        hxl: "64px",

        bm: "16px",
        bs: "14px",
      },
      lineHeight: {
        lh110: "110%",
        lh150: "150%",
      },
      colors: {
        blue: "#345FF6",
        gunmetal: "#253347",
        deblue: "#5E6E85",
        bcolor: "#D8E2E7",
      },
    },
  },
  plugins: [],
};
