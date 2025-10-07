/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        // 🎯 Palette principale
        primary: '#0a0a0a', // Noir profond pour fond global
        secondary: '#D40000', // Rouge accent principal (logos, boutons)
        accent: '#FF1A1A', // Rouge lumineux, effet “glow”
        highlight: '#FF4D4D', // Rouge clair pour hover ou texte accentué

        // 🌑 Nuances de noir
        'black-50': '#1A1A1A',
        'black-100': '#100D15',
        'black-200': '#0A0105',
        'black-300': '#050505',
        'black-muted': '#2A1B1B', // légèrement chaud

        // 🩸 Variantes rouges
        'red-light': '#FF4F4F',
        'red-medium': '#B22222',
        'red-dark': '#660000',
        'red-muted': '#4A0E0E',

        // ⚪️ Blancs et gris doux
        'white-100': '#F2F2F2',
        'white-200': '#E5E5E5',
        'gray-100': '#B3B3B3',
        'gray-200': '#808080',
        'gray-300': '#4D4D4D',

        // 🌀 Dégradés et transparences
        'gradient-dark': 'linear-gradient(180deg, #0A0A0A 0%, #1A0000 100%)',
        'gradient-red': 'linear-gradient(90deg, #D40000 0%, #8B0000 100%)',
      },

      boxShadow: {
        card: '0 35px 120px -15px rgba(0, 0, 0, 0.7)',
        glow: '0 0 15px 2px rgba(212, 0, 0, 0.6)', // effet rouge doux
        'inner-red': 'inset 0 0 15px rgba(255, 0, 0, 0.4)',
      },

      backgroundImage: {
        'hero-pattern': "url('/herobg.png')",
        'gradient-radial':
          'radial-gradient(circle at center, rgba(255,0,0,0.15), rgba(0,0,0,0.95))',
      },

      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },

      screens: {
        xs: '450px',
      },

      transitionTimingFunction: {
        pulse: 'cubic-bezier(0.4, 0, 0.6, 1)',
      },
    },
  },
  plugins: [],
};
