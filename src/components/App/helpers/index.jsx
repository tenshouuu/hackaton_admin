import React from 'react';
import { Redirect } from 'react-router-dom';
import Auth from 'pages/Auth';
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
    path: '/(dashboard|resume|favorite|declined|archive|settings)/:params?',
  },
  {
    Component: Auth,
    exact: false,
    path: '/login',
  },
  {
    Component: () => <div>Logout</div>,
    exact: true,
    path: '/logout',
  },
];


