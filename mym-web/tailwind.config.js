// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#F5F5F5",
        contentBg: "#FFFFFF",
        headerFooterBg: "#b5b5b5",  // gris medio, más elegante
        accent: "#A3C4F3",
        textPrimary: "#333333",
        textSecondary: "#4D4D4D",
        borderLight: "#DDDDDD",
      },
    },
  },
  plugins: [],
};
