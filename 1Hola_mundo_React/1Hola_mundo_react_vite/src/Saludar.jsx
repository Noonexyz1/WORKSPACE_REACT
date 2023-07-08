function sumarDosNumeros(a, b){
  return a + b;
}


export function Saludar() {
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
}

export function Usuario(){
    return <div>
        Mostramos un usuario Aqui jaja
    </div>
}