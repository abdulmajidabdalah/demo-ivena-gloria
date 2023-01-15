/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "bg-header":
          "linear-gradient(to right, rgba(6,6,6,1), rgba(6,5,6,0)),url('/src/components/assets/copernico-p_kICQCOM4s-unsplash.jpg')",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
