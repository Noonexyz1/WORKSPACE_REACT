export function App() {

  let usuario = [
    {
      id: 1,
      nombre: "Diego",
      imagen: "https://robohash.org/user1"
    },
    {
      id: 2,
      nombre: "Carlos",
      imagen: "https://robohash.org/user2"
    }
  ];

  return (
    <div>
      {usuario.map((objeto, indice) => {
        return(
          <div key={indice}>
            <h1> {objeto.id} </h1>
            <div> {objeto.nombre} </div>
            <img src={objeto.imagen}/>
          </div>
        ) 
      })}
    </div>
  )
}




