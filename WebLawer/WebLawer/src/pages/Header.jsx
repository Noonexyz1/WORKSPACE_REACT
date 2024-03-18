import ItemHeaderOption from "./ItemHeaderOption";
import LogoHeader from "./LogoHeader";

import './Header.css'
import Logo from '../assets/logo-firma.png'
import ItemHeaderOptionSideBar from "./ItemHeaderOptionSideBar";

const headerValues = {
    ourLogo: Logo,
    valueItems: ["Nosotros", "La Familia", "Resultados", "Especialidades", "Veredictos", "Contáctanos","Login"]
}
const showSideBarButton = () => {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
const hideSideBarButton = () => {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

function Header() {
    return(
        <div className="direction-header">
            <LogoHeader logo={headerValues.ourLogo}/>
            <div className="direction-list-items color-list-items hide-on-mobile">
                <ItemHeaderOption nameItem={headerValues.valueItems[0]}/>
                <ItemHeaderOption nameItem={headerValues.valueItems[1]}/>
                <ItemHeaderOption nameItem={headerValues.valueItems[2]}/>
                <ItemHeaderOption nameItem={headerValues.valueItems[3]}/>
                <ItemHeaderOption nameItem={headerValues.valueItems[4]}/>
                <ItemHeaderOption nameItem={headerValues.valueItems[5]}/>
                <ItemHeaderOption nameItem={headerValues.valueItems[6]}/>
            </div>
                <a href="#" className="menu-button" onClick={showSideBarButton}><svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 96 960 960" width="40"><path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"/></svg></a>
            <div className="sidebar color-list-items">
                <a href="#" onClick={hideSideBarButton}><svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 96 960 960" width="40"><path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/></svg></a>
                <ItemHeaderOptionSideBar nameItem={headerValues.valueItems[0]}/>
                <ItemHeaderOptionSideBar nameItem={headerValues.valueItems[1]}/>
                <ItemHeaderOptionSideBar nameItem={headerValues.valueItems[2]}/>
                <ItemHeaderOptionSideBar nameItem={headerValues.valueItems[3]}/>
                <ItemHeaderOptionSideBar nameItem={headerValues.valueItems[4]}/>
                <ItemHeaderOptionSideBar nameItem={headerValues.valueItems[5]}/>
                <ItemHeaderOptionSideBar nameItem={headerValues.valueItems[6]}/>
               
            </div>
        </div>
    );
}

export default Header;