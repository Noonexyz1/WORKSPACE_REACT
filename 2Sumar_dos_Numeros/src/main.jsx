import React from 'react'
import ReactDOM from 'react-dom/client'

import CalculadoraSuma from './CalculadoraSuma.jsx'

let elementoRootDivIndex = document.getElementById("root")
let elementoRootDivIndexReact = ReactDOM.createRoot(elementoRootDivIndex)

elementoRootDivIndexReact.render(
  <>
    <CalculadoraSuma/>
  </>
);

