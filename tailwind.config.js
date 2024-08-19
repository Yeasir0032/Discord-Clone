/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        moveLeft: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
      animation: {
        'move-left': 'moveLeft 100s linear infinite ',
      },
      animationDelay:{
        '200ms': '200ms',
        '400ms': '400ms',
        '600ms': '600ms',
        '800ms': '800ms',
        '5000ms': '5000ms', // For the "HANGOUT" text
      },
    },
  },
  plugins: [],
}