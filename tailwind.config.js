/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        mint: '#B8E6D1',
        sea: '#7DD3C0',
        off: '#FEFEFE',
        charcoal: '#2D3748',
        slate1: '#F8FAFC',
        slate2: '#E2E8F0',
      },
      fontFamily: {
        sans: ['system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const glassUtilities = {
        '.glass': {
          'background': 'rgba(255, 255, 255, 0.1)',
          'backdrop-filter': 'blur(10px)',
          '-webkit-backdrop-filter': 'blur(10px)',
          'border': '1px solid rgba(255, 255, 255, 0.2)',
          'box-shadow': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        },
        '.glass-dark': {
          'background': 'rgba(45, 55, 72, 0.8)',
          'backdrop-filter': 'blur(16px)',
          '-webkit-backdrop-filter': 'blur(16px)',
          'border': '1px solid rgba(255, 255, 255, 0.1)',
          'box-shadow': '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
        },
        '.glossy': {
          'background': 'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.05) 100%)',
          'backdrop-filter': 'blur(12px)',
          '-webkit-backdrop-filter': 'blur(12px)',
          'border': '1px solid rgba(255, 255, 255, 0.3)',
          'box-shadow': '0 12px 40px 0 rgba(31, 38, 135, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
          'position': 'relative',
          '&::before': {
            'content': '""',
            'position': 'absolute',
            'top': '0',
            'left': '0',
            'right': '0',
            'height': '1px',
            'background': 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent)',
          },
        },
      }
      addUtilities(glassUtilities)
    }
  ],
}
