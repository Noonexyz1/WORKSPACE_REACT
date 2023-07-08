import React from 'react'
import ReactDOM from 'react-dom/client'

//Importando el componente
import  OtroComponente, {Greeting, UserCard} from './Greeting'

let elementoDivIndex = document.getElementById("root")
let elementoDivIndexReact = ReactDOM.createRoot(elementoDivIndex)
elementoDivIndexReact.render(
    <>
        <Greeting
            y="Hola Mundo Y"
            z={23.34}
            a={{
                nombre: "Diego",
                edad: 23,
                peso: 62.23
            }}
            vector={["Hola", 123, 23.23, { nombre: "Vector", tamano: 23.3 }]} 
        />

           
        <UserCard 
            y="Hola Mundo Y"
            z={23.34}
            a={{
                nombre: "Diego",
                edad: 23,
                peso: 62.23
            }}
            vector={["Hola", 123, 23.23, { nombre: "Vector", tamano: 23.3 }]} 

            miFuncion = {function (){alert("Estoy Saludando")}}

        />
        <UserCard />
        <UserCard />
        <UserCard />

            


        <OtroComponente/>
        <OtroComponente/>
        <OtroComponente/>
        <OtroComponente/>

    </>

);

