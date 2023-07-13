import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { useState, useEffect } from 'react'

export function App() {
  return (
    <div>
      <h1>Componente App</h1>
    </div>
  )
}

export function Contador(){
  const [contador, setContador] = useState(0);
  useEffect(() => {console.log("ESTE ES EL EFECTO DE UN CAMBIO A UN useState()")}, [contador]);

  //Cada vez que se detecte un cambio en el componente
  //useEffect(() =>{});

  //Se Ejecuta solo una vez cada vez que se carga un componente
  //useEffect(() => {}, []);

  return(
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={() => setContador(contador + 1)}>Sumar 1</button>
      <button onClick={() => setContador(contador - 1)}>Restar 1</button>
      <button onClick={() => setContador(0)}>Reiniciar</button>
    </div>
  );
}

export function Formulario() {
  const [mensaje, setMensaje] = useState("");

  return(
    <div>
      <input type="text" onChange={e => setMensaje(e.target.value)}/>
      <button onClick={() => {
        alert("El mensaje es: " + mensaje)
      }}>Guardar</button>
    </div>
  );
}



