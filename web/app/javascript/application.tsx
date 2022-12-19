import React from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  return <h1>Hello World</h1>;
}

const root = document.querySelector('#root');
if (!root) {
  throw new Error('No root element');
}
createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
