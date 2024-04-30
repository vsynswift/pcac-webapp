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
    screens: { 
      'sm': '640px', 
      'md': '1024px', 
      'lg': '1280px' ,
      "2xl" : '1440px'
    }, 
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "4rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        primaryColor: "#0057FF",
        secondaryTextColor :"#A3A3A3",
        secondaryColor: "#0057FFB2",
        transparentColor: "#EEEEEE"
      },
      
      boxShadow: {
        'xl': '0px 0px 40px 10px #F2F6FF;',
      }
    },
    fontFamily: {
      sans: ['var(--font-opensans)']
    },
    fontSize:{
      "xl" : "20px",
      "lg" : "15px",
      "5xl": "50px",
      "2xl": "25px",
    },
    
  },
  
  plugins: [
    // ...
    flowbite.plugin(),
  ],
};