import {Articulo} from './Articulo'
import {Aside} from './Aside'

import './Section.css'

export function Seccion(props) {
    return (
        <section className='secion'>
            
            <div className='articulos'>
                <Articulo titulo={props.tituloArticulo} contenido={props.contenidoArticulo}/>
                <Articulo titulo={props.tituloArticulo} contenido={props.contenidoArticulo}/>
                <Articulo titulo={props.tituloArticulo} contenido={props.contenidoArticulo}/>
                <Articulo titulo={props.tituloArticulo} contenido={props.contenidoArticulo}/>
                <Articulo titulo={props.tituloArticulo} contenido={props.contenidoArticulo}/>
                <Articulo titulo={props.tituloArticulo} contenido={props.contenidoArticulo}/>
                <Articulo titulo={props.tituloArticulo} contenido={props.contenidoArticulo}/>
                <Articulo titulo={props.tituloArticulo} contenido={props.contenidoArticulo}/>
                <Articulo titulo={props.tituloArticulo} contenido={props.contenidoArticulo}/>
                <Articulo titulo={props.tituloArticulo} contenido={props.contenidoArticulo}/>
                <Articulo titulo={props.tituloArticulo} contenido={props.contenidoArticulo}/>
                <Articulo titulo={props.tituloArticulo} contenido={props.contenidoArticulo}/>
                <Articulo titulo={props.tituloArticulo} contenido={props.contenidoArticulo}/>
                <Articulo titulo={props.tituloArticulo} contenido={props.contenidoArticulo}/>
                <Articulo titulo={props.tituloArticulo} contenido={props.contenidoArticulo}/>
                <Articulo titulo={props.tituloArticulo} contenido={props.contenidoArticulo}/>
                <Articulo titulo={props.tituloArticulo} contenido={props.contenidoArticulo}/>
                <Articulo titulo={props.tituloArticulo} contenido={props.contenidoArticulo}/>
                <Articulo titulo={props.tituloArticulo} contenido={props.contenidoArticulo}/>
                <Articulo titulo={props.tituloArticulo} contenido={props.contenidoArticulo}/>
            </div>
            
            <Aside titulo={props.tituloAside} contenido={props.contenidoAside}/>

        </section>

    );
}