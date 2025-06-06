/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        spin: 'spin 10s linear infinite', 
      },
    
      colors: {
        primary: '#0077b6',  
        secondary: '#2b2b2b', 
        background: '#F5F5DC', 
        hoverPrimary: '#F5F5DC', 
        contactBg: '#242424', 
      },

    },
  },
  plugins: [],
}

