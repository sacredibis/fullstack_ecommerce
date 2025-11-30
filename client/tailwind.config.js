/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable dark mode with a class
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#34D399', // A shade of green for light mode
          dark: '#A78BFA',  // A shade of purple for dark mode
        },
      },
    },
  },
  plugins: [],
}
