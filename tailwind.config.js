/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBlue: "#1C3879",
        secondaryBlue: "#607EAA",
        primaryTan: "#EAE3D2",
        secondaryTan: "#F9F5EB",
      },
      boxShadow: {
        innerXL: "inset 0px 0px 8px 8px rgb(28 56 121);",
      },
    },
  },
  plugins: [],
};
