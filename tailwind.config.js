/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",
    "./node_modules/flowbite-react/**/*.js"
  ],
  theme: {
    fontFamily: {
      poppins: "Poppins",
      dongle: "Dongle",
      sofia: "Sofia Sans Condensed"
    },
    colors: {
      // pic
      "pic-900": "#f27272",
      "pic-800": "#f38080",
      "pic-700": "#f58e8e",
      "pic-600": "#f69c9c",
      "pic-500": "#f7aaaa",
      "pic-400": "#f9b9b9",
      "pic-300": "#fac7c7",
      "pic-200": "#fbd5d5",
      "pic-100": "#fce3e3",
      "pic-50": "#fef1f1",
      // brown
      "brown-900": "#4e342e",
      "brown-800": "#604843",
      "brown-700": "#715d58",
      "brown-600": "#83716d",
      "brown-500": "#958582",
      "brown-400": "#a79a97",
      "brown-300": "#b8aeab",
      "brown-200": "#cac2c0",
      "brown-100": "#dcd6d5",
      "brown-50": "#edebea"
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      }
    }
  },
  plugins: [require("flowbite/plugin"), require("daisyui")]
};
