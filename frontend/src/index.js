import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import path
import './index.css';
import App from './App';

// Locate the root element in the HTML
const container = document.getElementById('root');

// Create a root using ReactDOM.createRoot
const root = ReactDOM.createRoot(container);

// Render the App component within React.StrictMode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

