/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'carbon-black': '#1C1C1C',
        'alabaster-grey': '#DADDD8',
        'soft-linen': '#ECEBE4',
        'platinum': '#EEF0F2',
        'ghost-white': '#FAFAFF',
        'accent-blue': '#42A5F5',
        'accent-orange': '#FFA726',
      },
      borderRadius: {
        'xl': '20px',
        '2xl': '28px',
      },
      fontFamily: {
        sans: ['Ranade', 'system-ui', 'sans-serif'],
        display: ['Excon', 'system-ui', 'sans-serif'],
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        '2xl': '48px',
      },
    },
  },
  plugins: [],
}
