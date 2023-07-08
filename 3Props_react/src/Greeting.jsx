export function Greeting(props) {
  console.log(props);
  //let nombreProp = props.a.nombre;
  //console.log(nombreProp);

  return (
    <>
      <h1>Componente de Greeting</h1>
      <h2>Mostrando los valores que tiene PROPS:</h2>
      <p>{props.y}</p>
      <p>{props.z}</p>
      <p>{props.a.nombre}</p>
      <p>{props.vector[3].nombre}</p>

    </>
  )
}

/*DESESTRUCTURING*/
export function UserCard({ y = "###", z = "###", a = { nombre: "###", edad: "###", peso: "###" }, vector = ["###", "###", "###", { nombre: "###", tamano: "###" }], miFuncion = () => { alert("Estoy Saludando... POR DEFECTO"); } }) {
  console.log(miFuncion);

  return (
    <>
      <h1>Componente UserCard DESCTRUCTURING</h1>
      <h2>Mostrando los valores que tiene DESCTRUCTURING:</h2>
      <p>{y}</p>
      <p>{z}</p>
      <p>{a.nombre}</p>
      <p>{vector[3].nombre}</p>
      <p>{miFuncion()}</p>
    </>
  );
}



function OtroComponente(){
  return (
    <>
      <h1>Otro Componente</h1>
    </>
  )
}

export default OtroComponente
