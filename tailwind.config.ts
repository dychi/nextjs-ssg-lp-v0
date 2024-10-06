/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0068b7',
        'secondary': '#00a0e9',
        'accent': '#e60012',
      },
      fontFamily: {
        'sans': ['Noto Sans JP', 'sans-serif'],
      },
    },
  },
  plugins: [],
}