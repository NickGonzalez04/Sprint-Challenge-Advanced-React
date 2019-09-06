import React from 'react';
// React testing library includes a render method to mount our components to an in-memory DOM
import * as rtl from '@testing-library/react';
import App from './App';
import NavBar from './components/navBar';




afterEach(rtl.cleanup);

it('renders without crashing', () => {
 // test in here
 rtl.render(<App />)
});

it('renders without crashing', () => {
  // test in here
  rtl.render(<NavBar />)
 });

