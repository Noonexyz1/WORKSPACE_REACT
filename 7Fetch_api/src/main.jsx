import React from 'react'
import ReactDOM from 'react-dom/client'
import {App, Publicacion} from './App.jsx'

const elementoDivIndex = document.getElementById("root");
const elementoDivIndexReact = ReactDOM.createRoot(elementoDivIndex);
elementoDivIndexReact.render(
  <>
    <App></App> <br />
    <Publicacion/>


  </>

);
