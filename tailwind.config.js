/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: 'Roboto, sans-serif',
        exo: 'Exo, sans-serif',
      },
      colors: {
        "normal": '#A4ACAF',
        "fighting": '#D56723',
        "flying": '#89DFE4',
        "poison": '#B97FC9',
        "ground": '#746C4B',
        "rock": '#A38C21',
        "bug": '#729F3F',
        "ghost": '#7B62A3',
        "steel": '#9EB7B8',
        "fire": '#FD7D24',
        "water": '#4592C4',
        "grass": '#9BCC50',
        "eletric": '#EED535',
        "psychic": '#F366B9',
        "ice": '#51C4E7',
        "dragon": '#F16E57',
        "dark": '#707070',
        "fairy": '#FDB9E9',
      },
      boxShadow: {
        'button': 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset', 
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
