import { Link } from 'react-router-dom'
import './List.css'
function List() {
    return (
        <ul className="menu__list list-menu">
            <li key={2} className="list-menu__item">
                <Link to="/about" className="list-menu__link">
                    About us
                </Link>
            </li>
            <li key={3} className="list-menu__item">
                <Link to="/services" className="list-menu__link">
                    Services
                </Link>
            </li>
            <li key={4} className="list-menu__item">
                <Link to="/sidebar" className="list-menu__link">
                    Testimonials
                </Link>
            </li>
            <li key={5} className="list-menu__item">
                <Link to="/contactus" className="list-menu__link">
                    Contact Us
                </Link>
            </li>
        </ul>
    )
}

export default List
