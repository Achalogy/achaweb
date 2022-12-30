/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
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
      },
      colors: {
        darkMode: {
          400: '#535C85',
          500: '#495174',
          600: '#3E4564',
          700: '#343953',
          800: '#2A2E43',
          900: '#1F2232'
        },
        codeHighlight: {
          "dark": '#f4f4f510',
          "light": "#f4f4f5"
        }
      },
    },
  },
  plugins: [],
}
