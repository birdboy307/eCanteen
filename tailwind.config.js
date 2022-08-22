module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'charcoal': '#222222',
        'creamish': '#EAF2F4',
        'pastel': '#7BEA71',
        'pastel-hover': '#4FC844',
      },
      fontFamily: {
        heading: ['Dosis', 'sans-serif'],
      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1220px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1370px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px)
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
