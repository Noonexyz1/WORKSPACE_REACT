import './Footer.css'
import LogoLogin from './LogoLogin';
import Logo from '../assets/logo-firma.png'

function Footer() {
    return(
        <div className='direction-for-footer'>
             <LogoLogin logo={Logo}/>           
             <div className='spacing-cards-footer'>
                <h3>Abogados</h3>
                <p>Quienes Somos?</p>
                <p>Nuestro talento</p>
                <p>Reputacion</p>
                <p>Pericia</p>
                <p>EStamos contratando!</p>
             </div>
             <div className='spacing-cards-footer'>
                <h3>Noticia</h3>
                <p>Lo que decimos</p>
                <p>Nuestras publicaciones</p>
                <p>Blog</p>
                <p>Prensa</p>
                <p>90 grados</p>
             </div>
             <div className='spacing-cards-footer'>
                <h3>Ubicacion</h3>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY6rAihCx8F1VLFc0onmQR3EiEVWUKcHiGQNgV4UpxMp1wCMrt2PVJfxFLARE9cLkkfig&usqp=CAU" alt="" />
             </div>
        </div>
    )
}

export default Footer;