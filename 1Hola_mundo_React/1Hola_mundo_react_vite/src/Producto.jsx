function Producto(){
    let prod = {
        nombre: "Leche",
        peso: 20,
        vencido: false
    }

    return <div>
        <p>Mostrando Producto: {JSON.stringify(prod)}</p>
    </div>

}

export function Navbar(){
    return <nav>Esto es para un NAVBAR</nav>
}

export default Producto