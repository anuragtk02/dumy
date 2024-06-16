/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    fill: {
      current: 'currentColor',
    },
    
    extend: {
      width: {
        '1200': '1200px',
      },
      height: {
        '450': '450px',
      },
      fontFamily: {
        cursive: ['"Dancing Script"', 'cursive'],
      },
      colors: {
        'soft-beige': '#F2EFE9',
        olive: {
          700: '#3f4d29',
        },
        terracotta: {
          700: '#D68B6D',
        },
        'muted-green': {
          700: '#73937E',
        },
        'creamy-white': {
          700: '#F5F5F5',
        },
        brown: {
          700: '#8B4513',
        },
        terracotta: {
          800: '#e8a468', 
        },
        clay: {
          400: '#102C57', 
        },

      },
    },
  },
  variants: {
    extend: {
      backdropBlur: ['responsive'],
    },
  },
  plugins: [],
};


