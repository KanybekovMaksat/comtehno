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
    extend: {
      // spacing: {
      //   'container-default': '65px',
      //   'container-xl': '50px',
      //   'container-lg': '40px',
      //   'container-md': '30px',
      //   'container-sm': '20px',
      //   'container-xs': '15px',
      // },
    },
    screens: {
      'r-xl': { max: '1440px' },
      'r-lg': { max: '1024px' },
      'r-md': { max: '768px' },
      'r-sm': { max: '480px' },
      'r-xs': { max: '360px' },
    },
    // container: {
    //   center: true,
    //   padding: 'container-default', // Указываем дефолтный отступ
    // },

    plugins: [],
  },
}
