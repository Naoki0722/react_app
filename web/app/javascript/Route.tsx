import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import Home from './screens/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: '/test',
        element: <p>testページ</p>,
      },
    ],
  },
]);

export default router;
