import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
// We might want to import style.css here if we want Vite to handle it globally for React
// import '../style.css'; // Assuming style.css is in the root

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Failed to find the root element with ID 'root'.");
}
