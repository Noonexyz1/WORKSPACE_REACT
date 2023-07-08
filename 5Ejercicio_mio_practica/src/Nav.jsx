import {Vinculo} from './Enlace'

import './Nav.css'

export function Navegacion(props = {}){
    return (
        <>
            <nav className='navegacion-clase'>
                {/*{props.quienesSomos}, {props.contacto}, {props.ubi}, {props.comp}*/}
                <Vinculo direccion="https://www.google.com" mensaje="Ir a Google"/>
                <Vinculo direccion="facebook.com" mensaje="Ir a Facebook"/>
                <Vinculo direccion="amazon.com" mensaje="Ir a Amazon"/>
                <Vinculo direccion="youtube.com" mensaje="Ir a YouTube"/>

            </nav>
        </>
    );
}