/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'half': '50vh',
        '80vh': '80vh',
        '40vh': '40vh'
      }
    },
  },
  plugins: [],
}
