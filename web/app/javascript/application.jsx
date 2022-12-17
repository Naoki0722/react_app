// Entry point for the build script in your package.json
import React from 'react';
import { createRoot } from 'react-dom/client';


const App = ({name}) => {
  return (
    <h1>Hello World</h1>
  )
};

const root = document.querySelector('#root');
if (!root) {
  throw new Error('No root element');
}


createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);