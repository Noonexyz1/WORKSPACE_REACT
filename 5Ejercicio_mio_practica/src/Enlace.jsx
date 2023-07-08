export function Vinculo({direccion, mensaje}){
    return (
        <>
            <a href={direccion}>
                {mensaje}
            </a>
        
        </>
    );
}