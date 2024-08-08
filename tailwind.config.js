/** @type {import('tailwindcss').Config} */

const { addIconSelectors } = require("@iconify/tailwind")

export default {
  content: [
    // Included Files
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  plugins: [addIconSelectors(["mdi", "simple-icons"])],
}
