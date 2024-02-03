/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'Avenir', 'sans-serif'],
      },
      boxShadow: {
        leftShadow: '-3px 0 5px -5px rgba(0,0,0,0.5);',
      },
      colors: {
        primary: '#18B5B7',
        primaryHover: '#31BDBF',
        primaryDisabled: '#8BDADB',
        // primaryDisabled: '#CBEEEF',
        lightBlue: '#CBEEEF',
        secondaryHover: '#d0d4dc',
        royalBlue: '#172B4D',
        modalBackdrop: 'rgba(23,43,77,0.56)',
        borderGray: '#B1B8C3',
        activeLink: '#084E8B',
        darkGray: '#707070',
        sideMenuHoverBg: '#EDEFF1',
        dropDownBorder: '#D0D4DB',
        requiredRed: '#FE4F4F',
        pink: '#F5E1DF',
      },
    },
  },
  // plugins: [require("@tailwindcss/forms")],
};
