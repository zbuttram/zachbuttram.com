module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        marker: ["Permanent Marker"],
      },
      // Tailwind v1 palette values, to keep the original look after upgrading
      colors: {
        blue: { 300: "#90cdf4", 500: "#4299e1" },
        pink: { 200: "#fed7e2", 500: "#ed64a6", 600: "#d53f8c" },
        purple: { 500: "#9f7aea" },
        red: { 500: "#f56565" },
      },
    },
  },
  plugins: [],
}
