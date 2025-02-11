/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  important: '#root',
  theme: {
    fontFamily: {
      serif: ['Geologica', 'serif'],
      sans: ['Geologica', 'serif'],
    },
    colors: {
      primary: '#0D9488',
      blue: '#0589c7',
      green: '#72c200',
      sun: '#faa918',
      yellow: '#ffc715',
      red: '#d33131',
      cinnabar: '#e53838',
      alto: ' #cfcfcf',
      dove: '#6f6f6f',
      tundora: ' #4c4c4c',
      white: 'white',
      black: 'black',
      violet: '#8f95cd',
      milk: '#fe98c8',
    },
    extend: {},
    screens: {
      'r-xl': { max: '1439px' },
      'r-lg': { max: '1023px' },
      'r-md': { max: '767px' },
      'r-sm': { max: '479px' },
      'r-xs': { max: '359px' },
    },
    container: {
      center: true,
      padding: '65px', // Базовый отступ по умолчанию
    },

    plugins: [
      function ({ addComponents, theme }) {
        addComponents({
          '.container': {
            paddingLeft: '65px',
            paddingRight: '65px',
            [`@media (max-width: ${theme('screens.r-xl.max')})`]: {
              paddingLeft: '50px',
              paddingRight: '50px',
            },
            [`@media (max-width: ${theme('screens.r-lg.max')})`]: {
              paddingLeft: '40px',
              paddingRight: '40px',
            },
            [`@media (max-width: ${theme('screens.r-md.max')})`]: {
              paddingLeft: '30px',
              paddingRight: '30px',
            },
            [`@media (max-width: ${theme('screens.r-sm.max')})`]: {
              paddingLeft: '10px',
              paddingRight: '10px',
            },
            [`@media (max-width: ${theme('screens.r-xs.max')})`]: {
              paddingLeft: '15px',
              paddingRight: '15px',
            },
          },
        })
      },
    ],
  },
}
