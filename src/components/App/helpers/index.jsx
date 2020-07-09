import React from 'react';
import { Redirect } from 'react-router-dom';
import Auth from '../../Auth';
import Layout from '../../Layout';

export const routes = [
  {
    Component: () => <Redirect to="/dashboard" />,
    exact: true,
    path: '/',
  },
  {
    Component: Layout,
    exact: false,
    path: '/(dashboard|resume)/:params?',
  },
  {
    Component: Auth,
    exact: false,
    path: '/auth',
  },
  {
    Component: () => <div>Logout</div>,
    exact: true,
    path: '/logout',
  },
];


