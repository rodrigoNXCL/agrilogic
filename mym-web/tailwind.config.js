// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        nxBlack: "#000000",
        nxGrayDark: "#333333",
        nxGray: "#666666",
        nxGrayLight: "#CCCCCC",
        pastelBlue: "#AEC6CF",
        pastelGreen: "#C1E1C1",
        pastelPink: "#FFD1DC",
      },
    },
  },
  plugins: [],
};
