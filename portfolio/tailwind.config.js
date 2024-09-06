/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0077b6',  
        secondary: '#2b2b2b', 
        background: '#f8f9fa', 
        hoverPrimary: '#005f87', 
        contactBg: '#242424', 
      },
      screens:{
        'md': {'max': '850px'} 
      }
    },
  },
  plugins: [],
}

