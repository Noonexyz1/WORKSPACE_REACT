import { Encabezado } from './Header'
import { Navegacion } from './Nav'
import { Seccion } from './Section'
import { PieDePagina } from './Footer'

import './App.css'

export function App() {
  return (
    <div className='contenedor-clase'>
      <Encabezado titulo="Este es el titulo" />

      <Navegacion quienesSomos="Quienes Somos"
                  contacto="Contactanos"
                  ubi="Ubicacion"
                  comp="Comprar" />

      <Seccion tituloArticulo="Titulo de la Seccion"
               contenidoArticulo="Aqui va todo el contenido Lorem Ipsum 123" 
               tituloAside="Titulo de la Aside"
               contenidoAside="Aqui va todo el contenido Lorem Ipsum 123 Aside" />

      <PieDePagina titulo="Informacion Adicional" />

    </div>
  )
}

