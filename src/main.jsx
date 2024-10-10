import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/styles.css';

// Obtém o elemento raiz pelo ID
const rootElement = document.getElementById('app');

// Verifica se o elemento de raiz existe
if (!rootElement) {
  console.error("Elemento com ID 'app' não encontrado.");
} else {

  const root = ReactDOM.createRoot(rootElement);


  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
