const mediaWidths = {
  desktop: 1472,
  desktopMin: 1280,
  tablet: 1024,
  mobile: 760,
  mobileMin: 320,
};

const palette = {
  semiGray: '#F2F3F8',
  primary: '#d6001e',
  blue: '#34AFE4',
  lightBlue: '#31C0FF',
  lightLazure: '#8BDAFF',
  lazure: '#1CACD8',
  semiBlue: '#24445B',
  semiDarkBlue: '#14374A',
  darkBlue: '#0A2936',
  brown: '#222222',
  gray: '#383c46',
  dark: '#011219',
  black: '#000000',
  white: '#FFFFFF',
};

const families = {
  poppins: 'Poppins, OpenSans, OpenSans-Regular',
};

const typography = {
  header1: {
    size: '60px',
    lineHeight: '50px',
    weight: '700',
  },
  header2: {
    size: '40px',
    lineHeight: '50px',
    weight: '700',
  },
  header3: {
    size: '30px',
    lineHeight: '50px',
    weight: '700',
  },
  header4: {
    size: '24px',
    lineHeight: '29px',
    weight: '700',
  },
  header5: {
    size: '20px',
    lineHeight: '30px',
    weight: '700',
  },
  header6: {
    size: '30px',
    lineHeight: '50px',
    weight: '700',
  },
  paragraph1: {
    size: '20px',
    lineHeight: '30px',
  },
  paragraph2: {
    size: '18px',
    lineHeight: '30px',
  },
  paragraph3: {
    size: '16px',
    lineHeight: '25px',
  },
  paragraph4: {
    size: '14px',
    lineHeight: '25px',
  },
  paragraph5: {
    size: '12px',
    lineHeight: '16px',
  },
};

const tokens = {
  families,
  palette,
  typography,
  mediaWidths,
};

module.exports = {
  tokens,
};
