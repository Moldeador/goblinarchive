/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{svelte,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'rock-salt': ['Rock Salt'],
      }
    },
  },
  plugins: [],
}

