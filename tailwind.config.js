module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  plugins: [
    require('@tailwindcss/line-clamp'),
    // ...
  ],
  theme: {
    extend: {
      colors: {
        primary: '#B72530',
        'primary-light': '#be3b45',
        secondary: '#3f434c',
        tertiary: '#222446',
        'grey-light-1': '#F6F8FB',
        'grey-light-2': '#e6e9ed',
        accents_0: '#f8f9fa',
        accents_1: '#f1f3f5',
        accents_2: '#e9ecef',
        accents_3: '#dee2e6',
        accents_4: '#ced4da',
        accents_5: '#adb5bd',
        accents_6: '#868e96',
        accents_7: '#495057',
        accents_8: '#343a40',
        accents_9: '#212529',
      },
      fontSize: {
        medium: [
          '0.945rem',
          {
            lineHeight: '1.275rem',
          },
        ],
      },
      boxShadow: {
        white: '0 0 0 0 #fff',
        card: '0 12px 26px rgb(0 0 0 / 6%)',
        box: '0 6px 12px 0 rgba(0, 0, 0, 0.25);',
        navbar: '0px 11px 6px -6px rgb(0 0 0 / 22%)',
      },
      backgroundColor: {
        'white-layer': 'rgba(255, 255, 255, 0.7)',
        'black-alpha-0.7': 'rgba(0, 0, 0, 0.79)',
        'black-alpha-0.6': 'rgba(0, 0, 0, 0.69)',
      },
      backgroundSize: {
        '100%': '100% 100%',
      },
      backgroundPosition: {
        '0%': '0% 0%',
        'top-4': 'center top 10rem',
      },
      borderRadius: {
        '1/2': '50%',
      },
    },
    lineHeight: {
      3: '0.75rem !important',
      4: '1rem !important',
      5: '1.25rem !important',
      6: '1.5rem !important',
      7: '1.75rem !important',
      8: '2rem !important',
      9: '2.25rem !important',
      10: '2.5rem !important',
      loose: '2 !important',
      relaxed: '1.625 !important',
      normal: '1.5 !important',
      snug: '1.375 !important',
      tight: '1.25 !important',
      none: '1 !important',
    },
    fontFamily: {
      playfair: ['Playfair Display', 'serif'],
      lato: ['Lato', 'sans-serif'],
      rubik: ['Rubik', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
    },
  },
  variants: {
    extend: {
      padding: ['hover'],
      display: ['hover', 'group-hover'],
      borderWidth: ['hover', 'focus'],
      visibility: ['hover', 'group-hover'],
      inset: ['hover', 'group-hover'],
      borderWidth: ['responsive', 'last', 'hover', 'focus'],
      margin: ['last', 'hover', 'focus', 'group-hover'],
      backgroundColor: ['even', 'odd'],
    },
  },
  plugins: [],
}
