/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';

export default {
  // This tells Tailwind exactly where to look for your classes
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class', 
  theme: {
    extend: {},
  },
  // This activates the typography plugin
  plugins: [typography],
};
