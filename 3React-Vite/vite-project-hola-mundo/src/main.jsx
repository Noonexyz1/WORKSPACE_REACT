import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const elemento = document.getElementById('root')
ReactDOM.createRoot(elemento).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
