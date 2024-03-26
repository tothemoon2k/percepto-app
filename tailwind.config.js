/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      maxWidth: {
      '8xl': '90rem',
      '9xl': '100rem',
    }
  }
  },
  plugins: []
};