import List from './List'
import './Navigation.css'
function Navigation() {
    function add() {
        const navigationBody = document.querySelector('.navigation__body')
        navigationBody?.classList.toggle('open')
    }
    return (
        <div className="navigation__body">
            <button onClick={add} className="navigation__burger"></button>
            <nav className="menu">
                <List />
            </nav>
        </div>
    )
}
export default Navigation
