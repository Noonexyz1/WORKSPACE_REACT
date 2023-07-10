export function Home({user, setUser}){

    const manejadorSalir = () => {
        setUser([])
    }

    return(
        <div>
            <h1>Bienvenido</h1>
            <h2>{user}</h2>
            <button onClick={manejadorSalir}>Cerrar Session</button>
        </div>
    )
}