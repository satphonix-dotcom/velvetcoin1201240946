/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'heading': ['Hiragino Mincho ProN', 'serif'],
        'body': ['Avenir', 'sans-serif'],
      },
      colors: {
        'primary': '#1a1a1a',
        'secondary': '#333333',
        'accent': '#c6a55c',
        'text': {
          'primary': '#ffffff',
          'secondary': '#cccccc',
        }
      },
      height: {
        'hero': '600px',
      },
      spacing: {
        'section': '120px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}