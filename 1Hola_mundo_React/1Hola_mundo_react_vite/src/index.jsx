//PARA HACER BUILD
//npm run build
//npm run preview

import React from "react";
import ReactDOM from "react-dom/client";

//importando el componente Saludar
import {Saludar, Usuario} from './Saludar.jsx'

//A medida que lo voy importando, se exportara todo por defecto
import Producto, {Navbar} from "./Producto.jsx"


let componenteInicialRoot = document.getElementById("root");
let elementoDivIndexReact = ReactDOM.createRoot(componenteInicialRoot);

/*function sumarDosNumeros(a, b){
  return a + b;
}


function Saludar() {
  let miNombre = "Diego Diomir";

  let usuario = {
    nombre: "Diego",
    peso: 23.45,
    casado: false
  }

  return (
    <div>
      <h1>Este es un componente</h1>
      <p>Lorem 123</p>
      <p>Mi Nombre es: {miNombre}</p>
      <p>sumar dos numero 10 + 10: {10 + 10}</p>
      <p>Mostrar objeto Usuario: {JSON.stringify(usuario)}</p>
      <p>Mostrar Nombre objeto: {usuario.nombre}</p>
      <p>Mostrar true o false: {usuario.casado.toString()}</p>
      <p>mostrar sumacon funcion: {sumarDosNumeros(5, 5)}</p>
    </div>
  );
}*/

elementoDivIndexReact.render(
  //siempre me debe devolver un componente (<> <Saludar/> </>)
  <>
    <Saludar/>
    <Saludar/>
    <Usuario/>
    <Usuario/>
    <Producto/>
    <Navbar/>
  </>
);
