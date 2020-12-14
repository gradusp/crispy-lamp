const production = !process.env.NODE_ENV;
module.exports = {
  purge: {
    content: [
      "./src/**/*.svelte", // Look for .svelte files
      "./public/**/*.html", // Look for .html files
    ],
    enabled: production,
  },
  darkMode: "media", // false, media, class
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
