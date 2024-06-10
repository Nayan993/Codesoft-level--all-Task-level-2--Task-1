import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/App.css';
import App from './App';

// Assuming there is a div with id 'root' in your public/index.html
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
