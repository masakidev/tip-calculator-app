module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        strongcyan: 'hsl(172, 67%, 45%)',
        verydarkcyan: 'hsl(183, 100%, 15%)',
        darkgrayishcyan: 'hsl(186, 14%, 43%)',
        darkgrayishcyan2: 'hsl(184, 14%, 56%)',
        lightgrayishcyan: 'hsl(185, 41%, 84%)',
        lightgrayishcyan2: 'hsl(189, 41%, 97%)',
        white: 'hsl(0, 0%, 100%)',
      },
      fontFamily: {
        spacemono: 'Space Mono',
      },
      letterSpacing: {
        personalized: '.4em',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
      colors: ['checked'],
    },
  },
  plugins: [],
}
