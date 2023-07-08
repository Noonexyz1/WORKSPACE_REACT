import React from 'react'
import ReactDOM from 'react-dom/client'
import {EstilosEnLinea, EstilosEnVariable, EstilosConClases, EstilosConClasesEJERCICIO} from './App'


let elementoDivIndex = document.getElementById("root");
let elementoDivIndexReact = ReactDOM.createRoot(elementoDivIndex);
elementoDivIndexReact.render(
    <>
        <EstilosEnLinea/>
        <EstilosEnVariable/>
        <EstilosConClases/>
        <EstilosConClasesEJERCICIO valor={false}/>
        <EstilosConClasesEJERCICIO/>

    </>
);

