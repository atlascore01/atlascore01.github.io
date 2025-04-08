/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'atlascorePrimario': '#8BD990',
        'atlascoreSecundario': '#4B4BA1',
        'atlascoreDark': '#023A40'
      },
      fontFamily: {
        'display': ['Syne', 'sans-serif'],         // Para títulos principales
        'tech': ['Chakra Petch', 'sans-serif'],    // Para subtítulos técnicos
        'sans': ['Space Grotesk', 'sans-serif'],   // Para texto general
      },
      keyframes: {
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
          },
      },
      animation: {
        gradient: 'gradient 8s linear infinite'
      },
    },
  },
  plugins: [],
}

