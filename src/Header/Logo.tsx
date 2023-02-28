import './Logo.css'
import myImage from './images/logo.svg'
function Logo() {
    return (
        <a href="/" className="logo">
            <img src={myImage} alt="logo" />
        </a>
    )
}

export default Logo
