/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        palette: {
          50: '#f8f9fa',
          100: '#e9ecef',
          200: '#dee2e6',
          300: '#ced4da',
          400: '#adb5bd',
          500: '#6c757d',
          600: '#495057',
          700: '#343a40',
          800: '#212529',
        },
      },
      fontFamily: {
        sans: ['Ranade', 'system-ui', 'sans-serif'],
        display: ['Excon', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
