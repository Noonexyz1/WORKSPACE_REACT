import './LogoLogin.css'

function LogoLogin(props) {
    return(
        <div className="space-between-logo-login size-logo-container-login">
            <img src={props.logo} alt='logo' className='size-logo-login'/>
        </div>
    );
}

export default LogoLogin;