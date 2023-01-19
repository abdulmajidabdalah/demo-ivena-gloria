/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        abril: ["Abril Fatface", "cursive"],
      },
      backgroundImage: {
        "bg-header":
          "linear-gradient(to right, rgba(6,6,6,1), rgba(6,5,6,0)),url('/src/components/assets/copernico-p_kICQCOM4s-unsplash.jpg')",
      },
      colors: {
        "bg-aside": "#2B333E",
        "detail-product": "#EFF5F5",
        orange: "#F4AD24",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
