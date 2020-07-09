import React from 'react';

class ErrorBoundary extends React.Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    errorFound: false,
  };

  componentDidCatch(error, info) {
    this.setState({ errorFound: true });
    // in this case I also want to send more information to Sentry
    console.error(error, info);
  }

  render() {
    // eslint-disable-next-line react/destructuring-assignment
    if (this.state.errorFound) {
      return <span>Something went wrong...</span>;
    }

    const { children } = this.props;
    return <>{children}</>;
  }
}

export default ErrorBoundary;
