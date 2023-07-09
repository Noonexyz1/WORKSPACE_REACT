export function App() {

  return (
    <>
      Hola Mundo
    </>
  )
}

export const Publicacion = () => {
  return (
    <button onClick={() => {
      alert('Obteniendo Datos... ')

      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(respuesta => respuesta.json())
        .then(objeto => console.log(objeto))
      .catch(error => console.error(error))

    }}>
      Traer Datos
    </button>

  );
}







