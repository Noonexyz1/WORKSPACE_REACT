import Logo from '../assets/logo-firma.png'

import './Login.css'
import LogoLogin from './LogoLogin';
/*Tengo que heredar todos los css de los botones, titulos y demas para solamente aplicarlo*/

function Login() {
    return(
        <div className='display-flex-form'>
            <form action="" method="post" className='direction-elements-from'>
                <div className='logo-central-login'>
                    <LogoLogin  logo={Logo}/>
                </div>
                <h1 className='logo-central-login'>Login</h1>
                <label for="username">Usuario o Email:</label>
                <input type="text" id="username" name="username" required className='input-sign'/>
                <label for="password">Contraseña:</label>
                <input type="password" id="password" name="password" required className='input-sign'/>
                <input type="submit" value="Iniciar Sesión" className='boton-sign'/>
            </form>
        </div>
    );
}

export default Login;