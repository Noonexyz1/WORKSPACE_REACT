import ItemHeaderOption from "./ItemHeaderOption";
import LogoHeader from "./LogoHeader";

import './Header.css'

function Header() {
    return(
        <div className="direction-header">
            <LogoHeader/>
            <div className="direction-list-items">
                <ItemHeaderOption/>
                <ItemHeaderOption/>
                <ItemHeaderOption/>
                <ItemHeaderOption/>
                <ItemHeaderOption/>
                <ItemHeaderOption/>
                <ItemHeaderOption/>
                <ItemHeaderOption/>
            </div>
        </div>
    );
}

export default Header;