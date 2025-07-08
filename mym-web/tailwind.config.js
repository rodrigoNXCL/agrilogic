// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#F5F5F5",
        contentBg: "#FFFFFF",
        headerFooterBg: "#E6E6E6",  // nuevo gris pálido
        accent: "#A3C4F3",
        textPrimary: "#333333",
        textSecondary: "#4D4D4D",
        borderLight: "#DDDDDD",
      },
    },
  },
  plugins: [],
};
