/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./containers/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'join-us': "url('/images/join-us.png')",
      }
    },
    extend: {
      colors: {
        test: '#1fb6ff',
        gray: {
          100: '#f7fafc',
          900: '#1a202c',
        }
      }
    }
    
  },
  plugins: [],
}