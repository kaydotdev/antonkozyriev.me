import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    const pageRoot = document.querySelector('html');
    if (!!pageRoot) { pageRoot.className = event.matches ? "dark" : "light"; }
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<React.StrictMode><App /></React.StrictMode>);

reportWebVitals();
