/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gold': '#FFD700',
        'silver': '#aaa9ad',
        'bronze': '#CD7F32'
      },
    }
  },
  plugins: [],
}
