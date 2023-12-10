/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        text: '#1D1C31',
        primary: '#0045DC',
        primary1: '#4253ED',
        secondary1: '#00AEED',
        secondary2: '#2D47F6',
        yellow: '#E8E6A6',
        darkblue: '#000A3F',
        lightblue: '#EAF3FF',
        Gray1: '#3A3A3A',
        Gray2: '#D1D1D1',
      },
      fontSize: {
        heading1: '48px',
        heading2: '32px',
        heading3: '24px',
        heading4: '20px',
        heading5: '18px',
        Base: '16px',
        M: '14px',
        S: '12px',
      },
      fontFamily: {
        fontRoboto: ["'Roboto', sans-serif"],
        fontMontserrat: ["'Montserrat', sans-serif"],
      },
      screens: {
        sm: '640px',
        // => @media (min-width: 640px) { ... }

        md: '768px',

        lg: '1024px',

        desktop: '1440px',
      },
    },
  },
  plugins: [],
};
