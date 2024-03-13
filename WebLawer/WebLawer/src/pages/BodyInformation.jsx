import './BodyInformation.css'

function BodyInformation() {
    let valor1 = "Tu firma legal personal"
    let valor2 = "BIENVENIDO A NUESTRA FIRMA DE ABOGADOS"
    let valor3 = "Confia en nostros que podemos alcanzar la meta"
    let valor4 = "Tu Caso"

    return(
        <div className="body-central-position body-height body-padding">
            <h2>{valor1}</h2>
            <h1>{valor2}</h1>
            <h3>{valor3}</h3>
            <button className='set-size-button body-padding'>{valor4}</button>
        </div>
    );
}

export default BodyInformation;