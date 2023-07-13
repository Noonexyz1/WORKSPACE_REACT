import React from 'react'
import ReactDOM from 'react-dom/client'
import { App, Contador, Formulario } from './App.jsx'
import './index.css'


const elementDivIndex = document.getElementById("root")
const elementDivIndexComponente = ReactDOM.createRoot(elementDivIndex);
elementDivIndexComponente.render(
  <>
    <App></App>
    <Contador></Contador>
    <Formulario></Formulario>
  </>

); 
