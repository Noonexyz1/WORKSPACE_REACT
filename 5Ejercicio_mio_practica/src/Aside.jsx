export function Aside({titulo, contenido}){
    return (
        <div style={{background: "red", padding: "15px", flex: '40%'}}>
            <aside>
                <h1>{titulo}</h1>
                <p>{contenido}</p>
            </aside>
        </div>
    );
}