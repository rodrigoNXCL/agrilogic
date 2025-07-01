// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        text: {
          primary: "var(--color-text-primary)",
          grayDark: "var(--color-gray-dark)",
          gray: "var(--color-gray)",
        },
        gray: {
          light: "var(--color-gray-light)",
        },
        accent: "var(--color-accent)",
      },
    },
  },
  plugins: [],
};
