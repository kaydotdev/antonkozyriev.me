import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';

const matchTheme = (matches: boolean) => { const pageRoot = document.querySelector('html'); if (!!pageRoot) { pageRoot.className = matches ? "dark" : "light"; } }

matchTheme(window.matchMedia('(prefers-color-scheme: dark)').matches);
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => matchTheme(event.matches));

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<React.StrictMode><App /></React.StrictMode>);

reportWebVitals();
