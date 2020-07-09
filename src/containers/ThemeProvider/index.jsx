import React from 'react';
import { ThemeProvider } from 'helpers/styled-components';
import { tokens } from 'helpers/theme';

export default class Component extends React.PureComponent {
  render() {
    const { children } = this.props;
    return (
      <ThemeProvider theme={tokens}>
        <>
          {children}
        </>
      </ThemeProvider>
    );
  }
}
