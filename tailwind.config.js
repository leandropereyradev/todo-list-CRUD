/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        fondo: 'url("/src/img/bg.jpg")',
      },
      fontFamily: {
        quicksand: ["QUICKSAND", "sans-serif"],
      },
    },
  },
  screens: {
    sm: "360px",
    // => @media (min-width: 320px) { ... }

    md: "768px",
    // => @media (min-width: 768px) { ... }

    lg: "1024px",
    // => @media (min-width: 1024px) { ... }

    xl: "1280px",
    // => @media (min-width: 1280px) { ... }

    "2xl": "1536px",
    // => @media (min-width: 1536px) { ... }
  },
  plugins: [],
};
