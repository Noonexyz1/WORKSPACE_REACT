import './EstiloTarea.css'

export function EstilosConClases() {
  return (
    <div className='tarjeta' >
      <h1>Hola Mundo</h1>
      <p>Tarea realizada</p>

    </div>
  )
}
export function EstilosConClasesEJERCICIO({valor = "###"}) {
  return (
    <div className='tarjeta'>
      <h1>Mi Primera Tarea:</h1>
      <span className={valor? 'verde-clase-css':'rojo-clase-css'}>
        
        {valor? 'Tarea Realizada':'Tarea Pendiente'}

      </span>

    </div>
  )
}



export function EstilosEnLinea() {
  return (
    <div style={{
      background: "#202020",
      color: '#fff',
      padding: '20px'
    }}>
      <h1>Hola Mundo</h1>
      <p>Tarea realizada</p>

    </div>
  )
}

export function EstilosEnVariable() {
  let estiloVariable = {
    background: "#202020",
    color: '#fff',
    padding: '20px'
  }

  let estiloTitulo = {
    fontWeight: "lighter"
  }

  return (
    <div style={estiloVariable}>
      <h1 style={estiloTitulo}>Hola Mundo</h1>
      <p>Tarea realizada</p>

    </div>
  )
}



