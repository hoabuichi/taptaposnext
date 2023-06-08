/** @type {import('tailwindcss').Config} */

let sizeSpace = {};
for(let i = -500; i < 2000; i++) {
  sizeSpace[`${i}px`] = `${i}px`;
}

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      padding: {
        ...sizeSpace
      },
      margin: {
        ...sizeSpace
      },
      width: {
        ...sizeSpace
      },
      top: {
        ...sizeSpace
      },
      height: {
        ...sizeSpace
      },
      fontSize: {
        ...sizeSpace
      },
      colors: {
        'blue-ocean': '#1A96F0',
        'white-70': "rgba(255, 255, 255, 0.7)",
        "light-blue": "#effaf5",
        "blue-dark": "#170C3A",
        "blue-primary": "#1335A7",
        "blue-medium": "#CCDAE7",
        "grey-light": "#646F7C",
        "grey-light-dark": "#546E7A",
        "cyan-basic": "#29F1F2",
        "cyan-light": "#F0FEFE",
        "cyan-dark": "#22D2D2",
        "black-light-dark": "#263238",
        "grey-light-40": "rgba(55, 71, 79, 0.4)",
        "grey-light-80": "rgba(55, 71, 79, 0.8)",
        "light-blue-10": "rgba(26, 150, 240, 0.1)",
        "grey-text": "#90A4AE",
        "dark-text": "#455A64",
        "black-50": "rgba(0, 0, 0, 0.5)",
        "dividen": "#EBEAED",
        "grey-30": "#eceff15c",
        "blue-light-separator": "#CFD8DC",
      },
      boxShadow: {
        'header': '0px 0px 10px #d0cccc',
        'light': '0px 0px 10px #d3d3d3',
        'shadow-08': '0px 4px 16px rgba(0, 0, 0, 0.08)',
      },
      borderRadius: {
        ...sizeSpace,
        'large': '100px',
      },
      transitionProperty: {
        "top": "top",
      },
      rotate: {
        '90-reverse': '-90deg',
      },
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [],
}
