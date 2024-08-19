/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary": {
          500: "#4891FF",
          700: "#3872c9"
        }
      }
    },
    fontFamily: {
      "poppins": ["Poppins"]
    }
  },
  plugins: [],
}

