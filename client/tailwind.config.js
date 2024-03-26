/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'tauri': ['Tauri', 'sans-serif'],
      'poppins': ['Poppins', 'sans-serif'],
    },
    extend: {
    colors:{
      customBlue: '#004766',
      customNav:'#003366',
      customColor:'#bfecff',
      customSpan:'#80d9ff',
    }, 
    },
  },
  plugins: [],
}
