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
    "maximumFractionDigits": 6,
  },
};

export const formatCurrencySum = (
    value,
    params = defaultOptions,
) => {
  const locale = params?.locale || defaultOptions.locale;
  const options = {
    ...defaultOptions.options,
    ...(params?.options || {}),
  };
  return new Intl.NumberFormat(locale || 'en', options).format(Number(value));
};
