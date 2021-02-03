module.exports = {
  purge: {
    content: ["./src/**/*.svelte"],
    options: {
      whitelistPatterns: [/svelte-/],
    },
  },
  theme: {
    extend: {},
  },
  variants: {
    display: ['responsive','group-hover']
  },
  plugins: [require("@tailwindcss/typography")],
};
