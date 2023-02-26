import './Sidebar.css'
import articles from '../data/articles.json'
function Sidebar() {
    return (
        <div className="sidebar">
            <nav className="navigation">
                <ul className="list">
                    {articles.map((item) => (
                        <li className="list__item">
                            <a href={item.href} className="list__link">
                                {item.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar
