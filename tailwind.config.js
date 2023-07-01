/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '1024px',
    },
    extend: {

      colors: {
        "background": "#08081F",
        "button-background": "#383DFB",
      },
    },
  },
  plugins: [],
}