module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#00060c', // Rouge très sombre, proche du noir (pour le fond principal)
        secondary: '#D40000', // Rouge vif (ex : pour les accents et éléments secondaires)
        tertiary: '#8B0000', // Rouge foncé classique (utilisé pour certains éléments de texte)
        'black-100': '#100D15', // Noir légèrement teinté de rouge
        'black-200': '#0A0105', // Très foncé, presque noir
        'white-100': '#F2F2F2', // Blanc très doux (pour les textes clairs sur fond sombre)
        'red-light': '#FF4F4F', // Rouge clair, utilisé pour des hover ou boutons
        'red-dark': '#660000', // Rouge plus sombre pour des éléments comme les bordures ou survols
        'black-muted': '#3E1F1D', // Variante de noir/marron foncé, pour les fonds ou zones discrètes
      },
      boxShadow: {
        card: '0 35px 120px -15px rgba(0, 0, 0, 0.7)', // Ombre douce noire
      },
      screens: {
        xs: '450px',
      },
      backgroundImage: {
        'hero-pattern': `url(/herobg.png)`,
      },
    },
  },
  plugins: [],
};
