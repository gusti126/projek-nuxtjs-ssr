module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'hijau-button': '#00731C',
        'hijau-header': '#45A298',
        'hijau-tokped': '#032314',
      },
      fontFamily: {
        poppins: ['Poppins'],
      },
      backgroundImage: (theme) => ({
        'hero-pattern': 'url(~/assets/image/bg-header.png)',
        'hero-galang-dana': 'url(~/assets/image/bg-header-galang.svg)',
        'hero-pattern-mobile': 'url(~/assets/image/bg-header-md.png)',
        'hero-pattern-tokped': 'url(~/assets/bg-new.png)',
      }),
      minHeight: {
        'hero-mobile': '50%',
        'hero-desktop': '700px',
      },
      spacing: {
        '600px': '600px',
      },
      boxShadow: {
        'hijau-hmi': '1px 1px 6px 3px rgba(0, 115, 28, 0.55)',
        'hijau-hmi2': ' 1px 3px 14px 1px rgba(0, 115, 28, 0.55);',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}
