import Navigation from '../Navigation/Navigation'
import Logo from './Logo'
import Hire from './Hire'
import './Header.css'
function Header() {
    return (
        <header className="header-site-header">
            <div className="header__container">
                <Logo />
                <Navigation />
                <Hire />
            </div>
        </header>
    )
}
export default Header
