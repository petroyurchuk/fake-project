import List from './List'
import './Navigation.css'
function Navigation() {
    return (
        <div className="navigation__body">
            <button className="navigation__burger"></button>
            <nav className="menu">
                <List />
            </nav>
        </div>
    )
}
const burgerBtn = document.querySelector('.navigation__burger')
const navigationBody = document.querySelector('.navigation__body')
burgerBtn?.addEventListener('click', () => {
    navigationBody?.classList.toggle('open')
    console.log('clicked')
})
export default Navigation
