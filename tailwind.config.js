
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: {
    fontFamily: {
      sans: ['var(--font-jakarta)'],
      heading: ['var(--font-outfit)'],
    },
    colors: {
        primary: 'var(--primary-color)',
      },
  }, },
  plugins: [],
}
