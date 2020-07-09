import React from 'react';
import {
  BrowserRouter as Router, Route, Redirect, Switch,
} from 'react-router-dom';

import { ErrorBoundary, ThemeProvider } from 'containers';
import { AppRoot } from './styled';
import { routes } from './helpers';

import 'assets/index.css';
import './index.less';

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <Router>
          <AppRoot>
            <Switch>
              {routes.map(({
                Component, path, ...props
              }, i) => (
                <Route
                  key={i}
                  path={`${path}`}
                  component={Component}
                  {...props}
                />
              ))}
              <Route component={() => <Redirect to="/auth" />} />
            </Switch>
          </AppRoot>
        </Router>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default React.memo(App);
