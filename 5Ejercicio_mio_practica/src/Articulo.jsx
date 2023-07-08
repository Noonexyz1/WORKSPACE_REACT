export function Articulo({titulo, contenido}){
    return(
        <div>
            <article>
                <h1>{titulo}</h1>
                <p>{contenido}</p>
            </article>
        </div>
    );
}