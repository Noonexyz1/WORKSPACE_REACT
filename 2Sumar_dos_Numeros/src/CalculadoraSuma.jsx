//"e" es el objeto de evento que se pasa a la función sumar cuando se 
//envía el formulario mediante la función onSubmit.
function sumar(e){

  //evitar que el formulario se envíe y la página se recargue.
  e.preventDefault();

  let v1 = parseInt(e.target.valor1.value);
  let v2 = parseInt(e.target.valor2.value);

  alert("La suma es: " + (v1 + v2));
}

function CalculadoraSuma() {

  return (
    <>
      <form onSubmit={sumar}>
        <p>Ingrese valor 1:</p>
        <input type="number" name="valor1"/>

        <p>Ingrese valor 2:</p>
        <input type="number" name="valor2"/>

        <p></p>
        <input type="submit" value="sumar"/>

      </form>
    </>
  )
}

export default CalculadoraSuma
