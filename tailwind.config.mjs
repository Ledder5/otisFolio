/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class', 
  theme: {
    extend: {
      // Tell Tailwind to link the 'accent' class name to your CSS variable
      colors: {
        accent: 'var(--accent)',
      }
    },
  },
  plugins: [typography],
};
