/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'fonts': 'Poppins, sans-serif',
      }
    },
  },
  plugins: [require("daisyui")],
}

