import BodyInformation from "./BodyInformation";

import './Body.css'

const bodyValues = {
    text1: "Tu firma legal personal",
    text2: "BIENVENIDO A NUESTRA FIRMA DE ABOGADOS",
    text3: "Confia en nostros que podemos alcanzar la meta",
    buttonText: "Tu Caso",
}

function Body(){
    return(
        <div>
            <BodyInformation valor1={bodyValues.text1} 
                            valor2={bodyValues.text2}
                            valor3={bodyValues.text3} 
                            valorButton={bodyValues.buttonText}/>
        </div>
    );
}

export default Body;