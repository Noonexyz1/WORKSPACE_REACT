import './LogoHeader.css'

function LogoHeader(props) {
    return(
        <div className="space-between-logo size-logo-container">
            <img src={props.logo} alt='logo' className='size-logo'/>
        </div>
    );
}

export default LogoHeader;