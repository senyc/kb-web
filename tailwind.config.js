/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["light", "dark"],
  },
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'bg-text'
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
        dark: '#1D1D20',
        text: '#a9a9b3',
        header: '#252627'
      },
      screens: {
        'xs': '300px',
      },
    },
  },
}
