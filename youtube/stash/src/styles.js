export const Colors = {
  whiteLabel: 'rgba(255, 255, 255, 0.54)',
  blackLabel: 'rgba(0, 0, 0, 0.87)',
  background: '#27262f',
  surface: '#242424',
  surfaceLight: '#c0b3a3',

  white: '#ffffff',

  KEYWORD: '#ff6470',
  TEXT: '#ACB3BF',
  FUNCTION: '#ffc66d',
  STRING: '#99C47A',
  NUMBER: '#68ABDF',
  PROPERTY: '#AC7BB5',
  COMMENT: '#808586',

  red: '#ef5350',
  green: '#8bc34a',
  blue: '#2196f3',
  blueSky: '#c5e1eb',

  shinyYellow: '#f7c744',
  mainBranch: '#76389b',
  featureBranch: '#36ba96',
  bugfixBranch: '#08a0bc',
};

export const BaseFont = {
  fontFamily: 'JetBrains Mono',
  fontWeight: 700,
  fontSize: 28,
};

export const WhiteLabel = {
  ...BaseFont,
  fontSize: 48,
  fill: Colors.whiteLabel,
};
export const BlackLabel = {
  ...BaseFont,
  fill: Colors.blackLabel,
};
