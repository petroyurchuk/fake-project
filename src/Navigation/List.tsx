import './List.css'
function List() {
    return (
        <ul className="menu__list list-menu">
            <li className="list-menu__item">
                <a href="/" className="list-menu__link">
                    Home
                </a>
            </li>
            <li className="list-menu__item">
                <a href="/" className="list-menu__link">
                    About us
                </a>
            </li>
            <li className="list-menu__item">
                <a href="/" className="list-menu__link">
                    Products
                </a>
            </li>
            <li className="list-menu__item">
                <a href="/" className="list-menu__link">
                    How to get us
                </a>
            </li>
            <li className="list-menu__item">
                <a href="/" className="list-menu__link">
                    Contact us
                </a>
            </li>
        </ul>
    )
}

export default List
