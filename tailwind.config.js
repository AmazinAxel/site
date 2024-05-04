export default {
  plugins: [],
    theme: {
      extend: {},
    },
  purge: ["./index.html",'./src/**/*.{svelte,js,ts}'], // Remove unused CSS files
  variants: {
    extend: {},
  },
  darkmode: "media", // or true or 'media' or 'class'
}
