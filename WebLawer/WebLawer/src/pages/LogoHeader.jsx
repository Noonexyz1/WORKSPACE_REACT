import './LogoHeader.css'

function LogoHeader(props) {
    return(
        <div className="space-between-logo">
            <img src={props.logo} alt='logo' />
        </div>
    );
}

export default LogoHeader;