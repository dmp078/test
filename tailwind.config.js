/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'inner': 'inset 0 3px 4px 0 rgb(0 0 0 / 0.1);',
      }
    },
  },
  plugins: [require("daisyui")],
}