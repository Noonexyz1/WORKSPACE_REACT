import './Formulario.css'
import { useState } from 'react'


export function Formulario({setUser}){
    const [nombre, setNombre] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [error, setError] = useState(false);

    const manejadorSubmit = (e) => {
        e.preventDefault()
        if(nombre === "" || contrasena === ""){
            setError(true)
            return
        }
        setError(false)

        setUser([nombre])
    }

    return(
        <section>
            <h1>Login Formulario</h1>
            <form className='formulario'
                    onSubmit={manejadorSubmit}>
                <input type="text" 
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}/>
                <input type="password"
                        value={contrasena}
                        onChange={e => setContrasena(e.target.value)}/>
                <button>Iniciar Sesion</button>
            </form>
            {error && <p>Todos los campos son obligatorios</p>}

        </section>
    )
}