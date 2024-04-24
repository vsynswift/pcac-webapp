const flowbite = require("flowbite-react/tailwind");


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{jsx,html,js}',
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    
    // ...
    flowbite.content(),
  ],
  
  theme: {
    extend: {
      colors: {
        primaryColor: "#0057FF",
        secondaryColor: "#0057FFB2",
        transparentColor: "#EEEEEE"
      },
    },
    fontFamily: {
      sans: ['var(--font-opensans)']
    },
    fontSize:{
      "xl" : "20px",
      "lg" : "18px",
      "5xl": "50px",
      "2xl": "25px",
    },
  },
  
  plugins: [
    // ...
    flowbite.plugin(),
  ],
};