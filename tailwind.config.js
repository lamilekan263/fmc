module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lato", "system-ui"],
      },
    },
  },
  variants: {
    extend: {
      borderStyle: ["hover", "focus"],
      textColor: ["responsive", "hover", "focus", "group-hover"],
    },
  },
  plugins: [],
};


  