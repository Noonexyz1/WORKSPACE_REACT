export function App() {
  return (
    <>
      Hola Mundo desde App
    </>
  )
}

export function Boton(){
  function hacerClick(){
    alert('Haz hecho click en el boton')
  }

  let hacerClickFlecha = () => {
    alert('Haz hecho click en el boton FLECHA')
  }

  return (
    <button onClick={hacerClickFlecha}>
      Haz Click Aqui
    </button> )
}


export function Input(){
  let hacerChange = (e) => {
    console.log('Nuevo valor:', e.target.value);
  }

  return (
    <input type="text" onChange={hacerChange}/>
  )
      
}


export function Submit() {
  let hacerSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario Enviado');
  }

  return (
    <form onSubmit={hacerSubmit}>
      <input type="text" />
      <button type="submit">Enviar</button>
    </form>
  )
}


export function MouseOverAndOut() {
  let mouseOverManejador = () => {
    console.log('El mouse esta ENCIMA el elemento');
  }
  let mouseOutManejador = () => {
    console.log('El mouse esta AFUERA el elemento');
  }

  return (
    <div onMouseOver={mouseOverManejador} onMouseOut={mouseOutManejador}>
      Papa el mouse por Aqui
    </div>
  )

}




