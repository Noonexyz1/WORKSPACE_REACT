//POO
//creamos objetos con llaves
const persona = {
    nombre: "Juan",
    edad: 29,
    saludar: function(){console.log("Hola, soy " + this.nombre)}
}
persona.saludar()

//CLASSES
class Persona {
    constructor(nombre, edad, estatura){
        this._nombre = nombre
        this._edad = edad
        this._estatura = estatura
    }

    caminarPersona(){
        console.log("Persona Caminando: " + this._nombre)    
    }

}

let persona1 = new Persona("Diego", 28, 1.74)
persona1.caminarPersona()

//HERENCIA
class Estudiante extends Persona {
    constructor(nombre, edad, estatura, colegio){
        super(nombre, edad, estatura)
        this._colegio = colegio
    }

    caminarAlColegio(){
        console.log("Estoy yendo al COLEGIO")
    }
    

}

let estudiante = new Estudiante("Juan", 24, 1.60, "Holanda")
estudiante.caminarPersona()
estudiante.caminarAlColegio()
