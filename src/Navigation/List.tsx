import './List.css'
function List() {
    return (
        <ul className="menu__list list-menu">
            <li key={1} className="list-menu__item">
                <a href="/" className="list-menu__link">
                    About us
                </a>
            </li>
            <li key={2} className="list-menu__item">
                <a href="/" className="list-menu__link">
                    About us
                </a>
            </li>
            <li key={3} className="list-menu__item">
                <a href="/" className="list-menu__link">
                    Services
                </a>
            </li>
            <li key={4} className="list-menu__item">
                <a href="/" className="list-menu__link">
                    Testimonials
                </a>
            </li>
            <li key={5} className="list-menu__item">
                <a href="/" className="list-menu__link">
                    Contact Us
                </a>
            </li>
        </ul>
    )
}

export default List
