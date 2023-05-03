import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import Providers from './lib/Providers';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Providers>
    <App />
  </Providers>
);
