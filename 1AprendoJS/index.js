//variables de alcanze de bloque
//Prohibido hacer var
let x = 5
if (true) {
    //esta variable solo esta dentro del bloque
    let y = 6
    console.log("Valor de x: " + x)
    console.log("Valor de y: " + y)

    x++
    console.log("Valor de x + 1: " + x)
}
console.log(x)
//console.log(y)

let persona = {
    nombre: "Diego",
    edad: 28,
    estaCasado: true,
    altura: 1.74,
    valorNull: null,
    caminar: () => {console.log("Hola mundo desde metodo flecha")}

}
console.log(persona)
console.log(persona.nombre)
persona.caminar()


let persona2 = persona
//Camviando el valor de un atributos
persona.nombre = "Diego Diomir"



console.log(persona)
console.log(persona2)
console.table(persona)


let metodoAnonimo = () => {console.log("asdfasdf")}
metodoAnonimo()

let arreglo = ["Hola", 234, 23.45, true, 'c']
for(let i = 0; i < arreglo.length; i++){
    console.log(arreglo[i])
}


