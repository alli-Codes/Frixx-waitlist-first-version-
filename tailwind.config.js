module.exports = {
  content: [
    "./src/**/*.vue",
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./src/**/*.html",
    "./src/**/*.md",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#ACCCC9",
        green: "#4BB064",
      },

      backgroundImage: {
        "connect-pattern": "url('/images/connect.png')",
      },

      boxShadow: {
        "3xl": "0px 4px 8px rgba(0, 0, 0, 0.05)",
      },
      fontFamily: {
        "gorgagrotesque-bold": ["gorgagrotesque-bold"],
        "gorgagrotesque-bold-italic": ["gorgagrotesque-bold-italic"],
        "gorgagrotesque-italic": ["gorgagrotesque-italic"],
        "gorgagrotesque-light": ["gorgagrotesque-light"],
        "gorgagrotesque-light-italic": ["gorgagrotesque-light-italic"],
        "gorgagrotesque-regular": ["gorgagrotesque-regular"],
      },
    },
  },
  plugins: [],
};
