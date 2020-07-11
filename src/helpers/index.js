import * as theme from './theme';

export { theme };
export {
  getColorByName,
  getMediaWidthByName,
  getTypographyByName,
  getFamilyByName,
  createTypographyStyleByName,
} from './decorators';

export {
  useOutsideAlerter,
} from './hooks';

export {
  default as styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
} from './styled-components';

const defaultOptions = {
  locale: 'en',
  options: {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 6,
  },
};

export function shuffle(array) {
  let currentIndex = array.length; let temporaryValue = ''; let
    randomIndex = 0;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
