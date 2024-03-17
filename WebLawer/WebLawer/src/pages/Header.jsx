import ItemHeaderOption from "./ItemHeaderOption";
import LogoHeader from "./LogoHeader";

import './Header.css'
import Logo from '../assets/logo-firma.png'

const headerValues = {
    ourLogo: Logo,
    valueItems: ["Nosotros", "La Familia", "Resultados", "Especialidades", "Veredictos", "Contáctanos","Login"]
}


function Header() {
    return(
        <div className="direction-header">
            <LogoHeader logo={headerValues.ourLogo}/>
            <div className="direction-list-items color-list-items">
                <ItemHeaderOption nameItem={headerValues.valueItems[0]}/>
                <ItemHeaderOption nameItem={headerValues.valueItems[1]}/>
                <ItemHeaderOption nameItem={headerValues.valueItems[2]}/>
                <ItemHeaderOption nameItem={headerValues.valueItems[3]}/>
                <ItemHeaderOption nameItem={headerValues.valueItems[4]}/>
                <ItemHeaderOption nameItem={headerValues.valueItems[5]}/>
                <ItemHeaderOption nameItem={headerValues.valueItems[6]}/>
            </div>
        </div>
    );
}

export default Header;