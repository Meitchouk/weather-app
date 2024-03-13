import React from 'react';
import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';
import './utilities/i18n';

const root = createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
