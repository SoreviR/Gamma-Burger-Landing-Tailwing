/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/pages/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
        "background-primary": "var(--background-primary)"
      },
      fontFamily:{
        body: ["Playfair Display", "serif"]
      },
    },
  },
  plugins: [],
}

