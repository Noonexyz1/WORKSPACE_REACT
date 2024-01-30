/*console.log("Hola")
//tipo de dato big int
let numG = 99999999999999999n
console.log(numG)
console.log(typeof(numG))*/

let contador = 0
let elementSumar = document.getElementById('sumar')
let elementRestar = document.getElementById('restar')
let elementReset = document.getElementById('reset')

elementSumar.addEventListener("click", () => {
    contador += 1
    let elementParaf = document.getElementById('contador')
    elementParaf.innerHTML = contador
})

elementRestar.addEventListener("click", () => {
    contador -= 1
    let elementParaf = document.getElementById('contador')
    elementParaf.innerHTML = contador
});

elementReset.addEventListener("click", () => {
    contador = 0
    let elementParaf = document.getElementById('contador')
    elementParaf.innerHTML = contador
});


//loopear un arrays
let datos = [1, 2, 4, 6, "Carlos", "Juana", true, false,]
for(let valor of datos){
    console.log(valor)
}

datos.forEach(valor => console.log(valor))

//simulando matrices
let frutas = ["pera", "manzana", "platano", 1]
let numeros = [1, 2, 3, false]
let booleanos = [false, true, true, false]

let vectorDeVectores = [frutas, numeros, booleanos]
console.table(vectorDeVectores)
//pero y con fors?
for (let fila = 0; fila < 3; fila++) {
    for(let col = 0; col < 4; col++){
        console.log(vectorDeVectores[fila][col])
    }
}

//forEach(), map(), filter(), reduce()
const numero = [1, 2, 3, 4, 5]
const nuevoNumero = numero.map(val => val * 2)
console.log(nuevoNumero)
//agre un descuento de 10 a los precion que superen los 1000 o mas
const productos = [
    {id: "asdf", nombre: "Camiseta", precio: 500},
    {id: "sdff", nombre: "Zapatillas", precio: 2000},
    {id: "dfgv", nombre: "Pantalon", precio: 1500},
    {id: "jgvc", nombre: "Chaqueta", precio: 100}
]

/*const productosDesc = productos.map(valor => {
    if(valor.precio >= 1000){
        //nose hace asi, esto modifica el valor del arreglo original
        //y eso no debe ser, debemos de retornar otra nueva
        return valor.precio -= (valor.precio * 10) / 100
    }
    return valor.precio
})*/

const productosDesc = productos.map(valor => {
    if(valor.precio >= 1000){
        return {
            id: valor.id,
            nombre: valor.nombre,
            precio: valor.precio - (valor.precio * 10) / 100
        }   //forma correcta, osea no modifica nada por que no 
            //veo una asigancion de cualquier tipo :)
    }
    return valor
})

console.log(productos)
console.log(productosDesc)
//extraer datos de un producto
const idProductos = productos.map(valor => valor.id)
console.log(idProductos)

//traer el producto mas barato
const productosBaratos = productos.filter(valor => valor.precio < 1000)
const productosCaros = productos.filter(valor => valor.precio > 1000)
console.log(productosBaratos)
console.log(productosCaros)

//usando reduce para obtener la suma de todos los precios del arrays
const sumaPrecios = productos.reduce((acumuladorQueEs_0, valor) => acumuladorQueEs_0 += valor.precio, 0)
console.log(sumaPrecios)

//sin usar map o filter, obetner un nuevo array utilizando reduce()
const numerosDos = [1, 2, 3, 4, 5]
const funtionAcumuladora = (acumulador, numero) => {
    return [...acumulador, numero * 2]  //revisar spread operator jajaj :P
}
const doblesDeNumeros = numerosDos.reduce(funtionAcumuladora, [])
console.log(numerosDos)
console.log(doblesDeNumeros)
//Apartir de ahora con estos metodos map. filter y reduce puedes encadenarlos!!
