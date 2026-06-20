/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  corePlugins: { preflight: false },
  theme: {
    extend: {
      colors: {
        dark: { bg: '#0a0b0f', card: '#13141a', border: '#1e2030', hover: '#1a1b24' },
        brand: { green: '#00d68f', 'green-dim': '#00b374' },
      }
    }
  },
  plugins: [],
}
