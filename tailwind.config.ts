import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  plugins: [require('daisyui'), {
    themes: ["light", "dark"],
    strategy: 'class', // only generate classes don't add opinions
  }],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {

      height: {
        '128': '32rem',
      },
      width: {
        '128': '32rem',
      },
      colors: {
        'light-text': '#222222',
        'light-header': '#F2F2F2',
        'dark-bg': '#1D1D20',
        'dark-text': '#a9a9b3',
        'dark-header': '#252627',
      },
      screens: {
        'xs': '300px',
      },
    },
  },
};
export default config;
