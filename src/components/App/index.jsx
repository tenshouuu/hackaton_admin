import React from 'react';
import {
  BrowserRouter as Router, Route, Redirect, Switch,
} from 'react-router-dom';
import { Provider } from 'react-redux';

import { ErrorBoundary, ThemeProvider, AuthCheck } from 'containers';
import configureStore from 'store/store';
import { AppRoot } from './styled';
import { routes } from './helpers';

import 'assets/index.css';
import './index.less';

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <Provider store={configureStore()}>
          <Router>
            <AuthCheck>
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
                  <Route component={() => <Redirect to="/login" />} />
                </Switch>
              </AppRoot>
            </AuthCheck>
          </Router>
        </Provider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default React.memo(App);
