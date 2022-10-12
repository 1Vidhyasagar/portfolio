/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./downloads/bg.jpg')",
        
      }
    },
    fontFamily:{
      sign:["Great Vibes"]
    }
  },
  plugins: [],
}
