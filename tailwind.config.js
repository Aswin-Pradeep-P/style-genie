module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  
  theme: {
    colors: {
      transparent: 'transparent',
      black: '#000000',
      white: '#FFFFFF',
      green: {
        1: '#cfe0c3',
        2: '#9ec1a3',
        3: '#70a9a1'
      },
      blue: {
        1: '#40798C',
        2: '#1f363d'
      },
      purple: {
        1: '#F8F6FE',
        2: '#F4F1FE',
        3: '#E5DEFC',
        4: '#DED5FB',
        5: '#5536DB',
        6: '#4C2BD9',
        7: '#4022BE',
        8: '#5436DB'
      },
      yellow: {
        1: '#FFB803',
        2: '#FE9B08',
        2.5: '#FF7A0B',
        3: '#FF640D',
        4: '#FB3C3C'
      },
      pink: {
        1: '#F05DC7',
        2: '#A539F9'
      },
      dark: {
        1: '#0E0E0E',
        2: '#161616'
      }
    },
    fontSize: {
      sm: ['12px', '16px'],
      base: ['14px', '21px'],
      md: ['15px', '21px'],
      lg: ['18px', '25px'],
      xl: ['24px', '33px'],
      '2xl': ['36px', '49px']
    },
    fontWeight: {
      normal: '400',
      semibold: '600',
      bold: '700'
    },
    boxShadow: {
      0: '0px 0px 0px rgba(0, 0, 0, 0)',
      1: '0px 2px 10px rgba(0, 0, 0, 0.1)',
      2: '0px 4px 10px rgba(0, 0, 0, 0.1)',
      3: '2px 0px 6px rgba(0, 0, 0, 0.04)',
      4: '0px 4px 10px rgba(0, 0, 0, 0.04)',
      5: '0px 0px 1px rgba(0, 0, 0, 0.14)',
      6: '0px 4px 6px rgba(0, 0, 0, 0.16)',
      7: '0px 1px 8px rgba(0, 0, 0, 0.14)',
      8: '0px 1px 6px rgba(0, 0, 0, 0.08)',
      9: '0px 2px 8px rgba(0, 0, 0, 0.12)'
    },
    extend: {
      height: {
        9: '2.25rem'
      },
      maxHeight: {
        10: '2.5rem',
        15: '3.75rem',
        56: '14rem',
        100: '30rem'
      },
      minHeight: {
        10: '2.5rem'
      },
      minWidth: {
        6: '1.5rem',
        8: '2rem',
        12: '3rem',
        34: '8.5rem',
        50: '12.5rem',
        60: '18.75rem',
        70: '22.5rem',
        86: '26.5rem',
        150: '37.5rem'
      },
      maxWidth: {
        25: '6.25rem',
        40: '10rem',
        56: '14rem'
      },
      opacity: {
        99: '.99',
        12: '.12',
        10: '.1',
        20: '.2',
        6: '.06'
      },
      spacing: {
        full: '100%',
        14: '3.5rem',
        18: '4.5rem'
      },
      width: {
        25: '6.25rem',
        30: '7.5rem',
        58: '18.75rem',
        68: '19.75rem',
        70: '22.5rem',
        86: '26.5rem',
        120: '30rem'
      }
    }
  },
  plugins: []
};
