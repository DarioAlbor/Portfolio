/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
      },
      keyframes: {
        'meteor-effect': {
          '0%': {
            transform: 'rotate(135deg) translateX(0)',
            opacity: 0
          },
          '5%': {
            opacity: 1
          },
          '40%': {
            opacity: 1
          },
          '100%': {
            transform: 'rotate(135deg) translateX(-500px)',
            opacity: 0
          }
        },
        'meteor-head': {
          '0%, 100%': {
            opacity: 1,
            transform: 'scale(1)'
          },
          '50%': {
            opacity: 0.6,
            transform: 'scale(1.1)'
          }
        },
        'meteor-tail': {
          '0%': {
            opacity: 0.3,
            transform: 'scaleX(1)'
          },
          '30%': {
            opacity: 1,
            transform: 'scaleX(1.2)'
          },
          '100%': {
            opacity: 0,
            transform: 'scaleX(0.5)'
          }
        }
      },
      animation: {
        'meteor-effect': 'meteor-effect 3s ease-out forwards',
        'meteor-head': 'meteor-head 0.75s ease-in-out infinite',
        'meteor-tail': 'meteor-tail 1s ease-out infinite'
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}