import React from 'react'
import ReactDOM from 'react-dom/client'

import { App, Boton, Input,Submit, MouseOverAndOut } from './App'


let elementoDivIndex = document.getElementById("root")
let elementoDivIndexReact = ReactDOM.createRoot(elementoDivIndex)
elementoDivIndexReact.render(
  <>
    <App/> <br/>
    <Boton/><br/>
    <Input/><br/>
    <Submit/><br/>
    <MouseOverAndOut/><br/>

  </>
);