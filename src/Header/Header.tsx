import Navigation from '../Navigation/Navigation'
import Logo from './Logo'
import './Header.css'
function Header() {
    return (
        <header className="Header-site-header">
            <Logo />
            <Navigation />
        </header>
    )
}
export default Header
