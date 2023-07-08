import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './App.jsx'

let elementDivIndex = document.getElementById("idRoot")
let elementDivIndexReact = ReactDOM.createRoot(elementDivIndex)

elementDivIndexReact.render(
  <>
    <App />
  </>
);
