import './BodyInformation.css'

function BodyInformation(props) {
    return(
        <div className="body-central-position body-height body-padding">
            <h2>{props.valor1}</h2>
            <h1>{props.valor2}</h1>
            <h3>{props.valor3}</h3>
            <button className='set-size-button body-padding'>{props.valorButton}</button>
        </div>
    );
}

export default BodyInformation;