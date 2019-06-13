import React from 'react';

const Dashboard = React.lazy(() => import('./containers/Dashboard/Dashboard'))
const About = React.lazy(() => import('./containers/About/About'))

export const routeStaff = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/about', name: 'About', component: About }
];

export const routeMember = []

