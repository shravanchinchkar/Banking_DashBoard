/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        "new-mobile":"390px",
        "new-mobile-2":"450px",
        "sm":"640px",
        "new-sm":"700px",
        "new-md":"800px",
        "new-md-2":"930px",
        "new-lg-2":"1100px",

      }
    },
  },
  plugins: [],
}

