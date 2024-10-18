/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'main': 'var(--main-shadow)',
        'sub': 'var(--sub-shadow)',
      },
      colors: {
        'primary': 'hsl(var(--primary))',
        'secondary': 'hsl(var(--secondary))',
        'background': 'hsl(var(--background))',
        'text': 'hsl(var(--text))',
        'accent': 'hsl(var(--accent))',
        'transparent': 'transparent',

        'left': 'var(--left-mask)',
        'center': 'var(--dual-mask)',
        'right': 'var(--right-mask)',
      }
    },
  },
  plugins: [],
}