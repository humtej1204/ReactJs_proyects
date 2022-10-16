import React from 'react';
import ReactDOM from 'react-dom/client';

/* Components */
import { App } from './App';

/* Styles */
import './index.scss';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
