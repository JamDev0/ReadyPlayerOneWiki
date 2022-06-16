/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'readyPlayerOneFont': 'ReadyPlayerOneFont',
        'pressStart2P': 'Press Start 2P',
        'poppins': 'Poppins'
      }
    },
  },
  plugins: [],
}
