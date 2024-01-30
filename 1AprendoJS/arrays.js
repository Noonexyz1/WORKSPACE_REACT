//LOS ARRAYS SON DINAMICOS
//con const, este arreglo no podra ser rreasignado, pero si modificado
const nombres = ["Diego", "Carlos", "Ana", "Jose", "Marcia"]
nombres.push("NUEVO NOMBRE")
nombres.shift()
nombres.pop()
console.log(nombres[1]) //muestra Ana tras haber operado con el array
console.table(nombres)

console.log(nombres.length)
nombres.sort()
console.table(nombres)
nombres.reverse()
console.table(nombres)
console.log(nombres.indexOf("Ana")) //muetra el indice de Ana

console.log(nombres[1]) //muestra Ana tras haber operado con el array



