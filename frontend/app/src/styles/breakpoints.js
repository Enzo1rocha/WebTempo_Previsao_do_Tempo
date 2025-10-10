export const size = {
  mobileXS: '319px',
  mobileS: '320px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1025px',
  laptopL: '1440px',
  desktop: '2560px'
};

export const device = {
  mobileXS: `(max-width: ${size.mobileXS})`,
  mobileS: `(min-width: ${size.mobileS})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop}`
};