function hexToRgbA(hex, opacity = 1) {
  let c;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('');
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = `0x${c.join('')}`;
    // eslint-disable-next-line no-bitwise
    return [(c >> 16) & 255, (c >> 8) & 255, c & 255, opacity];
  }
  return hex;
}

function convertCssRgbA(hex, opacity = 1) {
  const valuesArray = hexToRgbA(hex, opacity);
  if (valuesArray.length === 4) {
    return `rgba(${valuesArray.join(',')})`;
  }
  return hex;
}

function getColorByName(colorName, opacity = 1) {
  return (props) => {
    const { theme } = props;
    return colorName
      ? convertCssRgbA(theme.palette[colorName], opacity)
      : convertCssRgbA(theme.palette.white, opacity);
  };
}

function getTypographyByName(typographyName) {
  return (props) => {
    const { theme } = props;
    return theme.typography[typographyName] || '';
  };
}

function getMediaWidthByName(mediaName) {
  return (props) => {
    const { theme } = props;
    return `${theme.mediaWidths[mediaName] || 0}px`;
  };
}

function getFamilyByName(familyName) {
  return (props) => {
    const { theme } = props;
    return theme.families[familyName] || '';
  };
}

function createTypographyStyleByName(typographyName, customLineHeight = '') {
  return (props) => {
    const {
      weight,
      size,
      lineHeight,
    } = getTypographyByName(typographyName)(props);
    return `
            font-size: ${size};
            line-height: ${customLineHeight || lineHeight};
            ${weight ? `font-weight: ${weight}` : ''};
        ` || '';
  };
}

export {
  getColorByName,
  getMediaWidthByName,
  getTypographyByName,
  getFamilyByName,
  createTypographyStyleByName,
};
