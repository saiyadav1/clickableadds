
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: {
    fontFamily: {
      sans: ['var(--font-jakarta)'],
      heading: ['var(--font-outfit)'],
    },
    colors:{
      primary: 'var(--color-primary)',
      secondary: 'var(--color-secondary)',
      thirdary: 'var(--color-thirdary)',
      boxslate: 'var(--color-box-slate)',
    }
  }, },
  plugins: [],
}
